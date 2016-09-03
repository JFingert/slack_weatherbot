#!/usr/bin/env node

'use strict';

var WeatherBot = require('../lib/weatherbot');

var apiToken = process.env.apiToken;
var forecastApiKey = process.env.forecastApiKey;
var googleApiKey = process.env.googleApiKey;
var weatherBotUserName = process.env.weatherBotUserName;
var config = require('../config') || {};

var weatherBot = new WeatherBot({
    token: config.apiToken || apiToken,
    botName: config.weatherBotUserName || weatherBotUserName,
    forecastApiKey: config.forecastApiKey || forecastApiKey,
    googleApiKey: config.googleApiKey || googleApiKey
});

weatherBot.run();
