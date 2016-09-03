
var util = require('util');
var fs = require('fs');
var request = require('request');
var Bot = require('slackbots');

var WeatherBot = function Constructor(settings) {
    this.settings = settings;
    this.settings.botName = settings.botName || 'WeatherBot';
    this.settings.googleApiKey = settings.googleApiKey;
};

// inherits methods and properties from the Bot constructor
util.inherits(WeatherBot, Bot);

WeatherBot.prototype.run = function () {
    WeatherBot.super_.call(this, this.settings);
    this.on('start', this._onStart);
    this.on('message', this._onMessage);
};

WeatherBot.prototype._onStart = function () {
    this.welcomeMessage();
};

WeatherBot.prototype.getHigh = function (tempArray) {
    tempArray.sort(function(a, b){return b-a});
    return tempArray[0].toFixed();
};

WeatherBot.prototype.fetchWeather = function(loc) {
    var self = this;
    var url = "https://api.forecast.io/forecast/" + this.settings.forecastApiKey + '/' + loc.lat + ',' + loc.lng;
    return new Promise(function(resolve, reject){
        return request(url, function (error, response, body) {
            var res = JSON.parse(body);
            if (res.currently && res.minutely) {
                var weatherObj = {
                    today: res.hourly.summary,
                    rightNow: res.minutely.summary,
                    temp: res.currently.temperature.toFixed()
                };
                var tempArray = res.hourly.data.map(function(hour) {
                    return hour.temperature;
                });
                var high = self.getHigh(tempArray);
                var weatherString = 'It\'s ' + weatherObj.temp + ' in ' + loc.city + '. ' + weatherObj.rightNow + '\n Today\'s high will be around ' + high + ' - ' + weatherObj.today.toLowerCase(); 
                
                return resolve(weatherString);
            } else {
                return reject('Error, no location found with that zip.');
            }
        });
    });
};

WeatherBot.prototype.fetchcoords = function(zip) {
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + '&key=' + this.settings.googleApiKey;
    return new Promise(function(resolve, reject){
        return request(url, function (error, response, body) {
            var parsedBody = JSON.parse(body);
            if (!parsedBody.results.length) {
                return reject('Error, no location found with that zip.');
            } else {
                var loc = parsedBody.results[0].geometry.location;
                loc.city = parsedBody.results[0].formatted_address;
                return resolve(loc);
            }
        });
    });

};

WeatherBot.prototype.welcomeMessage = function () {
    var welcomeMessage = 'Hi. Who wants a weather report? Type `weatherbot {zipcode here}` at any time.';
    this.postTheMessage(welcomeMessage);
};

WeatherBot.prototype._onMessage = function (message) {
    if (this._isChatMessage(message) &&
        this._isChannelConversation(message) &&
        !this.isFromWeatherBot(message)
    ) {
        this.getWeather(message);
    }
};

WeatherBot.prototype.postTheMessage = function(message) {
    this.postMessageToChannel('weather', message, {as_user: true});
};

WeatherBot.prototype.isFromWeatherBot = function(message) {
    return message.user === this.settings.botName;
};

WeatherBot.prototype.getWeather = function(message) {
    var self = this;
    var channel = message.channel;
    var text = message.text;

    if(text.indexOf('weatherbot ') > -1) {
        var zip = message.text.replace('weatherbot ', '');
        return self.fetchcoords(zip)
        .then(function(loc) {
            return self.fetchWeather(loc);
        })
        .then(function(weather) {
            return self.postTheMessage(weather);
        })
        .catch(function(err) {
            return self.postTheMessage(err);
        });
    }
};


WeatherBot.prototype._isChatMessage = function (message) {
    return message.type === 'message' && Boolean(message.text);
};

WeatherBot.prototype._isChannelConversation = function (message) {
    return typeof message.channel === 'string' &&
        message.channel[0] === 'C';
};

module.exports = WeatherBot;
