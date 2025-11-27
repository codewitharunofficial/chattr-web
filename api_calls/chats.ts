import { Chat } from "@/interfaces/Chat";
import { Message } from "@/types/Message";
import socketServices from "@/utilities/SocketServices";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const getChats = async (
  userId: string,
  setChats: React.Dispatch<React.SetStateAction<Chat[] | undefined>>
) => {
  try {
    const chats = JSON.parse(localStorage.getItem("chats") || "null");
    if (chats) {
      setChats(chats);
    }
    const { data } = await axios.get(
      `https://android-chattr-app.onrender.com/api/v1/messages/chats/${userId}`
    );
    localStorage.setItem("chats", JSON.stringify(data.chats || []));
    setChats(data.chats);
  } catch (error) {
    console.log(error);
  }
};

export const getUserFromLocalStorage = (
  setUser: React.Dispatch<React.SetStateAction<null>>,
  router: AppRouterInstance
) => {
  try {
    const user = localStorage.getItem("user");
    setUser(user ? JSON.parse(user) : null);
    if (!user) {
      router?.push("/auth");
    } else {
      router?.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const sendMessage = async (message: Message) => {
  try {
    socketServices.emit("send-message", {
      message: message,
    });

    socketServices.emit("recieved-message", {
      message: message,
    });
  } catch (error) {
    console.log(error);
  }
};
