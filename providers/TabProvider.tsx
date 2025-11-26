"use client";
import React, { createContext } from "react";

const TabContext = createContext<{ screen: string; setScreen: React.Dispatch<React.SetStateAction<string>> } | null>(null);

const TabProvider = ({ children }: { children: React.ReactNode; }) => {
    const [screen, setScreen] = React.useState<string>("home");
    return (
        <TabContext.Provider value={{ screen, setScreen }}>
            {children}
        </TabContext.Provider>
    );
}

const useTab = () => React.useContext(TabContext);

export { TabContext, TabProvider, useTab };