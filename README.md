# Telegram Bot

This is a simple Telegram bot that can be used to create a simple to-do list. The bot is written in TypeScript and uses the `express` framework for the web server and the `node-telegram-bot-api` library for interacting with the Telegram API.

## Prerequisites

To run this bot, you will need the following:

* NodeJS and npm installed
* A Telegram account
* A Firebase account

## Setup

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Create a `.env` file in the root directory of the project and add the following environment variables:

```
PORT=XXXX
TOKEN=<your Telegram bot token>
```

You can get your Telegram bot token by following these steps:

1. Open the Telegram app on your phone/laptop.
2. Search for "BotFather".
3. Tap on "start" or send "/start".
4. The account explains how to go about creating your bot and getting your token

4. Start the bot by running `npm run dev`.

## Usage

Once the bot is running, you can send messages to your Telegram group or channel by using the following commands:

* `/start`: Displays the lists of commands.
* `/todo`: Adds a task to your todo list. Example usage: `/todo Buy groceries`
* `/showtodo`: Displays the todo list.
* `/done`: Remove todo item. Example usage: `/done Buy groceries`

## Firebase hosting
If you check the `.gitgnore` file, you'll notice a file that is being ignored there.
That is the service account file you'll need to initialize your firebase app

You can get that file by following this steps:

1. Create a firebase account [here](https://firebase.google.com).
2. After creating your account head over to console.
3. Tap on "Add Project" and enter a project name
4. Read the neccessary terms and condition and create the project.
5. You can do the rest after following this guide: [Click me!](https://firebase.google.com/docs/guides/)

