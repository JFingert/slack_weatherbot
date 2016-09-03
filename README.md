# WeatherBot

set these process.env's:

	"apiToken": "",
	"weatherBotUserName": "",
	"forecastApiKey": "",
	"googleApiKey": ""




## Installation

```bash
$ npm install -g weatherbot
```

## Run locally

```bash
BOT_API_KEY=somesecretkey WeatherBot
```


## Getting the API token for your Slack channel

To allow the WeatherBot to connect your Slack channel you must provide him an API key. To retrieve it you need to add a new Bot in your Slack organization by visiting the following url: https://*yourorganization*.slack.com/services/new/bot, where *yourorganization* must be substituted with the name of your organization (e.g. https://*loige*.slack.com/services/new/bot). Ensure you are logged to your Slack organization in your browser and you have the admin rights to add a new bot.

You will find your API key under the field API Token, copy it in a safe place and get ready to use it.


## Configuration

The WeatherBot is configurable through environment variables. There are several variable available:


## Launching the bot from source

If you downloaded the source code of the bot you can run it using NPM with:

```bash
$ npm start
```

Don't forget to set your `BOT_API_KEY` environment variable bedore doing so. Alternatively you can also create a file called `token.js` in the root folder and put your token there (you can use the `token.js.example` file as a reference).


## Bugs and improvements

If you find a bug or have an idea about how to improve the WeatherBot you can [open an issue](https://github.com/lmammino/WeatherBot/issues) or [submit a pull request](https://github.com/lmammino/WeatherBot/pulls), it will definitely make you a better person! :P


## Adapted from:

The WeatherBot has been developed in collaboration with [Scotch.io](https://scotch.io). A [very detailed article](https://scotch.io/tutorials/building-a-slack-bot-with-node-js-and-chuck-norris-super-powers) has been published to explain every single line of code. It also explains you how to deploy the bot on a free Heroku instance, so you should give it a shot! 



## License

Licensed under [MIT License](LICENSE). © Joshua Fingert.
