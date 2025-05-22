
// SkillBoard.tsx
'use client';

import React from 'react';
import SkillCard, { Skill } from "./Skills"; // Updated import path
import { motion } from 'framer-motion';

const skills: Skill[] = [
    { name: "Python", logo: "/logos/python-svgrepo-com.svg", duration: "4 years" },
    { name: "Postgresql", logo: "/logos/pgsql-svgrepo-com.svg", duration: "1 year" },
    { name: "Javascript", logo: "/logos/js-svgrepo-com.svg", duration: "2 years" },
    { name: "React", logo: "/logos/react-svgrepo-com.svg", duration: "1 year" },
    { name: "Ollama", logo: "/logos/ollama.png", duration: "2 years" },
    { name: "TensorFlow", logo: "/logos/tensorflow-svgrepo-com.svg", duration: "3 years" },
    { name: "Next.js", logo: "/logos/nextjs-icon.svg", duration: "1 year" },
    { name: "TailwindCSS", logo: "/logos/tailwind-svgrepo-com.svg", duration: "2 years" },
    // { name: "Git", logo: "/logos/git-svgrepo-com.svg", duration: "2 years" },
];

const SkillBoard = () => {
    // Container animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    // Item animation
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex justify-center"
                    >
                        <SkillCard skill={skill} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillBoard;