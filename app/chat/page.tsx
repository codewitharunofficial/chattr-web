"use client";
import ConversationScreen from '@/screens/ConverationScreen';
import { useSearchParams } from 'next/navigation';

const Chat = () => {

    const params = useSearchParams();

    console.log(params);

    return (
        <ConversationScreen />
    )
}

export default Chat