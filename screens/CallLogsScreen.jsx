import { motion } from 'framer-motion';
import CallItem from '../components/CallItem';

export default function CallLogsScreen() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-4 text-gray-700">Call Logs</h2>
            <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <CallItem key={i} />
                ))}
            </div>
        </motion.div>
    );
}