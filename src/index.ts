import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import { configureBot } from './controllers/botController';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT ?? 3000;
const app = express();

const token = process.env.TOKEN as string; // token gotten from "BotFather" on Telegram
const bot = new TelegramBot(token, { polling: true });
configureBot(bot);

app.get('/', (req, res) => {
    res.send('Ndeewo');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});