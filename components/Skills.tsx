"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Layout, Star } from "lucide-react";
import { useRef, useState } from "react";

// Restored and Expanded Categories
const SKILL_CATEGORIES = [
    {
        title: "Languages",
        icon: <Code2 className="w-6 h-6" />,
        skills: [
            { name: "Go (Golang)", rating: 4.5 },
            { name: "Python", rating: 5 },
            { name: "C++", rating: 4 },
            { name: "Java", rating: 4 },
            { name: "TypeScript", rating: 5 },
            { name: "JavaScript", rating: 5 },
            { name: "SQL", rating: 4.5 },
            { name: "HTML/CSS", rating: 5 }
        ]
    },
    {
        title: "Frameworks",
        icon: <Layout className="w-6 h-6" />,
        skills: [
            { name: "Next.js", rating: 5 },
            { name: "React", rating: 5 },
            { name: "Django", rating: 4.5 },
            { name: "FastAPI", rating: 4.5 },
            { name: "Flask", rating: 4 },
            { name: "Tailwind", rating: 5 }
        ]
    },
    {
        title: "Database & Cloud",
        icon: <Database className="w-6 h-6" />,
        skills: [
            { name: "PostgreSQL", rating: 4.5 },
            { name: "ClickHouse", rating: 4 },
            { name: "Redis", rating: 4.5 },
            { name: "AWS", rating: 4 },
            { name: "Docker", rating: 4.5 },
            { name: "Kubernetes", rating: 4 }
        ]
    },
    {
        title: "Tools & Architectures",
        icon: <Terminal className="w-6 h-6" />,
        skills: [
            { name: "Git", rating: 5 },
            { name: "Microservices", rating: 4.5 },
            { name: "WebSockets", rating: 4.5 },
            { name: "CI/CD", rating: 4 },
            { name: "System Design", rating: 4 },
            { name: "Linux", rating: 4.5 }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-zinc-900/30 relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        Categorized expertise. <span className="text-blue-600 font-semibold">Drag</span> the chips around!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SKILL_CATEGORIES.map((category, index) => (
                        <CategoryCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CategoryCard({ category, index }: { category: any, index: number }) {
    const containerRef = useRef(null);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-lg relative overflow-hidden group"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:rotate-6 transition-transform duration-300">
                    {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                </h3>
            </div>

            {/* Draggable Area */}
            <div
                ref={containerRef}
                className="flex flex-wrap gap-3 min-h-[150px] content-start relative z-20"
            >
                {category.skills.map((skill: any, idx: number) => (
                    <SkillChip
                        key={idx}
                        skill={skill}
                        constraintsRef={containerRef}
                        index={idx}
                    />
                ))}
            </div>
        </motion.div>
    );
}

function SkillChip({ skill, constraintsRef, index }: { skill: any, constraintsRef: any, index: number }) {
    const [showRating, setShowRating] = useState(false);

    // Generate random float animation
    const randomDuration = 2 + Math.random() * 2;
    const randomY = 3 + Math.random() * 5;

    return (
        <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            onHoverStart={() => setShowRating(true)}
            onHoverEnd={() => setShowRating(false)}
            whileHover={{ scale: 1.1, zIndex: 50, cursor: "grab" }}
            whileDrag={{ scale: 1.2, zIndex: 100, cursor: "grabbing" }}
            animate={{
                y: [0, -randomY, 0],
            }}
            transition={{
                y: {
                    duration: randomDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                }
            }}
            className="relative"
        >
            <div className={`px-4 py-2 rounded-xl border shadow-sm transition-all duration-300 select-none flex items-center justify-center min-w-[80px] ${showRating
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-blue-500/25 shadow-md"
                    : "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:border-blue-400"
                }`}>
                <span className="text-sm font-semibold whitespace-nowrap flex items-center gap-1">
                    {showRating ? (
                        <>
                            {skill.rating} <Star size={12} fill="currentColor" />
                        </>
                    ) : skill.name}
                </span>
            </div>
        </motion.div>
    );
}
