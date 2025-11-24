import {motion} from 'framer-motion';
import { Phone } from 'lucide-react';

export default function CallItem() {
return (
<div className="bg-white p-4 rounded-xl shadow flex items-center gap-4 hover:bg-gray-50 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center">
<Phone className="text-blue-600" />
</div>
<div className="flex-1">
<p className="font-semibold text-gray-800">Jane Smith</p>
<p className="text-gray-500 text-sm">Incoming Call</p>
</div>
<span className="text-xs text-gray-400">Yesterday</span>
</div>
);
}