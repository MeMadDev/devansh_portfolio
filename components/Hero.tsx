"use client";

import { ArrowRight, Github, Linkedin, Mail, Code2, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="about" className="min-h-[90vh] flex items-center justify-center py-20 relative overflow-hidden bg-white dark:bg-black">
            {/* Abstract Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 space-y-8 text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Devansh</span>.
                            <br />
                            <span className="text-3xl md:text-5xl text-gray-600 dark:text-gray-400">Software Engineer.</span>
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Building scalable systems, real-time applications, and AI-powered automation. Specialized in Python, React, and cloud technologies with a strong focus on performance and impact.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
                            >
                                View Projects <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 dark:border-gray-800 font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                            >
                                Contact Me
                            </Link>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-gray-500">
                            {[
                                { icon: <Github size={24} />, href: "https://github.com/MeMadDev", title: "GitHub" },
                                { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/devansh-khandelwal-51b009201/", title: "LinkedIn" },
                                { icon: <Code2 size={24} />, href: "https://leetcode.com/u/Me_MadMax/", title: "LeetCode" },
                                { icon: <BookOpen size={24} />, href: "https://medium.com/@devanshkhandelwal930", title: "Medium" },
                                { icon: <Mail size={24} />, href: "mailto:devanshkhandelwal930@gmail.com", title: "Email" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, color: "#3b82f6" }}
                                    className="hover:text-black dark:hover:text-white transition-colors"
                                    title={social.title}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Profile Image - Modern Card Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1, rotate: 3 }}
                        whileHover={{ rotate: 0, scale: 1.02 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="flex-1 flex justify-center md:justify-end relative"
                    >
                        {/* Decorative backdrop blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20 rotate-6 scale-95" />

                        <div className="relative w-72 h-80 md:w-96 md:h-[28rem] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl bg-gray-100 dark:bg-zinc-800">
                            <Image
                                src="/img/profile.jpeg"
                                alt="Devansh Khandelwal"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Glass Overlay/Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
