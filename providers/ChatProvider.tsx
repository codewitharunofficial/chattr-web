"use client"
import React, { createContext, useContext } from "react";

const ChatContext = createContext<{ currentChat: null; setCurrentChat: React.Dispatch<React.SetStateAction<null>> } | null>(null);

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentChat, setCurrentChat] = React.useState<null>(null);

    return (
        <ChatContext.Provider value={{ currentChat, setCurrentChat }}>
            {children}
        </ChatContext.Provider>
    );
}

const useCurrentChat = () => useContext(ChatContext);
export { ChatProvider, useCurrentChat };

