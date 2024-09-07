
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRightIcon, BeakerIcon, CodeBracketIcon, GlobeAltIcon, MagnifyingGlassIcon, ChatBubbleBottomCenterTextIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

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

function EnhancedLandingPage() {
  const [currentFeature, setCurrentFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black opacity-50 z-0"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            AI-Powered Research Revolution
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Unleash the power of CrewAI Agents and Langflow to transform your research process.
          </p>
          <Link href="/chat">
            <ShimmeringButton className="text-lg">
              Embark on Your AI Journey
            </ShimmeringButton>
          </Link>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRightIcon className="h-8 w-8 rotate-90" />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Revolutionize Your Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <GlobeAltIcon className="h-12 w-12 mb-4 text-blue-400" />, title: "Global Knowledge Access", description: "Tap into the vast expanse of internet knowledge for comprehensive research insights." },
            { icon: <CodeBracketIcon className="h-12 w-12 mb-4 text-purple-400" />, title: "Intelligent Code Generation", description: "Seamlessly generate and analyze code snippets to support your research findings." },
            { icon: <BeakerIcon className="h-12 w-12 mb-4 text-green-400" />, title: "Advanced Data Analysis", description: "Perform in-depth analysis on complex datasets with cutting-edge AI assistance." },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlowingCard>
                {benefit.icon}
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">The Future of Research</h2>
        <div className="max-w-4xl mx-auto">
          {[
            { step: 1, title: "Input Your Research Query", description: "Provide our AI with your research question or area of interest." },
            { step: 2, title: "AI Agents Collaborate", description: "Watch as our CrewAI Agents work in harmony to gather and analyze relevant information." },
            { step: 3, title: "Receive Comprehensive Insights", description: "Get a detailed report with cutting-edge insights, code snippets, and interactive data visualizations." },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur"></div>
                <div className="relative bg-black bg-opacity-50 rounded-full p-4 mr-4">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="relative z-10 py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Experience the Future</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlowingCard>
                    <h3 className="text-2xl font-semibold mb-4">
                      {["Smart Search Algorithms", "Real-time Collaboration", "Interactive Visualizations"][currentFeature]}
                    </h3>
                    <p>
                      {[
                        "Our AI utilizes advanced search algorithms to find the most relevant and up-to-date information for your research.",
                        "Collaborate with AI agents and team members in real-time, streamlining your research process like never before.",
                        "Transform complex data into stunning, interactive visualizations that bring your research to life."
                      ][currentFeature]}
                    </p>
                  </GlowingCard>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-50"></div>
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <p className="text-2xl font-bold text-center">AI Research Assistant Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Meet Your AI Research Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <MagnifyingGlassIcon className="h-12 w-12 mb-4 text-blue-400" />, name: "DataMiner", description: "Specializes in extracting and analyzing large datasets with unparalleled speed and accuracy." },
            { icon: <ChatBubbleBottomCenterTextIcon className="h-12 w-12 mb-4 text-purple-400" />, name: "LinguistAI", description: "Processes and interprets natural language, providing context and understanding to complex texts." },
            { icon: <CpuChipIcon className="h-12 w-12 mb-4 text-green-400" />, name: "CodeGenius", description: "Generates, optimizes, and explains code across multiple programming languages." },
          ].map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlowingCard className="h-full">
                {agent.icon}
                <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                <p>{agent.description}</p>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Voices of Innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Dr. Emily Chen", role: "Quantum Physics Researcher", quote: "This AI research assistant has revolutionized my workflow. It's like having a team of experts at my fingertips 24/7, accelerating my research in ways I never thought possible." },
            { name: "Mark Johnson", role: "Data Science Lead", quote: "The ability to quickly analyze large datasets and generate visualizations has saved me countless hours. It's an indispensable tool that has dramatically improved our team's productivity and insights." },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <GlowingCard>
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {[
            { question: "How does the AI research assistant work?", answer: "Our AI research assistant utilizes advanced machine learning algorithms and natural language processing to analyze vast amounts of data, generate insights, and provide comprehensive research support tailored to your specific needs." },
            { question: "Is my research data secure?", answer: "Absolutely. We employ state-of-the-art encryption and security measures to ensure that your research data remains confidential and protected at all times." },
            { question: "Can the AI assistant handle multiple research topics simultaneously?", answer: "Yes, our AI research assistant is designed to efficiently manage multiple research topics concurrently, allowing you to explore various areas of interest without compromising on depth or quality." },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-6"
            >
              <GlowingCard>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative z-10 py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Ready to Revolutionize Your Research?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of researchers who are already experiencing the future of AI-powered research assistance.
        </p>
        <Link href="/chat">
          <ShimmeringButton className="text-lg">
            Begin Your AI Research Journey
          </ShimmeringButton>
        </Link>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">AI Research Assistant</h3>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <ul className="flex justify-center space-x-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; 2023 AI Research Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Home() {
  return <EnhancedLandingPage />
}
