"use client";
import { useTab } from '@/providers/TabProvider'
import { Tooltip } from '@mui/material'
import { Phone, Plus, Settings, Users } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Header = () => {
    const { screen, setScreen } = useTab();
    const pathname = usePathname();
    // console.log(pathname);

    return (
        <nav className={`${pathname === "/chat" ? "hidden" : "flex"} items-center justify-between bg-white p-4 shadow-md h-16`}>
            <div className="flex items-center gap-2">
                <Image className="w-8 h-8 bg-blue-600 rounded-xl" src={'/Icon.webp'} alt="App Icon" width={80} height={80} />
                <span className="font-bold text-gray-800 text-lg">Chattr-Web</span>
            </div>


            <div className="flex items-center gap-6">

                <Tooltip title="Chats" arrow placement="bottom">

                    <button onClick={() => setScreen("home")} className={`${screen === "home" ? "text-blue-400" : "text-gray-700"} flex flex-col items-center cursor-pointer`}>
                        <Users />
                        <span className="text-xs">Chats</span>
                    </button>
                </Tooltip>

                <Tooltip title="Stories" arrow placement="bottom">
                    <button onClick={() => setScreen("story")} className={`${screen === "story" ? "text-blue-400" : "text-gray-700"} flex flex-col items-center cursor-pointer`}>
                        <Plus />
                        <span className="text-xs">Stories</span>
                    </button>
                </Tooltip>
                <Tooltip title="Calls" arrow placement="bottom">
                    <button onClick={() => setScreen("calls")} className={`${screen === "calls" ? "text-blue-400" : "text-gray-700"} flex flex-col items-center cursor-pointer`}>
                        <Phone />
                        <span className="text-xs">Calls</span>
                    </button>
                </Tooltip>
                <Tooltip title="Settings" arrow placement="bottom">
                    <button onClick={() => setScreen("settings")} className={`${screen === "settings" ? "text-blue-400" : "text-gray-700"} flex flex-col items-center cursor-pointer`}>
                        <Settings />
                        <span className="text-xs">Settings</span>
                    </button>
                </Tooltip>
            </div>
        </nav>
    )
}

export default Header