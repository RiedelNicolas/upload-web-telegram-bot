export const getBotToken = () => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) {
        throw new Error('TELEGRAM_BOT_TOKEN is not set in the environment variables.');
    }
    return token;
};