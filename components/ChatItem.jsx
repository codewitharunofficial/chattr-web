"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function ChatItem({ chat, user }) {

    const router = useRouter();

    console.log(chat, user);

    return (
        <motion.div
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4 hover:bg-gray-50 cursor-pointer"
            whileHover={{ scale: 1.01 }}
            onClick={() => router.push("/chat")}
        >
            <img className="w-12 h-12 rounded-full bg-gray-300" src={chat?.senderId === user?._id ? chat?.receiver?.profilePhoto?.secure_url : chat?.sender?.profilePhoto?.secure_url} alt="User Avatar" />
            <div className="flex-1">
                <p className="font-semibold text-gray-800">{chat?.senderId === user?._id ? chat?.receiver?.name : chat?.sender?.name}</p>
                <p className="text-gray-500 text-sm">{chat?.chat[chat?.chat?.length - 1]?.message?.type === "Text" && chat?.chat[chat?.chat?.length - 1]?.message?.message}</p>
            </div>
            <span className="text-xs text-gray-400">2:45 PM</span>
        </motion.div>
    );
}