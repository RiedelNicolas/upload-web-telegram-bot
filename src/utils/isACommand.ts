export const isACommand = (text?: string) => {
    return text?.startsWith('/');
}