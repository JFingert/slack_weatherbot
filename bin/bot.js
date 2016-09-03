#!/usr/bin/env node

'use strict';

var WeatherBot = require('../lib/weatherbot');

var apiToken = process.env.apiToken;
var forecastApiKey = process.env.forecastApiKey;
var googleApiKey = process.env.googleApiKey;
var weatherBotUserName = process.env.weatherBotUserName;

var weatherBot = new WeatherBot({
    token: apiToken,
    botName: weatherBotUserName,
    forecastApiKey: forecastApiKey,
    googleApiKey: googleApiKey
});

weatherBot.run();
