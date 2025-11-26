"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext<{ user: null; setUser: React.Dispatch<React.SetStateAction<null>> } | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode; }) => {
    const [user, setUser] = useState<null>(null);
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser }