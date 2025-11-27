"use client";

import React, { createContext, useContext } from "react";

const ProfileContext = createContext<{ profile: null; setProfile: React.Dispatch<React.SetStateAction<null>> } | null>(null);

const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
    const [profile, setProfile] = React.useState<null>(null);
    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

const useUserProfile = () => useContext(ProfileContext);

export { ProfileContext, ProfileProvider, useUserProfile };