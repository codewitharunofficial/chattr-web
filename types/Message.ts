import { Chat } from "@/interfaces/Chat";
import { User } from "./User";

export type Message = {
  sender: User | null;
  reciever: User | null;
  convoId: Chat | null;
  message: string;
};
