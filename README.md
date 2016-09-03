# WeatherBot

example config.json
{
	"apiToken": "",
	"weatherBotUserName": "",
	"forecastApiKey": "",
	"googleApiKey": ""
}



## Installation

```bash
$ npm install -g weatherbot
```


## Running the NorrisBot

To run the NorrisBot you must have an [API token](#getting-the-api-token-for-your-slack-channel) to authenticate the bot on your slack channel. Once you get it (instructions on the next paragraph) you just have to run:


```bash
BOT_API_KEY=somesecretkey norrisbot
```


## Getting the API token for your Slack channel

To allow the NorrisBot to connect your Slack channel you must provide him an API key. To retrieve it you need to add a new Bot in your Slack organization by visiting the following url: https://*yourorganization*.slack.com/services/new/bot, where *yourorganization* must be substituted with the name of your organization (e.g. https://*loige*.slack.com/services/new/bot). Ensure you are logged to your Slack organization in your browser and you have the admin rights to add a new bot.

You will find your API key under the field API Token, copy it in a safe place and get ready to use it.


## Configuration

The NorrisBot is configurable through environment variables. There are several variable available:

| Environment variable | Description |
|----------------------|-------------|
| `BOT_API_KEY` | this variable is mandatory and must be used to specify the API token needed by the bot to connect to your Slack organization |
| `BOT_DB_PATH` | optional variable that allows you to use a different database or to move the default one to a different path |
| `BOT_NAME` | the name of your bot, it’s optional and it will default to norrisbot |



## Launching the bot from source

If you downloaded the source code of the bot you can run it using NPM with:

```bash
$ npm start
```

Don't forget to set your `BOT_API_KEY` environment variable bedore doing so. Alternatively you can also create a file called `token.js` in the root folder and put your token there (you can use the `token.js.example` file as a reference).


## Bugs and improvements

If you find a bug or have an idea about how to improve the NorrisBot you can [open an issue](https://github.com/lmammino/norrisbot/issues) or [submit a pull request](https://github.com/lmammino/norrisbot/pulls), it will definitely make you a better person! :P


## The Making of

The NorrisBot has been developed in collaboration with [Scotch.io](https://scotch.io). A [very detailed article](https://scotch.io/tutorials/building-a-slack-bot-with-node-js-and-chuck-norris-super-powers) has been published to explain every single line of code. It also explains you how to deploy the bot on a free Heroku instance, so you should give it a shot! 

Enjoy your reading!


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
