import TelegramBot from "node-telegram-bot-api";
import { conversationContext, ConversationContextItem } from "../../../context/conversationContext";
import { updateVideoDescription } from "../../../../db/firebase";

export const editVideoDescriptionHandler = (
    bot: TelegramBot, 
    message: TelegramBot.Message,
    context: ConversationContextItem
) => {
    const chatId = message.chat.id;
    const videoDescription = message.text;
    const videoId = context.videoId;

    if (!videoId || !videoDescription) {
        bot.sendMessage(chatId, 'Error al editar el video');
        conversationContext.clear(chatId);
        return;
    }

    bot.sendMessage(chatId, 'Editando video...');

    updateVideoDescription(videoId, videoDescription).then(() => {
        bot.sendMessage(chatId, 'Video editado!');
    }
    ).catch((error) => {
        bot.sendMessage(chatId, `Error al editar el video (${error.message})`);
    });
    conversationContext.clear(chatId);
}