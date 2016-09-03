#!/usr/bin/env node

'use strict';

var WeatherBot = require('../lib/weatherbot');

/**
 * Environment variables used to configure the bot:
 *
 *  BOT_API_KEY : the authentication token to allow the bot to connect to your slack organization. You can get your
 *      token at the following url: https://<yourorganization>.slack.com/services/new/bot (Mandatory)
 *  BOT_DB_PATH: the path of the SQLite database used by the bot
 *  BOT_NAME: the username you want to give to the bot within your organisation.
 */
var config = require('../config');

var weatherBot = new WeatherBot({
    token: config.apiToken,
    botName: config.weatherBotUserName,
    forecastApiKey: config.forecastApiKey,
    googleApiKey: config.googleApiKey
});

weatherBot.run();
