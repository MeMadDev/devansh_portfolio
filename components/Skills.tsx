"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Layout, Star } from "lucide-react";

// Skills data with ratings
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
            { name: "HTML", rating: 5 },
            { name: "CSS", rating: 5 }
        ]
    },
    {
        title: "Frameworks & Libraries",
        icon: <Layout className="w-6 h-6" />,
        skills: [
            { name: "Django", rating: 4.5 },
            { name: "Next.js", rating: 5 },
            { name: "React.js", rating: 5 },
            { name: "Flask", rating: 4 },
            { name: "Bootstrap", rating: 4.5 },
            { name: "Tailwind CSS", rating: 5 }
        ]
    },
    {
        title: "Databases",
        icon: <Database className="w-6 h-6" />,
        skills: [
            { name: "PostgreSQL", rating: 4.5 },
            { name: "MySQL", rating: 4.5 },
            { name: "SQLite", rating: 4 },
            { name: "ClickHouse", rating: 4 },
            { name: "MongoDB", rating: 4 }
        ]
    },
    {
        title: "Tools & DevOps",
        icon: <Terminal className="w-6 h-6" />,
        skills: [
            { name: "Git", rating: 5 },
            { name: "Docker", rating: 4.5 },
            { name: "AWS", rating: 4 },
            { name: "Linux", rating: 4.5 },
            { name: "Figma", rating: 4 },
            { name: "CI/CD", rating: 4 }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-gray-50 dark:bg-zinc-900/30 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col gap-4 mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Hover over a skill to see my proficiency level.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {SKILL_CATEGORIES.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-black/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="relative w-max h-10 perspective-1000 group/skill cursor-pointer">
                                        <motion.div
                                            className="relative w-full h-full duration-500 preserve-3d group-hover/skill:rotate-y-180"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                        >
                                            {/* Front Side */}
                                            <div className="absolute inset-0 backface-hidden">
                                                <span className="flex items-center justify-center px-4 py-2 bg-gray-50 dark:bg-zinc-900/80 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium border border-gray-100 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-colors h-full w-full whitespace-nowrap">
                                                    {skill.name}
                                                </span>
                                            </div>

                                            {/* Back Side */}
                                            <div className="absolute inset-0 backface-hidden rotate-y-180">
                                                <span className="flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium h-full w-full whitespace-nowrap shadow-md">
                                                    {skill.rating} <Star size={12} fill="currentColor" />
                                                </span>
                                            </div>
                                        </motion.div>
                                        {/* Invisible spacer to set width based on content */}
                                        <div className="opacity-0 px-4 py-2 text-sm font-medium pointer-events-none whitespace-nowrap">
                                            {skill.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group-hover\/skill\:rotate-y-180:hover {
            transform: rotateY(180deg);
        }
        /* Custom class for hover effect since tailwind arbitrary variants can be tricky with some parsers */
        .group\/skill:hover .group-hover\/skill\:rotate-y-180 {
            transform: rotateY(180deg);
        }
      `}</style>
        </section>
    );
}
