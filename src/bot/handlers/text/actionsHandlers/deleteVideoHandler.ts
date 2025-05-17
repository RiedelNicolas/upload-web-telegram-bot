import TelegramBot from "node-telegram-bot-api";
import { conversationContext } from "../../../context/conversationContext";
import { deleteVideo } from "../../../../db/firebase";

export const deleteVideoHandler = (
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

    bot.sendMessage(chatId, 'Eliminando video...');

    deleteVideo(Number(videoId)).then(() => {
        bot.sendMessage(chatId, 'Video eliminado');
    }
    ).catch((error) => {
        bot.sendMessage(chatId, `Error al eliminar el video (${error.message})`);
        }
    );
}