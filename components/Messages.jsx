import Image from "next/image";

export function TextMessage({ message, isMe }) {
    return (
        <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-xs p-3 rounded-2xl shadow text-sm ${isMe ? "bg-blue-600 text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none"
                    }`}
            >
                {message}
            </div>
        </div>
    );
}


export function ImageMessage({ imgUrl, isMe }) {
    return (
        <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <Image src={imgUrl} className="w-40 h-40 rounded-2xl object-cover shadow" width={160} height={160} alt="image" />
        </div>
    );
}


export function AudioMessage({ audioUrl, isMe }) {
    return (
        <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <div className="bg-white p-3 rounded-2xl shadow flex items-center gap-3 w-48">
                <div className="w-8 h-8 bg-blue-600 rounded-full" />
                <div className="flex-1 h-2 bg-gray-300 rounded" />
            </div>
        </div>
    );
}


export function VideoMessage({ videoUrl, isMe }) {
    return (
        <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
            <video className="w-48 rounded-2xl shadow" controls>
                <source src={videoUrl} />
            </video>
        </div>
    );
}