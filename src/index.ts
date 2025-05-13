require('dotenv').config();
import TelegramBot from 'node-telegram-bot-api';
import { getBotToken } from './bot/getBotToken';
import { initHandlers } from './bot/handlers/initHandlers';


const initService = async () => {
    console.log('Initializing service...');
    try {
        const token = getBotToken();
        const bot = new TelegramBot(token, { polling: true });
        initHandlers(bot);
        console.log('Service initialized successfully.');
    } catch (error) {
        console.error('Error initializing service:', error);
    }
};

initService();