import TelegramBot from "node-telegram-bot-api";
import { conversationContext } from "../../../context/conversationContext";
import { ChatStates } from "../../../../model/chatStates";

export const selectVideoToEditHandler = (
    bot: TelegramBot, 
    message: TelegramBot.Message
) => {
    const chatId = message.chat.id;
    const videoId = message.text;

    if (Number.isNaN(Number(videoId))) {
        bot.sendMessage(chatId, 'ID de video no válido, accion cancelada');
        conversationContext.clear(chatId);
        return;
    }

    bot.sendMessage(chatId, 'Escribe la nueva descripción del video');

    conversationContext.add(chatId, {
        state: ChatStates.EDITING_VIDEO_DESCRIPTION,
        videoId: Number(videoId),
    });
}