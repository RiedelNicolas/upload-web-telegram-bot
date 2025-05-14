import TelegramBot from "node-telegram-bot-api";
import { conversationContext, ConversationContextItem } from "../../../context/conversationContext";
import { errorHandler } from "../../error/errorHandler";

export const addDescriptionHandler = (
    bot: TelegramBot, 
    message: TelegramBot.Message,
    context: ConversationContextItem
) => {
    const chatId = message.chat.id;
    const videoLink = context.videoLink;
    console.log('videoLink', videoLink);
    const videoDescription = message.text;

    if (!videoLink || !videoDescription) {
        errorHandler(bot, chatId);
        return;
    }

    bot.sendMessage(chatId, 'Descripción válida, video guardado');

    conversationContext.clear(chatId);
}