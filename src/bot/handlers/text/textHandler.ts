import TelegramBot from "node-telegram-bot-api";
import { renderDefaultMessage } from "./renderDefaultMessage";
import { conversationContext } from "../../context/conversationContext";
import { ChatStates } from "../../../model/chatStates";
import { addVideoActionHandler } from "./actionsHandlers/addVideoActionHandler";
import { addDescriptionHandler } from "./actionsHandlers/addDescriptionHandler";

export const textHandler = (bot: TelegramBot) => {
    bot.on('message', (message) => {
        const chatId = message.chat.id;
        const context = conversationContext.get(chatId);

        if (!context) {
            const yourUsername = message.from?.username;
            bot.sendMessage(chatId, renderDefaultMessage(yourUsername || ''));
            return;
        }

        if (context.state === ChatStates.ADDING_VIDEO_LINK) {
            addVideoActionHandler(bot, message);
            return
        }

        if (context.state === ChatStates.ADDING_VIDEO_DESCRIPTION) {
            addDescriptionHandler(bot, message, context);
            return;
        }

        if (context.state === ChatStates.SELECTING_VIDEO_TO_DELETE) {
            return;
        }

        if (context.state === ChatStates.SELECTING_VIDEO_TO_EDIT) {
            return;
        }

        if (context.state === ChatStates.EDITING_VIDEO_LINK) {
            return;
        }

        if (context.state === ChatStates.EDITING_VIDEO_DESCRIPTION) {
            return;
        }
        
        conversationContext.clear(chatId);
    });
}