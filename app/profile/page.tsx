"use client";
import { useState } from "react";
import { Phone, Video, Ban, CheckCircle2, Image as ImgIcon, Link2, Music, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useUserProfile } from "@/providers/ProfileProvider";

export default function ProfilePage() {
    const [isBlocked, setIsBlocked] = useState(false);
    const { profile } = useUserProfile();

    console.log(profile);

    const sharedMedia = {
        images: [

        ],
        videos: [

        ],
        audio: [

        ],
        links: [
            { title: "Portfolio Website", url: "https://codewitharun-portfolio.vercel.app" },
            { title: "Github", url: "https://github.com/codewitharunofficial" },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 space-y-6"
            >
                {/* Top User Info */}
                <div className="flex flex-col items-center text-center gap-4">
                    <Image
                        src={profile?.profilePhoto?.secure_url || "/default-avatar.png"}
                        alt="profile"
                        className="w-32 h-32 rounded-full object-cover border"
                        width={128}
                        height={128}
                    />
                    <div>
                        <h2 className="text-2xl font-semibold">{profile?.name || "User Name"}</h2>
                        <p className="text-gray-600 text-sm">{profile?.bio || "Hey! I'm using Chattr."}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-4 gap-4 text-center">
                    <button className="action-btn">
                        <Phone />
                        <span>Call</span>
                    </button>

                    <button className="action-btn">
                        <Video />
                        <span>Video</span>
                    </button>

                    {!isBlocked ? (
                        <button className="action-btn text-red-600" onClick={() => setIsBlocked(true)}>
                            <Ban />
                            <span>Block</span>
                        </button>
                    ) : (
                        <button className="action-btn text-green-600" onClick={() => setIsBlocked(false)}>
                            <CheckCircle2 />
                            <span>Unblock</span>
                        </button>
                    )}
                </div>

                {/* Shared Media Section */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Shared Media</h3>

                    {/* Images */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <ImgIcon className="w-5 h-5" />
                            <span className="font-medium">Images</span>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {sharedMedia.images?.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="shared-img"
                                    className="w-full h-24 object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Videos */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <PlayCircle className="w-5 h-5" />
                            <span className="font-medium">Videos</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {sharedMedia.videos?.map((vid, i) => (
                                <div key={i} className="relative cursor-pointer group">
                                    <img
                                        src={vid.thumbnail}
                                        className="w-full h-28 object-cover rounded-lg"
                                        alt="video-thumb"
                                    />
                                    <PlayCircle className="absolute inset-0 m-auto w-10 h-10 text-white opacity-90" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Audio */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Music className="w-5 h-5" />
                            <span className="font-medium">Audio</span>
                        </div>
                        <div className="space-y-2">
                            {sharedMedia.audio?.map((audio, i) => (
                                <button
                                    key={i}
                                    className="w-full p-3 border rounded-lg flex items-center justify-between hover:bg-gray-100 transition"
                                >
                                    <span>{audio.name}</span>
                                    <Music className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Link2 className="w-5 h-5" />
                            <span className="font-medium">Links</span>
                        </div>
                        <div className="space-y-2">
                            {sharedMedia.links?.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    className="block p-3 border rounded-lg hover:bg-gray-100 transition"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Styling */}
            <style>{`
        .action-btn {
          @apply flex flex-col items-center gap-1 p-3 border rounded-xl hover:bg-gray-100 transition;
        }
      `}</style>
        </div>
    );
}
