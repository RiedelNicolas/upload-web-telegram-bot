import { commandsWithDescriptions } from "../../../model/commands";

export const renderHelpMessage = (username: string) => {

    let helpMessage = ` Estos son los comandos disponibles: \n`;
    
    commandsWithDescriptions.forEach((command) => {
        helpMessage += `\n${command.command} - ${command.description}`;
    }
    );
    
    helpMessage += `\n\nSi necesitas ayuda, no dudes en preguntar.`;

    return helpMessage;
}