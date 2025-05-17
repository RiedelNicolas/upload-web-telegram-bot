import TelegramBot from "node-telegram-bot-api";
import { Video } from "../db/model";

const formatVideoList = (videos: Video[]) => {
    if (videos.length === 0) {
        return "No hay videos disponibles.";
    }

    const formattedVideos = videos.map((video, index) => {
        return `${index + 1}. [${video.description}](${video.link})`;
    });

    return formattedVideos.join("\n\n");

}

export const sendVideoList = (bot : TelegramBot, chatId: number, videos: Video[]) => {
    const formattedResponse = formatVideoList(videos);
    bot.sendMessage(chatId, formattedResponse, { 
        parse_mode: "Markdown",
        disable_web_page_preview: true,
    });
}