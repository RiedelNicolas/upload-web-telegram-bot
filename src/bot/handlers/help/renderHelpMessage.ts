export const renderHelpMessage = (username: string) => {
    const helpMessage = `
        Estos son los comandos disponibles:
        /help - Muestra este mensaje
        /addvideo - Agrega un video a la página
        /deletevideo - Borra un video de la página
        /editVideo - Permite editar la descripción de un video
        /getvideos - obtiene la lista de todos los videos de la página

        Tu usuario es: @${username}
    `;
    return helpMessage;
}