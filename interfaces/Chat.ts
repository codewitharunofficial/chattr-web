export interface Chat {
    _id: string;
    users: string[];
    latestMessage: {
        _id: string;
        sender: string;
        content: string;
        timestamp: string;
    };
}