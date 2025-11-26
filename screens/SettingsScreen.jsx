import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SettingsScreen() {

    const router = useRouter();

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-4 text-gray-700">Settings</h2>


            <div className="space-y-3">
                {[
                    "Account",
                    "Privacy",
                    "Notifications",
                    "Appearance",
                    "Help & Support",
                ].map((item) => (
                    <div
                    onClick={() => item === "Account" && router.push('/settings/account')}
                        key={item}
                        className="bg-white p-4 rounded-xl shadow hover:bg-gray-50 cursor-pointer"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}