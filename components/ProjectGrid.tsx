'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
    {
        href: '/stocksage',
        label: 'StockSage',
        description: 'Market prediction with machine learning',
        image: '/website.png'
    },
    {
        href: '/tensor-bloom',
        label: 'Tensor Bloom',
        description: 'Learn ML concepts',
        image: '/tensor-bloom.svg'
    },
    {
        href: '/pixel-poet',
        label: 'Pixel Poet',
        description: 'ASCII art generator',
        image: '/pp_mockup.png'
    },
    {
        href: '/careerlens',
        label: 'CareerLens',
        description: 'An AI-powered Resume Analyzer and Interview Coach',
        image: '/prepify_img.png'
    },
];

const ProjectCard = ({ href, label, index, description, image }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile/tablet viewport
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkScreenSize();

        // Add listener for resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Fixed variants for animations with proper easing format
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: 10
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.7,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }),
        hover: {
            scale: isMobile ? 1.02 : 1.05, // Reduced scale on mobile
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    // Content variants for staggered child animations
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="relative h-80 md:h-96"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
            animate={isHovered ? "hover" : "visible"}
            custom={index}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Link
                href={href}
                className="block h-full overflow-hidden relative rounded-xl transition-all duration-300"
            >
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={image}
                        alt={label}
                        fill
                        className={`object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
                    />
                    {/* Overlay to ensure text visibility */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-75' : 'opacity-60'}`}></div>
                </div>

                <motion.div
                    variants={contentVariants}
                    className="flex flex-col h-full justify-between relative z-10 p-6 text-white"
                >
                    <div>
                        <motion.h3
                            className="text-xl font-bold md:text-2xl"
                            animate={{
                                scale: isHovered ? 1.05 : 1,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {label}
                        </motion.h3>

                        {/* Description visible on mobile or on hover for desktop */}
                        <motion.p
                            initial={{ opacity: isMobile ? 1 : 0 }}
                            animate={{
                                opacity: isMobile || isHovered ? 1 : 0,
                                transition: { duration: 0.3 }
                            }}
                            className="text-sm mt-2 text-gray-200 md:text-base"
                        >
                            {description}
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0.8,
                            transition: { duration: 0.3 }
                        }}
                        className="text-sm mt-4 text-white md:text-base font-medium"
                    >
                        {isMobile ? "Tap to view" : "View Project →"}
                    </motion.div>
                </motion.div>
            </Link>
        </motion.div>
    );
};

const ProjectGrid = () => {
    // Container variants for the overall grid
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl mx-auto">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project, i) => (
                    <ProjectCard
                        key={project.href}
                        href={project.href}
                        label={project.label}
                        index={i}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectGrid;