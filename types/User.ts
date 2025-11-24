export type User = {
    _id: string;
    phone: string;
    email: string;
    password: string;
    isOnline: string;
    createdAt: string;
    updatedAt: string;
    photo: {
        url: string;
        public_id: string;
    };
    blockedUsers: string[];
}