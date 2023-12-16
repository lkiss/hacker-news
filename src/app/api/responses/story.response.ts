export interface StoryResponse {
    id: string;
    by?: string;
    text?: string;
    title?: string;
    type?: string;
    time?: number;
    score?: string;
    url?: URL;
    dead?: boolean;
    deleted?: boolean;
    kids?: string[];
    descendants?: number;
}