import TelegramBot from 'node-telegram-bot-api';
import {
    start,
    addTodo,
    showTodo,
    removeTodo
} from '../services/botService';

export const configureBot = (bot: TelegramBot) => {
    bot.onText(/\/start/, async (msg) => {
        const chatId = msg.chat.id;
        await start(chatId, bot);
    });

    bot.onText(/\/todo/, async (msg) => {
        const chatId = msg.chat.id;
        const item = msg.text?.substring(5);
        if(item !== undefined){
            await addTodo(chatId, item, bot);
        }
    });
    
    bot.onText(/\/showtodo/, async (msg) => {
        const chatId = msg.chat.id;
        await showTodo(chatId, bot);
    });
    
    bot.onText(/\/done/, async (msg) => {
        const chatId = msg.chat.id;
        const item = msg.text?.substring(5);
        if(item !== undefined){
            await removeTodo(chatId, item, bot);
        }
    });
};