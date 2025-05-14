import TelegramBot from "node-telegram-bot-api";
import { renderDefaultMessage } from "./renderDefaultMessage";

export const defaultHandler = (bot: TelegramBot) => {
    bot.on('message', (message) => {
        const chatId = message.chat.id;
        const yourUsername = message.from?.username;
        bot.sendMessage(chatId, renderDefaultMessage(yourUsername || ''));
    });
}