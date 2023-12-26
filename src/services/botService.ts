import TelegramBot from 'node-telegram-bot-api';
import { FieldValue } from 'firebase-admin/firestore';
import { db } from '../config/firebase';

export const start = async (chatId: number, bot: TelegramBot) => {
    bot.sendMessage(
        chatId,
        'Welcome to the EzigboBot!\nHow can I assist you?\nPossible use cases:\n/todo: for appending to a todo-list (e.g: /todo buy eggs)\n/showtodo: to show todo-list\n/done: to remove item from todo-list\nYou spell out the command and what you\'re adding/removing'
    );
};

export const addTodo = async (chatId: number, item: string, bot: TelegramBot) => {
    try {
        const data = {
            title: item,
            timestamp: FieldValue.serverTimestamp(),
        };
    
        await db.collection('todolist').doc(item).set(data);
    
        bot.sendMessage(chatId, `Item appended to to-do list: ${item}`);
    } catch (error) {
        console.error('Error adding to-do item:', error);
        bot.sendMessage(chatId, 'Failed to append item to to-do list.');
    }
};
  
export const showTodo = async (chatId: number, bot: TelegramBot) => {
    try {
        const todoRef = db.collection('todolist');
        const snapshot = await todoRef.get();
    
        await bot.sendMessage(chatId, 'Your to-do list:');
    
        snapshot.forEach((doc) => {
            bot.sendMessage(chatId, `-${doc.data().title}`);
        });
    } catch (error) {
        console.error('Error fetching to-do list:', error);
        bot.sendMessage(chatId, 'Failed to fetch to-do list.');
    }
};
  
export const removeTodo = async (chatId: number, item: string, bot: TelegramBot) => {
    try {
        let flag = false;
        const todoRef = db.collection('todolist');
        const snapshot = await todoRef.get();
    
        snapshot.forEach((doc) => {
            if (item.trim() === doc.data().title.trim()) {
                flag = true;
            }
        });
    
        if (flag) {
            await db.collection('todolist').doc(item).delete();
            bot.sendMessage(chatId, `You have removed "${item}" from your to-do list`);
        } else {
            bot.sendMessage(chatId, `Sorry! "${item}" was never on the to-do list`);
        }
    } catch (error) {
        console.error('Error removing to-do item:', error);
        bot.sendMessage(chatId, 'Failed to remove item from to-do list.');
    }
};
