import { motion } from 'framer-motion';

export default function SettingsScreen() {
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