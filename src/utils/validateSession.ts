import TelegramBot from "node-telegram-bot-api";

const getAllowedUsers = () => {
    const allowedUsers = process.env.ALLOWED_USERS?.split('@') || [];
    const superUsers = process.env.SUPER_USERS?.split('@') || [];
    const allAllowedUsers = [...allowedUsers, ...superUsers];

    return allAllowedUsers.filter(user => user !== '');
}

export const validateSession = (bot : TelegramBot, message: TelegramBot.Message) => {
    const allowedUsers = getAllowedUsers();

    if (!message.from?.username || !allowedUsers.includes(message.from?.username)) {
        bot.sendMessage(message.chat.id, "No tienes permisos para usar este bot");
        return false;
    }
    return true;
}