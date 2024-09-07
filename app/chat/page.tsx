'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SendIcon, BotIcon, UserIcon } from 'lucide-react'

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const GlowingCard = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative bg-black bg-opacity-50 rounded-lg p-6 ring-1 ring-gray-900/5 shadow-lg">
      {children}
    </div>
  </div>
)

const ShimmeringButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 font-bold text-white rounded-full group ${className}`}
  >
    <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
    <span className="relative">{children}</span>
  </button>
)

function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      // Extract the AI's response from the nested structure
      const aiResponseText = data.outputs[0].outputs[0].outputs.message.message.text;

      const aiResponse: Message = {
        id: Date.now() + 1,
        text: aiResponseText || "Sorry, I couldn't process your request.",
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prevMessages => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, there was an error processing your request.",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black opacity-50 z-0"></div>
      
      <header className="relative z-10 p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">AI Research Assistant Chat</h1>
      </header>

      <main className="flex-grow relative z-10 p-4 overflow-hidden">
        <GlowingCard className="h-full flex flex-col">
          <div className="flex-grow overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-3/4 p-3 rounded-lg ${message.sender === 'user' ? 'bg-purple-700' : 'bg-blue-700'}`}>
                  <div className="flex items-center mb-1">
                    {message.sender === 'user' ? (
                      <UserIcon className="w-4 h-4 mr-2" />
                    ) : (
                      <BotIcon className="w-4 h-4 mr-2" />
                    )}
                    <span className="text-xs text-gray-300">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p>{message.text}</p>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-blue-700 p-3 rounded-lg">
                  <p>AI is typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message here..."
              className="flex-grow p-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ShimmeringButton onClick={handleSendMessage} className="p-2 rounded-full">
              <SendIcon className="w-6 h-6" />
            </ShimmeringButton>
          </div>
        </GlowingCard>
      </main>

      <footer className="relative z-10 p-4 border-t border-gray-800 text-center text-sm text-gray-500">
        © 2023 AI Research Assistant. All rights reserved.
      </footer>
    </div>
  )
}

export default function Chat() {
  return <ChatPage />
}
