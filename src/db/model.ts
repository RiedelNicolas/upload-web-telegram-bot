export interface VideoPayload {
    link: string;
    description: string;
    createdAt: Date;
}
export interface Video extends VideoPayload {
    id: string;
}