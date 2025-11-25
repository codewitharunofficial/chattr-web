"use client";

import { motion } from 'framer-motion';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCurrentChat } from "@/providers/ChatProvider";


export default function ChatItem({ chat, user }) {

    const router = useRouter();

    const { setCurrentChat } = useCurrentChat();

    return (
        <motion.div
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4 hover:bg-gray-50 cursor-pointer"
            whileHover={{ scale: 1.01 }}
            onClick={() => {setCurrentChat(chat); router.push(`/chat`);}}
        >
            <Image className="w-12 h-12 rounded-full bg-gray-300" src={chat?.senderId === user?._id ? chat?.receiver?.profilePhoto?.secure_url : chat?.sender?.profilePhoto?.secure_url} alt="User Avatar" width={48} height={48} />
            <div className="flex-1">
                <p className="font-semibold text-gray-800">{chat?.senderId === user?._id ? chat?.receiver?.name : chat?.sender?.name}</p>
                <p className="text-gray-500 text-sm">{chat?.chat[chat?.chat?.length - 1]?.type === "Text" ? chat?.chat[chat?.chat?.length - 1]?.message?.message : `${chat?.senderId === user?._id ? `${chat?.receiver?.name} sent an attachment` : "You send a attachment"}`}</p>
            </div>
            <span className="text-xs text-gray-400">{moment(chat?.chat[chat?.chat?.length - 1]?.createdAt).fromNow()}</span>
        </motion.div>
    );
}