"use client";
import { sendMessage } from "@/api_calls/chats";
import { useState } from "react";

export default function MessageInputBar({ sender, receiver, convoId }) {

    const [message, setMessage] = useState("");


    return (
        <div className="p-3 bg-white flex items-center gap-3 shadow-md">
            <button className="text-gray-600 text-xl">😊</button>
            <button className="text-gray-600 text-xl">📎</button>
            <form className="flex-1 flex items-center gap-3" onSubmit={(e) => {
                e.preventDefault();
                sendMessage({ sender: sender, reciever: receiver, convoId: convoId, message: message });
                setMessage("");
            }}>

                <input
                    className="flex-1 p-2 rounded-xl bg-gray-100 outline-none"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl" onClick={() => sendMessage({ sender: sender, reciever: receiver, convoId: convoId, message: message })} >Send</button>
            </form>
        </div>
    );
}
