'use client'
import React from 'react'
import {motion} from "framer-motion";
import SkillBoard from "@/components/SkillBoard";
import Link from "next/link";

const AboutMe = () => {
    return (
        <motion.div
            initial={{opacity: 0.0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{
                delay: 0.8,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 sm:px-4 md:px-6 lg:px-8"
        >
            <div className="w-full max-w-7xl grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 border-b-2 border-b-white/30 pb-10 text-white">
                {/* About Section */}
                <div className="mb-6 md:mb-0">
                    <h1 className="text-xl md:text-2xl font-semibold mb-3">About</h1>
                    <p className="text-sm sm:text-base">
                        A self-proclaimed code wizard that can turn caffeine into amazing web-applications. My passion
                        for building different forms of application is rivaled by my passion for finding the perfect GIF
                        to show my excitement.
                        <br className="hidden sm:block"/>
                        <br className="hidden sm:block"/>
                        Currently, I&apos;m crafting <span className="italic">Tensor Bloom</span>—an educational platform where users master machine learning through hands-on coding, one tensor at a time.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mb-6 md:mb-0">
                    <h1 className="text-xl md:text-2xl font-semibold mb-3">Skills</h1>
                    <SkillBoard/>
                </div>

                {/* Certifications Section */}
                <div className="mb-6 md:mb-0 md:col-span-2 lg:col-span-1">
                    <h1 className="text-xl md:text-2xl font-semibold mb-3">Certifications</h1>

                    {/* Oracle Certification */}
                    <div className="mb-3">
                        <div className="flex flex-row justify-between flex-wrap">
                            <p className="mt-1 font-bold italic text-sm sm:text-base">Oracle</p>
                            <p className="text-sm sm:text-base">July 2024</p>
                        </div>
                        <Link
                            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=C2B6462AD38B98BCC423353B7906C287BBBDE2662CE02510EBF71EC471BB3A8C"
                            target="_blank"
                            className="text-sm sm:text-base hover:text-yellow-300 transition-colors"
                        >
                            Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate
                        </Link>
                    </div>

                    {/* DeepLearning.AI and AWS Certification */}
                    <div className="mb-3">
                        <div className="flex flex-row justify-between flex-wrap">
                            <p className="mt-1 font-bold italic text-sm sm:text-base">DeepLearning.AI and AWS (Coursera)</p>
                            <p className="text-sm sm:text-base">July 2024</p>
                        </div>
                        <Link
                            href="https://www.coursera.org/account/accomplishments/records/XWFUL4LLHGSJ"
                            target="_blank"
                            className="text-sm sm:text-base hover:text-yellow-300 transition-colors"
                        >
                            Generative AI with LLM
                        </Link>
                    </div>

                    {/* DeepLearning.AI and Stanford Certification */}
                    <div className="mb-3">
                        <div className="flex flex-row justify-between flex-wrap">
                            <p className="mt-1 font-bold italic text-sm sm:text-base">Stanford University (Coursera)</p>
                            <p className="text-sm sm:text-base">Feb 2024</p>
                        </div>
                        <Link
                            href="https://www.coursera.org/account/accomplishments/specialization/5YFXDJMNEXA8"
                            target="_blank"
                            className="text-sm sm:text-base hover:text-yellow-300 transition-colors"
                        >
                            Machine Learning Specialisation
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe