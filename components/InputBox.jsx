export default function MessageInputBar() {
    return (
        <div className="p-3 bg-white flex items-center gap-3 shadow-md">
            <button className="text-gray-600 text-xl">😊</button>
            <button className="text-gray-600 text-xl">📎</button>
            <input
                className="flex-1 p-2 rounded-xl bg-gray-100 outline-none"
                placeholder="Type a message..."
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl">Send</button>
        </div>
    );
}
