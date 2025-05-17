require('dotenv').config();
import TelegramBot from 'node-telegram-bot-api';
import { getBotToken } from './bot/getBotToken';
import { initHandlers } from './bot/handlers/initHandlers';
import { Command, commandsWithDescriptions } from './model/commands';


const initCommandInfo = (bot: TelegramBot) => {
    bot.setMyCommands(commandsWithDescriptions);
}

const initService = async () => {
    console.log('Initializing service...');
    try {
        const token = getBotToken();
        const bot = new TelegramBot(token, { polling: true,
            request: {
                url: 'https://api.telegram.org',
                agentOptions: {
                    keepAlive: true,
                    family: 4
                }
            }
         });
         initCommandInfo(bot);
        initHandlers(bot);
        console.log('Service initialized successfully.');
    } catch (error) {
        console.error('Error initializing service:', error);
    }
};

initService();