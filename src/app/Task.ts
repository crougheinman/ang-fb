export interface Task {
    id?: string;
    day: string;
    reminder: boolean;
    text: string;
    status: number;
    created_at?: any;
    updated_at?: any;
}