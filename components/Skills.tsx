// Skills.tsx
'use client'
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

export interface Skill {
    name: string;
    logo: string;
    duration: string;
}

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile devices for touch interaction
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleFlip = useCallback(() => {
        setIsFlipped(prev => !prev);
    }, []);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleFlip();
        }
    };

    return (
        <div className="flex flex-col items-center">
            <motion.div
                className="relative cursor-pointer w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" // Responsive sizing
                role="button"
                tabIndex={0}
                onHoverStart={isMobile ? undefined : handleFlip}
                onHoverEnd={isMobile ? undefined : handleFlip}
                onClick={isMobile ? handleFlip : undefined} // Use click for mobile
                onKeyDown={handleKeyPress}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`${skill.name} - ${skill.duration}`}
            >
                <motion.div
                    className="w-full h-full flex items-center justify-center"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front Side - Logo */}
                    <div
                        className="absolute w-full h-full flex items-center justify-center bg-black-100
                        shadow-lg rounded-full p-2 sm:p-3" // Responsive padding
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="object-contain w-full h-full"
                            priority={true}
                        />
                    </div>

                    {/* Back Side - Duration */}
                    <div
                        className="absolute w-full h-full flex items-center justify-center bg-black-100
                        text-white text-sm sm:text-base lg:text-lg font-semibold rounded-full p-2 sm:p-4" // Responsive text and padding
                        style={{
                            transform: "rotateY(180deg)",
                            backfaceVisibility: "hidden",
                        }}
                    >
                        <span className="text-center">{skill.duration}</span>
                    </div>
                </motion.div>

                {/* Subtle glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-0"
                    animate={{
                        opacity: isFlipped ? 0.3 : 0.15,
                        boxShadow: isFlipped
                            ? "0 0 15px rgba(107, 114, 128, 0.5)"
                            : "0 0 15px rgba(156, 163, 175, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            {/* Skill name label */}
            <motion.p
                className="mt-2 text-center text-xs sm:text-sm font-medium"
                animate={{ opacity: isFlipped ? 0.6 : 1 }}
            >
                {skill.name}
            </motion.p>
        </div>
    );
};

export default SkillCard;
