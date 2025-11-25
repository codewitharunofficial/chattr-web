"use client";

import { useEffect, useState } from "react";
import { Plus, Phone, Settings, Users } from "lucide-react";
import HomeScreen from '@/screens/HomeScreen';
import StoryScreen from '@/screens/StoryScreen';
import CallLogsScreen from '@/screens/CallLogsScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Chat } from "@/interfaces/Chat";
import { Tooltip } from "@mui/material";
import { getChats, getUserFromLocalStorage } from "@/api_calls/chats";
import { User } from "@/types/User";

export default function App() {
  const [screen, setScreen] = useState("home");
  const router = useRouter();
  const [chats, setChats] = useState<Chat[] | undefined>(undefined);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) getUserFromLocalStorage(setUser, router);
  }, [router, user]);

  useEffect(() => {
    if (user) {
      getChats(user._id, setChats);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="flex items-center justify-between bg-white p-4 shadow-md">
        <div className="flex items-center gap-2">
          <Image className="w-8 h-8 bg-blue-600 rounded-xl" src={'/Icon.webp'} alt="App Icon" width={80} height={80} />
          <span className="font-bold text-gray-800 text-lg">Chattr-Web</span>
        </div>


        <div className="flex items-center gap-6">

          <Tooltip title="Chats" arrow placement="bottom">

            <button onClick={() => setScreen("home")} className="text-gray-700 flex flex-col items-center cursor-pointer">
              <Users />
              <span className="text-xs">Chats</span>
            </button>
          </Tooltip>

          <Tooltip title="Stories" arrow placement="bottom">
            <button onClick={() => setScreen("story")} className="text-gray-700 flex flex-col items-center cursor-pointer">
              <Plus />
              <span className="text-xs">Stories</span>
            </button>
          </Tooltip>
          <Tooltip title="Calls" arrow placement="bottom">
            <button onClick={() => setScreen("calls")} className="text-gray-700 flex flex-col items-center cursor-pointer">
              <Phone />
              <span className="text-xs">Calls</span>
            </button>
          </Tooltip>
          <Tooltip title="Settings" arrow placement="bottom">
            <button onClick={() => setScreen("settings")} className="text-gray-700 flex flex-col items-center cursor-pointer">
              <Settings />
              <span className="text-xs">Settings</span>
            </button>
          </Tooltip>
        </div>
      </nav>


      <main className="flex-1 p-4 overflow-y-auto">
        {screen === "home" && <HomeScreen chats={chats} user={user} />}
        {screen === "story" && <StoryScreen />}
        {screen === "settings" && <SettingsScreen />}
        {screen === "calls" && <CallLogsScreen />}
      </main>
    </div>
  );
}