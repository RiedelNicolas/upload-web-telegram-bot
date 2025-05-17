import TelegramBot from "node-telegram-bot-api";
import { conversationContext } from "../../context/conversationContext";
import { ChatStates } from "../../../model/chatStates";
import { getVideos } from "../../../db/firebase";
import { sendVideoList } from "../../../utils/sendVideoList";
import { validateSession } from "../../../utils/validateSession";

export const videoHandler = (bot: TelegramBot) => {
    addVideoHandler(bot);
    getVideosHandler(bot);
    deleteVideoHandler(bot);
    editVideoHandler(bot);
}

const addVideoHandler = (bot: TelegramBot) => {
    bot.onText(/\/addvideo/, (message) => {
        if (!validateSession(bot, message)) return;
        const chatId = message.chat.id;
        bot.sendMessage(chatId,
            "Por favor, ingresa el link que deseas agregar al video. \n\n" +
            "En caso de querer cancelar la acción ingresa cualquier otra cosa"
        );
        conversationContext.add(chatId, { state: ChatStates.ADDING_VIDEO_LINK });
    });
}

const getVideosHandler = (bot: TelegramBot) => {
    bot.onText(/\/getvideos/, (message) => {
        if (!validateSession(bot, message)) return;
        const chatId = message.chat.id;
        bot.sendMessage(chatId, "Buscando videos ...");
            getVideos().then((videos) => {
                sendVideoList(bot, chatId, videos);
        }).catch((error) => {
            bot.sendMessage(chatId, `Error al obtener los videos (${error.message})`);
        });
    });
}

const deleteVideoHandler = (bot: TelegramBot) => {
    bot.onText(/\/deletevideo/, (message) => {
        if (!validateSession(bot, message)) return;
        const chatId = message.chat.id;
        bot.sendMessage(chatId, "Buscando videos ...");
        getVideos().then((videos) => {
            sendVideoList(bot, chatId, videos);
            bot.sendMessage(chatId, "Por favor, ingresa el ID del video que deseas eliminar");
            conversationContext.add(chatId, { state: ChatStates.SELECTING_VIDEO_TO_DELETE });
        }).catch((error) => {
            bot.sendMessage(chatId, `Error al obtener los videos (${error.message})`);
        });
    });
}

const editVideoHandler = (bot: TelegramBot) => {
    bot.onText(/\/editvideo/, (message) => {
        if (!validateSession(bot, message)) return;
        const chatId = message.chat.id;
        bot.sendMessage(chatId, "Buscando videos ...");
        getVideos().then((videos) => {
            sendVideoList(bot, chatId, videos);
            bot.sendMessage(chatId, "Por favor, ingresa el ID del video que deseas editar");
            conversationContext.add(chatId, { state: ChatStates.SELECTING_VIDEO_TO_EDIT });
        }).catch((error) => {
            bot.sendMessage(chatId, `Error al obtener los videos (${error.message})`);
        });
    });
}