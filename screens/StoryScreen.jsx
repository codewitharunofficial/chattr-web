import { motion } from 'framer-motion';
import StoryItem from '../components/StoryItem';

export default function StoryScreen() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-4 text-gray-700">Stories</h2>
            <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <StoryItem key={i} />
                ))}
            </div>
        </motion.div>
    );
}