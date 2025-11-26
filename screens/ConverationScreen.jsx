import { TextMessage, ImageMessage, AudioMessage, VideoMessage } from "@/components/Messages";
import MessageInputBar from '@/components/InputBox';
import { ArrowLeft, Info, Phone, Video } from "lucide-react";
import Image from "next/image";
import { useCurrentChat } from "@/providers/ChatProvider";
import { useUser } from "@/providers/UserProvider";
import { useRouter } from "next/navigation";
import moment from "moment";


export default function ConversationScreen() {

    const { currentChat } = useCurrentChat();
    const router = useRouter();


    console.log(currentChat);
    const { user } = useUser();

    return (
        <div className="flex flex-col h-[90vh] border-l border-gray-200">

            <div className="flex items-center justify-between bg-white p-3 shadow-md sticky top-0 z-20 border-b">
                <div className="flex items-center gap-3">
                    <ArrowLeft onClick={() => router.back()} className="hover:text-blue-600 cursor-pointer" />
                    <Image referrerPolicy="no-referrer" src={currentChat?.senderId === user?._id ? currentChat?.receiver?.profilePhoto?.secure_url : currentChat?.sender?.profilePhoto?.secure_url} className="w-10 h-10 rounded-full object-cover" width={40} height={40} alt="image" />
                    <div>
                        <p className="font-semibold text-gray-800 text-sm">{currentChat?.senderId === user?._id ? currentChat?.receiver?.name : currentChat?.sender?.name}</p>
                        <p className="text-xs text-gray-500">{moment(currentChat?.senderId === user?._id ? currentChat?.receiver?.lastseen : currentChat?.sender?.lastseen).fromNow()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                    <Video className="hover:text-blue-600 cursor-pointer" />
                    <Phone className="hover:text-blue-600 cursor-pointer" />
                    <Info className="hover:text-blue-600 cursor-pointer" />
                </div>
            </div>


            <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
                {
                    currentChat?.chat?.map((message, index) => {
                        switch (message.type) {
                            case "Text":
                                return <TextMessage key={index} message={message?.message?.message} isMe={currentChat?.senderId === user?._id} />;
                            case "Image":
                                return <ImageMessage key={index} imgUrl={message?.message?.secure_url} isMe={currentChat?.senderId === user?._id} />;
                            case "Audio":
                                return <AudioMessage key={index} audioUrl={message?.message?.secure_url} isMe={currentChat?.senderId === user?._id} />;
                            case "Video":
                                return <VideoMessage key={index} videoUrl={message?.message?.secure_url} isMe={currentChat?.senderId === user?._id} />;
                            default:
                                return null;
                        }
                    })
                }
            </div>


            <MessageInputBar />
        </div>
    );
}