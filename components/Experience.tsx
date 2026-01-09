"use client";

import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const EXPERIENCE = [
    {
        type: "work",
        role: "Software Engineer",
        company: "IndiaMART",
        period: "Apr 2025 - Present",
        description: "Built an end-to-end WhatsApp messaging platform and an AI-based spam call review system processing 10K+ calls/day, reducing manual effort by 90%+. Migrated and optimized 100+ Oracle queries to PostgreSQL for performance and scalability."
    },
    {
        type: "work",
        role: "Software Developer",
        company: "Logy.ai",
        period: "Jan 2024 - Mar 2025",
        description: "Engineered a real-time Next.js application supporting 3M+ users with 5× faster workflows. Implemented ClickHouse analytics achieving 100× faster queries and built a GenAI chat review portal improving NPS from 32% to 55%."
    },
    {
        type: "work",
        role: "Front-End Developer Intern",
        company: "YourDigitalBuddies",
        period: "Dec 2022 - Feb 2023",
        description: "Delivered conversion-focused UI improvements using modern frontend best practices, resulting in a 30%+ increase in conversion rates."
    },
    {
        type: "education",
        role: "B.Tech. Computer Science and Engineering",
        company: "IIITDM Jabalpur",
        period: "Nov 2020 - Jun 2024",
        description: "Indian Institute of Information Technology, Design and Manufacturing Jabalpur, India."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white dark:bg-black relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="flex flex-col gap-4 mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Experience & Education
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            My professional journey and academic background.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent -translate-x-1/2 hidden md:block" />

                    {/* Mobile Line */}
                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-100 dark:bg-zinc-800 md:hidden" />

                    {EXPERIENCE.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-0 md:gap-8 relative"
                        >
                            {/* Desktop: Date Side (Left) */}
                            <div className="flex-1 hidden md:flex items-start justify-end pt-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-sm font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
                                    <Calendar size={14} />
                                    {item.period}
                                </div>
                            </div>

                            {/* Center Icon */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-black border-4 border-gray-50 dark:border-zinc-900 shadow-lg z-10 shrink-0">
                                {item.type === "work" ? <Briefcase size={18} className="text-blue-600" /> : <GraduationCap size={18} className="text-purple-600" />}
                            </div>

                            {/* Content Side (Right for Desktop, All for Mobile) */}
                            <div className="flex-1 md:text-left md:pl-12">
                                {/* Desktop Content */}
                                <div className="hidden md:block">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.role}</h3>
                                    <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">{item.company}</div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.description}</p>
                                </div>

                                {/* Mobile/Tablet View (Content + Date stacked) */}
                                <div className="md:hidden ml-24 relative pl-4 border-l border-gray-100 dark:border-zinc-800">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
                                    <div className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">{item.company}</div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-3">
                                        <Calendar size={12} />
                                        {item.period}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
