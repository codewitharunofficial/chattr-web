export default function StoryItem() {
    return (
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-linear-to-tr from-pink-500 to-purple-500 p-1">
                <div className="w-full h-full bg-white rounded-full" />
            </div>
            <p className="text-xs mt-2 text-gray-600">User</p>
        </div>
    );
}