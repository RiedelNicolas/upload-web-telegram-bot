import TelegramBot from "node-telegram-bot-api";
import { conversationContext } from "../../context/conversationContext";
import { ChatStates } from "../../../model/chatStates";

export const videoHandler = (bot: TelegramBot) => {
    bot.onText(/\/addvideo/, (message) => {
        const chatId = message.chat.id;
        bot.sendMessage(chatId,
            "Por favor, ingresa el link que deseas agregar al video. \n\n" +
            "En caso de querer cancelar la acción ingresa cualquier otra cosa"
        );
        conversationContext.add(chatId, { state: ChatStates.ADDING_VIDEO_LINK });
    });
}