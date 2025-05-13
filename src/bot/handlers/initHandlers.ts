import TelegramBot from "node-telegram-bot-api";
import { helpHandler } from "./help/helpHandler";

export const initHandlers = (bot : TelegramBot) => {
    console.log('Initializing handlers...');
    try {
        bot.onText(/\/start/, (msg) => {
            const chatId = msg.chat.id;
            bot.sendMessage(chatId, 'Welcome to the bot!');
        });

        helpHandler(bot);

        console.log('Handlers initialized successfully.');
    } catch (error) {
        console.error('Error initializing handlers:', error);
    }
}