"use client";

import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-50 dark:bg-zinc-900/50 relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col gap-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            <span className="text-blue-600 dark:text-blue-500">/</span> Featured Projects
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
                            A selection of code that I'm proud of.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Area */}
                            <div className="h-56 bg-gray-100 dark:bg-zinc-900 w-full relative overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <Folder className="text-gray-300 dark:text-gray-700 w-16 h-16" />
                                    </div>
                                )}

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-10">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                                        title="View Code"
                                    >
                                        <Github className="w-5 h-5 text-black" />
                                    </a>
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                                            title="View Live Demo"
                                        >
                                            <ExternalLink className="w-5 h-5 text-black" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-md text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:border-blue-200 dark:group-hover:border-blue-900 transition-colors"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
