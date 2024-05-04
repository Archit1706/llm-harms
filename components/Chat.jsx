"use client";
import { useState } from 'react';
import Loader from './Loader';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChatComponent() {
    const [message, setMessage] = useState('');
    const [template, setTemplate] = useState('');
    const [response, setResponse] = useState('');
    const [llm, setLlm] = useState('mistralai/Mistral-7B-Instruct-v0.2');
    const [isLoading, setIsLoading] = useState(false);
    const [hasQueried, setHasQueried] = useState(false);
    const handleSubmit = async () => {
        if (!message && !template) {
            toast.error('Please enter message history and template prompt!');
        }
        else if (message == '') {
            toast.error('Please enter message history!');
        }
        else if (template == '') {
            toast.error('Please enter template prompt!');
        }
        else {
            setHasQueried(true);
            setIsLoading(true);
            // const url = 'http://127.0.0.1:8000/chat/';
            const url = 'https://energetic-noel-brandinnerworld-1bd11fc4.koyeb.app/chat/';
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'message': message, 'template': template, 'llm_name': llm }),
            });
            const data = await res.json();
            setResponse(data.responses);
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
                <h3 className="text-lg font-bold text-black dark:text-white">Message History</h3>
                <textarea
                    className="custom-scrollbar w-full h-48 p-2 border text-gray-700 border-gray-300 dark:border-gray-700 rounded-md shadow bg-white dark:bg-gray-700 dark:text-white overflow-auto"
                    placeholder="Previous chats for context"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <h3 className="text-lg font-bold text-black dark:text-white">Your Template Prompt</h3>
                <textarea
                    className="custom-scrollbar w-full h-48 p-2 border border-gray-300 text-gray-700 dark:border-gray-700 rounded-md shadow bg-white dark:bg-gray-700 dark:text-white overflow-auto"
                    placeholder="Enter your template prompt"
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
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
                            <option value='mistralai/Mistral-7B-Instruct-v0.2'>Mistral-7B-Instruct-v0.2</option>
                            <option value='mistralai/Mixtral-8x7B-Instruct-v0.1'>Mixtral-8x7B-Instruct-v0.1</option>
                            <option value='mistralai/Mixtral-8x22B-Instruct-v0.1'>Mixtral-8x22B-Instruct-v0.1</option>
                            {/* <option value='google/gemma-7b-it'>Gemma-7B-IT</option> */}
                            <option value='Qwen/Qwen1.5-32B-Chat'>Qwen1.5-32B-Chat</option>
                            {/* <option value='upstage/SOLAR-10.7B-Instruct-v1.0'>SOLAR-10.7B-Instruct-v1.0</option> */}
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
