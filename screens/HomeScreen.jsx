import { motion } from 'framer-motion'
import ChatItem from '../components/ChatItem';
import { Plus, Search } from 'lucide-react';
import { Tooltip } from '@mui/material';

export default function HomeScreen({ chats, user }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-2 bg-white shadow p-3 rounded-xl mb-4">
                <Search className="text-gray-500" />
                <input
                    placeholder="Search chats..."
                    className="flex-1 outline-none text-gray-700"
                />
                <Tooltip title="New Chat" arrow placement="bottom">
                    <Plus className="text-gray-700 cursor-pointer" />
                </Tooltip>
            </div>


            <div className="space-y-3">
                {chats?.length > 0 && chats?.map((chat, i) => (
                    <ChatItem key={i} chat={chat} user={user} />
                ))}
            </div>
        </motion.div>
    );
}