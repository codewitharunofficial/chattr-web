
"use client";
import React, { useState, useRef } from "react";
import { LogOut, User } from "lucide-react";
import { motion } from "framer-motion";
import { useUser } from "@/providers/UserProvider";

export default function SettingsPage({ onLogout = null }) {
    const { user, setUser } = useUser();
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [avatarFile, setAvatarFile] = useState(null);
    const fileInputRef = useRef(null);

    console.log(user);


    async function handleUpdateProfile() {
        try {
            setSaving(true);
            // Example: if you want to send multipart form (avatar + fields)
            const formData = new FormData();
            formData.append("name", user.name);
            formData.append("email", user.email);
            formData.append("bio", user.bio);
            if (avatarFile) formData.append("avatar", avatarFile);

            // TODO: change URL to your update endpoint
            const res = await fetch("/api/me", {
                method: "PUT",
                body: formData,
            });

            if (!res.ok) throw new Error("Failed to update profile");

            const updated = await res.json();
            setUser((prev) => ({ ...prev, ...updated }));
            // You can show a toast here
        } catch (err) {
            console.error(err);
            // show error toast
        } finally {
            setSaving(false);
        }
    }

    async function handleLogout() {
        try {
            // Call your logout API if exists
            await fetch("/api/logout", { method: "POST" });
        } catch (e) {
            // ignore
        }

        if (typeof onLogout === "function") { };
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="w-full max-w-2xl"
            >
                <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                        {/* Avatar + basic info */}
                        <div className="shrink-0 flex flex-col items-center md:items-start gap-3 md:w-56">
                            <div
                                className="relative w-28 h-28 rounded-full overflow-hidden border cursor-pointer"
                                // onClick={handleImageClick}
                                title="Change profile photo"
                            >
                                {user?.photo?.secure_url ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={user.photo?.secure_url} alt="avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                        <User className="w-10 h-10 text-gray-400" />
                                    </div>
                                )}

                                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 bg-white rounded-full p-1 shadow">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="#111827" strokeWidth="0" />
                                    </svg>
                                </div>
                            </div>

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                            // onChange={handleImageChange}
                            />

                            <div className="text-center md:text-left">
                                <h3 className="font-semibold text-lg">{user?.name || "—"}</h3>
                                <p className="text-sm text-gray-500 wrap-break-words">{user?.email || "—"}</p>
                            </div>
                        </div>

                        {/* Form fields */}
                        <div className="mt-6 md:mt-0 flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-sm font-medium mb-1">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        value={user?.name}
                                        // onChange={handleInputChange}
                                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={user?.email}
                                        // onChange={handleInputChange}
                                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="bio" className="text-sm font-medium mb-1 inline-block">
                                    Bio
                                </label>
                                <textarea
                                    id="bio"
                                    value={user?.bio}
                                    // onChange={handleInputChange}
                                    rows={3}
                                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                                    placeholder="Hello! Whats Up Chattr."
                                />
                            </div>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleUpdateProfile}
                                    disabled={saving}
                                    className="flex-1 bg-black text-white py-2 rounded-lg hover:opacity-95 disabled:opacity-60 transition"
                                >
                                    {saving ? "Saving..." : "Update Profile"}
                                </button>

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center justify-center gap-2 flex-1 border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50 transition"
                                >
                                    <LogOut className="w-4 h-4" /> Logout
                                </button>
                            </div>

                            <div className="mt-4 text-xs text-gray-400">Click your avatar to choose a new profile photo.</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
