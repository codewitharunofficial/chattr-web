import { TextMessage, ImageMessage, AudioMessage, VideoMessage } from "@/components/Messages";
import MessageInputBar from '@/components/InputBox';
import { Info, Phone, Video } from "lucide-react";
import Image from "next/image";
import { useCurrentChat } from "@/providers/ChatProvider";


export default function ConversationScreen() {

    const { currentChat } = useCurrentChat();

    console.log(currentChat);

    return (
        <div className="flex flex-col h-screen border-l border-gray-200">

            <div className="flex items-center justify-between bg-white p-3 shadow-md sticky top-0 z-20 border-b">
                <div className="flex items-center gap-3">
                    <Image src={currentChat?.senderId === currentChat?.user?._id ? currentChat?.receiver?.profilePhoto?.secure_url : currentChat?.sender?.profilePhoto?.secure_url} className="w-10 h-10 rounded-full object-cover" width={40} height={40} alt="image" />
                    <div>
                        <p className="font-semibold text-gray-800 text-sm">John Doe</p>
                        <p className="text-xs text-gray-500">Last seen 2 mins ago</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                    <Video className="hover:text-blue-600 cursor-pointer" />
                    <Phone className="hover:text-blue-600 cursor-pointer" />
                    <Info className="hover:text-blue-600 cursor-pointer" />
                </div>
            </div>


            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <TextMessage message="Hey! How’s it going?" sender="other" />
                <TextMessage message="All good! Working on the chat app UI 🚀" sender="me" />
                <ImageMessage imgUrl="https://via.placeholder.com/200" sender="other" />
                <AudioMessage sender="me" />
                <VideoMessage videoUrl="https://www.w3schools.com/html/mov_bbb.mp4" sender="other" />
            </div>


            <MessageInputBar />
        </div>
    );
}