"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";

// Project data from resume
const PROJECTS = [
    {
        title: "Credit Service Application",
        description: "Developed a backend system for credit service app using Django and Celery. Features async credit processing, automated APR accrual, and secure APIs.",
        tags: ["Django", "Celery", "PostgreSQL", "Python"],
        githubUrl: "https://github.com/MeMadDev/pacefin_task",
        demoUrl: "",
        image: "/img/credit_app.png"
    },
    {
        title: "Medicine Reminder System",
        description: "WhatsApp-based medicine reminder system with AI responses. Built with FastAPI and MySQL, featuring automated scheduling and interactive messages.",
        tags: ["FastAPI", "MySQL", "WhatsApp API", "OpenAI"],
        githubUrl: "https://github.com/MeMadDev/arogyacare_backend",
        demoUrl: "",
        image: "/img/whatsapp.png"
    },

];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col gap-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                        Selected work demonstrating my technical capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors flex flex-col h-full">
                            {/* Image Placeholder Area */}
                            <div className="h-48 bg-gray-100 dark:bg-zinc-900 w-full flex items-center justify-center border-b border-gray-100 dark:border-gray-800 relative overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        unoptimized
                                    />
                                ) : (
                                    <Folder className="text-gray-300 dark:text-gray-700 w-12 h-12" />
                                )}
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm z-10">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                        title="View Code"
                                    >
                                        <Github className="w-5 h-5 text-black" />
                                    </a>
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                            title="View Live Demo"
                                        >
                                            <ExternalLink className="w-5 h-5 text-black" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
