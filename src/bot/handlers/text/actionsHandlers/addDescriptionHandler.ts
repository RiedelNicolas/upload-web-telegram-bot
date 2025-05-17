import TelegramBot from "node-telegram-bot-api";
import { conversationContext, ConversationContextItem } from "../../../context/conversationContext";
import { errorHandler } from "../../error/errorHandler";
import { addVideo } from "../../../../db/firebase";

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

    bot.sendMessage(chatId, 'Guardando video...');

    addVideo(videoLink, videoDescription).then((docId) => {
        bot.sendMessage(chatId, 'Descripción válida, video guardado');
    }).catch((error) => {
        bot.sendMessage(chatId, `Error al guardar el video (${error.message})`);
    });

    conversationContext.clear(chatId);
}