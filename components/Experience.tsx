"use client";

import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const EXPERIENCE = [
    {
        type: "work",
        role: "Software Engineer",
        company: "IndiaMART",
        period: "Apr 2025 - Present",
        description: "Developed end-to-end WhatsApp messaging module and AI-based automation system for spam call review (10K+ calls daily, 90% reduction). Migrated 100+ Oracle queries to PostgreSQL."
    },
    {
        type: "work",
        role: "Software Developer",
        company: "Logy.ai",
        period: "Jan 2024 - Mar 2025",
        description: "Engineered scalable Next.js app with WebSockets handling 3M+ users. Implemented ClickHouse reducing query times by 100x. Built GenAI chat review portal focusing on NPS improvement."
    },
    {
        type: "work",
        role: "Front-End Developer Intern",
        company: "YourDigitalBuddies",
        period: "Dec 2022 - Feb 2023",
        description: "Implemented front-end best practices leading to 30% increase in conversion rates."
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
        <section id="experience" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex flex-col gap-4 mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Experience & Education</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        My professional journey and academic background.
                    </p>
                </div>

                <div className="space-y-12">
                    {EXPERIENCE.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 group">
                            {/* Icon Column */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                                    {item.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                                </div>
                                {/* Connector Line - Hidden on mobile, visible on md+ */}
                                {index !== EXPERIENCE.length - 1 && (
                                    <div className="w-0.5 flex-grow bg-gray-100 dark:bg-gray-800 my-2 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors hidden md:block" />
                                )}
                            </div>

                            {/* Content Column */}
                            <div className="pb-8 pt-1 flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {item.role}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                        <Calendar size={14} />
                                        {item.period}
                                    </div>
                                </div>

                                <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                                    {item.company}
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
