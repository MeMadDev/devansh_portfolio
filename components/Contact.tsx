"use client";

import { Download, Mail, ArrowRight, Github, Linkedin, Code2, BookOpen, Send, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formState.name}`;
        const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMessage:%0D%0A${formState.message}`;
        window.location.href = `mailto:devanshkhandelwal930@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-black">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                            Let's work together.
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have a project in mind or just want to explore a potential collaboration, I'd love to hear from you.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity"
                            >
                                <Download size={20} />
                                Download CV
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Socials</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={24} />, href: "https://github.com/MeMadDev", title: "GitHub" },
                                    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/devansh-khandelwal-51b009201/", title: "LinkedIn" },
                                    { icon: <Code2 size={24} />, href: "https://leetcode.com/u/Me_MadMax/", title: "LeetCode" },
                                    { icon: <BookOpen size={24} />, href: "https://medium.com/@devanshkhandelwal930", title: "Medium" },
                                    { icon: <Mail size={24} />, href: "mailto:devanshkhandelwal930@gmail.com", title: "Email" }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-zinc-900 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                                        title={social.title}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl relative overflow-hidden"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/25"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <footer className="mt-20 pt-8 border-t border-gray-100 dark:border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Devansh Khandelwal. All rights reserved.
                    </p>
                </footer>
            </div>
        </section>
    );
}
