#!/usr/bin/env node

'use strict';

var WeatherBot = require('../lib/weatherbot');

var config = require('../config');

var weatherBot = new WeatherBot({
    token: config.apiToken,
    botName: config.weatherBotUserName,
    forecastApiKey: config.forecastApiKey,
    googleApiKey: config.googleApiKey
});

weatherBot.run();
