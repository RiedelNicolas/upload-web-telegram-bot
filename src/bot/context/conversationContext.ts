import { ChatStates } from "../../model/chatStates";

export interface ConversationContextItem extends ConversationContextPayload{
    createdAt: Date;
}

export interface ConversationContextPayload {
    state: ChatStates;
    videoLink?: string;
    videoId?: string;
}



export const conversationContext = {
    context: {} as Record<number, ConversationContextItem>,

    add(chatId: number, payload: ConversationContextPayload ) {
        this.context[chatId] = {...payload, createdAt : new Date()}
    },

    clear(chatId: number) {
        if (this.context[chatId]) {
            delete this.context[chatId];
            console.log(`Context cleared for chatId: ${chatId}`);
        } else {
            console.log(`No context found for chatId: ${chatId}`);
        }
    },

    get(chatId: number): ConversationContextItem | null {
        return this.context[chatId] || null;
    }
};