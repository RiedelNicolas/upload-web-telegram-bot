import { Video } from "../db/model";

export const formatVideoList = (videos: Video[]) => {
    if (videos.length === 0) {
        return "No hay videos disponibles.";
    }

    const formattedVideos = videos.map((video, index) => {
        return `${index + 1}. ${video.description}`;
    });

    return formattedVideos.join("\n\n");

}