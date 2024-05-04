"use client";
import { useState } from 'react';
import Loader from './Loader';
import Image from 'next/image';

export default function ChatComponent() {
    const [context, setContext] = useState('');
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasQueried, setHasQueried] = useState(false); // New state to track if the API has been queried

    const handleSubmit = async () => {
        setHasQueried(true);
        setIsLoading(true);
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ context, prompt }),
        });
        const data = await res.json();
        setResponse(data.response);
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm shadow-gray-300">
            <div className="flex flex-col w-full lg:w-1/2 p-4 space-y-4">
                <h3 className="text-lg font-bold text-black dark:text-white">Context History</h3>
                <textarea
                    className="custom-scrollbar w-full h-48 p-2 border text-gray-700 border-gray-300 dark:border-gray-700 rounded-md shadow bg-white dark:bg-gray-700 dark:text-white overflow-auto"
                    placeholder="Previous chats for context"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                />

                <h3 className="text-lg font-bold text-black dark:text-white">Your Prompt</h3>
                <textarea
                    className="custom-scrollbar w-full h-48 p-2 border border-gray-300 text-gray-700 dark:border-gray-700 rounded-md shadow bg-white dark:bg-gray-700 dark:text-white overflow-auto"
                    placeholder="Enter your prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <button
                    className="p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 shadow-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    Submit
                </button>
            </div>

            <div className="flex items-center justify-center w-full lg:w-1/2 h-full p-4 relative">
                {hasQueried ? (
                    <div className="response-container max-h-full w-full overflow-auto">
                        <h3 className="text-lg font-bold text-black dark:text-white mb-4">LLM Response</h3>
                        <p className="text-black dark:text-white break-words">
                            {isLoading ? <Loader /> : response}
                        </p>
                    </div>
                ) : (
                    <Image height={400} width={400} src="/chat.png" alt="Chat Image" className='w-fit' priority />
                )}
            </div>
        </div>
    );
}
