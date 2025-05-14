export const renderDefaultMessage = (username: string) => {
    const defaultMessage = `
        Hola ${username || ''}, Usa el comando /help para ver los comandos disponibles
    `;
    return defaultMessage;
}