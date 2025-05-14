import TelegramBot from "node-telegram-bot-api";
import { conversationContext } from "../../context/conversationContext";

export const videoHandler = (bot: TelegramBot) => {
    bot.onText(/\/addvideo/, (message) => {
        const chatId = message.chat.id;
        bot.sendMessage(chatId,
            "Por favor, ingresa el link que deseas agregar al video. \n\n" +
            "En caso de querer cancelar la acción ingresa cualquier otra cosa"
        );
        conversationContext.add(chatId, );
    });
        
//         bot.once('message', (message) => {
//             const videoLink = message.text;
//             console.log(videoLink);
//             if (!isValidLink(videoLink)) {
//                 bot.sendMessage(chatId, "Acción cancelada.");
//                 return;
//             }
//             // Aquí puedes agregar la lógica para guardar el video en la base de datos
//             bot.sendMessage(chatId, `El video ${videoLink} ha sido agregado.`);
//             bot.once('message', (message) => {
//                 bot.sendMessage(chatId ,"Hola");
//             })
//         });
//     });
// }