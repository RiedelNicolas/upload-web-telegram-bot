import TelegramBot from "node-telegram-bot-api";
import { isValidLink } from "../../../../utils/isValidLink";
import { conversationContext } from "../../../context/conversationContext";
import { ChatStates } from "../../../../model/chatStates";

export const addVideoActionHandler = (
    bot: TelegramBot, 
    message: TelegramBot.Message) => {
    const chatId = message.chat.id;
    const videoLink = message.text;

    if (isValidLink(videoLink)) {
        bot.sendMessage(chatId, 'Link válido, ahora envía una descripción para el video');
        conversationContext.add(chatId, {
            state: ChatStates.ADDING_VIDEO_DESCRIPTION,
            videoLink: videoLink,
        });
    }else {
        bot.sendMessage(chatId, 'El link no es válido, subida cancelada');
        conversationContext.clear(chatId);
    }
}