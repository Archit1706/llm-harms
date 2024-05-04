"use client";
import { useState } from 'react';
import Loader from './Loader';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChatComponent() {
    const [context, setContext] = useState('');
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [llm, setLlm] = useState('gpt-3');
    const [isLoading, setIsLoading] = useState(false);
    const [hasQueried, setHasQueried] = useState(false);
    const handleSubmit = async () => {
        if (!context && !prompt) {
            toast.error('Please enter context and prompt');
        }
        else if (context == '') {
            toast.error('Please enter context');
        }
        else if (prompt == '') {
            toast.error('Please enter prompt');
        }
        else {
            setHasQueried(true);
            setIsLoading(true);
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ context, prompt, llm }),
            });
            const data = await res.json();
            setResponse(data.response);
            setIsLoading(false);
            toast.success('Response generated successfully');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm shadow-gray-300">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
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
                <div className="flex flex-row w-full gap-4">
                    {/* a dropdown to select the llm to be used to generate response */}
                    <div className='w-1/2'>
                        <h3 className="text-lg font-bold text-black dark:text-white">Choose LLM</h3>
                        <select
                            className="p-2 w-full border border-gray-300 dark:border-gray-700 text-gray-700 rounded-md shadow bg-white dark:bg-gray-700 dark:text-white"
                            onChange={(e) => setLlm(e.target.value)}
                            value={llm}
                        >
                            <option value="gpt-3">GPT-3</option>
                            <option value="davinci">Davinci</option>
                            <option value="curie">Curie</option>
                            <option value="babbage">Babbage</option>
                        </select>
                    </div>
                    <button
                        className="p-2 bg-blue-500 w-1/2 text-white font-bold rounded hover:bg-blue-600 shadow-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        Submit
                    </button>
                </div>

            </div>

            <div className="flex items-center justify-center w-full lg:w-1/2 h-full p-4 relative">
                {hasQueried ? (
                    <div className=" max-h-full w-full">
                        <h3 className="text-lg font-bold text-black dark:text-white mb-4">LLM Response</h3>
                        <div className="response-container text-black w-full dark:text-white break-words overflow-auto">
                            {isLoading ? <Loader /> : response}
                        </div>
                    </div>
                ) : (
                    <Image height={400} width={400} src="/chat.png" alt="Chat Image" className='w-fit h-auto aspect-square' priority />
                )}
            </div>
        </div>
    );
}
