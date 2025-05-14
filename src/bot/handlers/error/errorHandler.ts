import TelegramBot from "node-telegram-bot-api";
import { conversationContext } from "../../context/conversationContext";

export const errorHandler = (bot : TelegramBot, chatId : number) => {

    bot.sendMessage(chatId, 'Ocurrió un error inesperado, por favor intenta nuevamente.');
    conversationContext.clear(chatId);
}
