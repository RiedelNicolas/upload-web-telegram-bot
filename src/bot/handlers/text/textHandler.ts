import TelegramBot from "node-telegram-bot-api";
import { renderDefaultMessage } from "./renderDefaultMessage";
import { conversationContext } from "../../context/conversationContext";
import { ChatStates } from "../../../model/chatStates";
import { addVideoActionHandler } from "./actionsHandlers/addVideoActionHandler";
import { addDescriptionHandler } from "./actionsHandlers/addDescriptionHandler";
import { deleteVideoHandler } from "./actionsHandlers/deleteVideoHandler";
import { selectVideoToEditHandler } from "./actionsHandlers/selectVideoToEditHandler";
import { editVideoDescriptionHandler } from "./actionsHandlers/editVideoDescriptionHandler";
import { isACommand } from "../../../utils/isACommand";

export const textHandler = (bot: TelegramBot) => {
    bot.on('message', (message) => {
        const chatId = message.chat.id;
        const context = conversationContext.get(chatId);

        if (isACommand(message.text)) { //This path is only for text messages
            return;
        }
        
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
            deleteVideoHandler(bot, message);
            return;
        }

        if (context.state === ChatStates.SELECTING_VIDEO_TO_EDIT) {
            selectVideoToEditHandler(bot, message);
            return;
        }

        if (context.state === ChatStates.EDITING_VIDEO_DESCRIPTION) {
            editVideoDescriptionHandler(bot, message, context);
            return;
        }
        
        conversationContext.clear(chatId);
    });
}