export enum Command {
    HELP = '/help',
    ADDVIDEO = '/addvideo',
    DELETEVIDEO = '/deletevideo',
    EDITVIDEO = '/editvideo',
    GETVIDEOS = '/getvideos',
}

export const commandsWithDescriptions = [
    { command: Command.HELP, description: 'Muestra los comandos disponibles' },
    { command: Command.ADDVIDEO, description: 'Agrega un video a la lista' },
    { command: Command.DELETEVIDEO, description: 'Elimina un video de la lista' },
    { command: Command.EDITVIDEO, description: 'Edita la descripcion de un video' },
    { command: Command.GETVIDEOS, description: 'Obtiene la lista de videos' },
]