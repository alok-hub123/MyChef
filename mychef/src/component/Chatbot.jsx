import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
    const [query, setQuery] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const generateResponse = async () => {
        const userMessage = { sender: 'user', text: query };
        setChatHistory([...chatHistory, userMessage]);

        const data = await axios({
            url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBl8-A6eO6_2IOwoekAc5qOBcMAut3eVHo',
            method: "post",
            data: {
                contents: [{ "parts": [{ "text": query }] }],
            },
        });

        // Get the AI response and remove * and # characters
        let aiResponse = data["data"]["candidates"][0]["content"]["parts"][0]["text"];
        aiResponse = aiResponse.replace(/[*#]/g, '');  // Remove * and #

        const botMessage = {
            sender: 'bot',
            text: aiResponse,
        };

        setChatHistory([...chatHistory, userMessage, botMessage]);
        setQuery('');
    };

    return (
        <div className="w-[30vw] flex justify-center items-center h-max border-2 border-orange-400 rounded-lg shadow-lg shadow-black">
            <div className="w-full max-w-md backdrop-blur-lg shadow-lg rounded-lg flex flex-col">
                {/* Chat window */}
                <h1 className='text-xl text-white text-center font-bold bg-orange-500 rounded-lg p-2'>MYCHEF AI CHAT</h1>
                <div className="flex-grow p-4 overflow-auto" style={{ maxHeight: '500px' }}>
                    {chatHistory.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-4 flex ${
                                message.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`${
                                    message.sender === 'user'
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-orange-200 text-black'
                                } p-3 rounded-lg max-w-xs`}
                            >
                                {/* Format AI response with additional styling */}
                                {message.sender === 'bot' ? (
                                    <div className="text-sm">
                                        <strong className="block mb-2 text-orange-500">AI Response:</strong>
                                        <p className="whitespace-pre-wrap">{message.text}</p>
                                        <span className="block mt-2 text-xs text-gray-500">Received at {new Date().toLocaleTimeString()}</span>
                                    </div>
                                ) : (
                                    <p>{message.text}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input field and send button */}
                <div className="p-4 flex border-t border-gray-300">
                    <input
                        type="text"
                        value={query}
                        placeholder="Type a message..."
                        className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
                        onClick={generateResponse}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
