"use client";

import { Download, Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 min-h-[50vh] flex flex-col justify-center">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get In Touch</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="mailto:devanshkhandelwal930@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 dark:border-gray-800 font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors w-full sm:w-auto justify-center"
                    >
                        <Download size={20} />
                        Download CV
                    </a>
                </div>

                <footer className="mt-32 pt-8 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Devansh Khandelwal. Built with Next.js & Tailwind CSS.
                    </p>
                </footer>
            </div>
        </section>
    );
}
