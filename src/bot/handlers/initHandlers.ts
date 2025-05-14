import TelegramBot from "node-telegram-bot-api";
import { helpHandler } from "./help/helpHandler";
import { videoHandler } from "./video/videoHandlers";

export const initHandlers = (bot : TelegramBot) => {
    console.log('Initializing handlers...');
    try {
        helpHandler(bot);
        videoHandler(bot);

        // defaultHandler(bot);

        console.log('Handlers initialized successfully.');
    } catch (error) {
        console.error('Error initializing handlers:', error);
    }
}