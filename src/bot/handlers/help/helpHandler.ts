import TelegramBot from "node-telegram-bot-api";
import { renderHelpMessage } from "./renderHelpMessage";
import { conversationContext } from "../../context/conversationContext";

export const helpHandler = (bot : TelegramBot) => {

    bot.onText(/\/help/, (message) => {
        const chatId = message.chat.id;
        const yourUsername = message.from?.username;
        bot.sendMessage(chatId, renderHelpMessage(yourUsername || ''));
        conversationContext.clear(chatId);
    });
}
