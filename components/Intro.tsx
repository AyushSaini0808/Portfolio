"use client";
import { motion } from "framer-motion";
import React from "react";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {Bodoni_Moda} from "next/font/google";
const bodoniModa = Bodoni_Moda({
    variable: "--font-bodoni",
    subsets: ["latin"],
    weight:"800",
    style:"italic"
});

export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-xl sm:text-2xl md:text-5xl font-bold dark:text-white text-center">
                    hi,
                </div>
                <div className="font-extralight text-3xl sm:text-4xl md:text-7xl dark:text-neutral-200 py-4">
                    I&apos;m <span className={`${bodoniModa.className} font-bold`}>Ayush Saini</span>
                </div>
            </motion.div>
        </AuroraBackground>
    );
}
