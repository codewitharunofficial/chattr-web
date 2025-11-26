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
import { useUser } from "@/providers/UserProvider";
import { useTab } from "@/providers/TabProvider";

export default function App() {
  const {screen} = useTab();
  const router = useRouter();
  const [chats, setChats] = useState<Chat[] | undefined>(undefined);
  const {user, setUser} = useUser()!;

  useEffect(() => {
    if (!user) getUserFromLocalStorage(setUser, router);
  }, [router, user, setUser]);

  useEffect(() => {
    if (user) {
      getChats(user?._id, setChats);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <main className="flex-1 p-4 overflow-y-auto">
        {screen === "home" && <HomeScreen chats={chats} user={user} />}
        {screen === "story" && <StoryScreen />}
        {screen === "settings" && <SettingsScreen />}
        {screen === "calls" && <CallLogsScreen />}
      </main>
    </div>
  );
}