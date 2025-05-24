"use client";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import {Pen, Map, Rocket} from "lucide-react";

const pixelify = Pixelify_Sans({
    variable: "--font-pixel",
    subsets: ["latin"],
    weight: "500",
});

export default function TensorBloom() {
    const features = [
        { icon: <Pen className="text-orange-400" />, title: "Concise text-based lessons", description: "Converts any uploaded image into a detailed ASCII art representation." },
        { icon: <Map className="text-pink-400" />, title: "Structured Learning Path", description: "Maps pixel brightness to ASCII characters based on grayscale intensity." },
        { icon: <Rocket className="text-yellow-400" />, title: "Beginner Friendly Curriculum", description: "Optimized for quick processing and snappy performance, even on large images." }
    ];

    const tools = ["NextJS", "TailwindCSS", "OAuth","React","Firebase"];

    return (
        <main className="min-h-screen text-white">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-8 lg:gap-12 xl:gap-16">
                    {/* Info Section */}
                    <article className="flex-1 xl:max-w-2xl xl:sticky xl:top-8 xl:self-start">
                        {/* Title */}
                        <h1 className={`${pixelify.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight`}>
                            Tensor Bloom
                        </h1>

                        {/* Status Badge */}
                        <div className="mt-4 sm:mt-6 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-500/10 border border-emerald-500/30">
                            <span className="mr-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <p className="text-green-400 text-xs sm:text-sm font-medium">Educational ML Platform</p>
                        </div>

                        {/* About Section */}
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <h2 className="text-slate-400 uppercase text-xs sm:text-sm tracking-wider font-medium">About</h2>
                            <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-slate-200">
                                <p className="leading-relaxed text-sm sm:text-base">
                                    Tensor Bloom is a beginner-friendly learning platform built to make machine learning more accessible and less overwhelming. It focuses on core topics like Linear Algebra, Statistics, Probability, and Deep Learning, delivering content through visual explanations and concise, text-based lessons. Unlike traditional resources that dump theory without context, Tensor Bloom breaks down complex concepts into digestible modules.
                                </p>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    The platform is built using React and Next.js, and is currently under active development. Upcoming features include community forums to foster peer learning and support. Whether you&apos;re just starting out or looking to strengthen your ML foundation, Tensor Bloom aims to be your go-to launchpad.
                                </p>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <h2 className="text-slate-400 uppercase text-xs sm:text-sm tracking-wider font-medium">Key Features</h2>
                            <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                                        <div className="flex-shrink-0 p-2 sm:p-2.5 bg-slate-800/50 rounded-lg border border-slate-700">
                                            {feature.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-medium text-slate-100 text-sm sm:text-base">{feature.title}</h3>
                                            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <h2 className="text-slate-400 uppercase text-xs sm:text-sm tracking-wider font-medium">Tech Stack</h2>
                            <ul className="flex flex-wrap gap-2 sm:gap-2.5 mt-3 sm:mt-4">
                                {tools.map((tool) => (
                                    <li key={tool} className="bg-slate-800/70 border border-slate-700/70 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm text-slate-200">
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Duration */}
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <div>
                                <h2 className="text-slate-400 uppercase text-xs sm:text-sm tracking-wider font-medium">Duration</h2>
                                <p className="text-slate-200 mt-1 sm:mt-2 text-sm sm:text-base">Under Development</p>
                            </div>
                        </div>
                    </article>

                    {/* Images Section */}
                    <div className="flex-1 xl:max-w-2xl">
                        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                            <div className="relative">
                                <Image
                                    src="/tt_page.png"
                                    alt="tensor bloom page"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto rounded-lg shadow-2xl border border-slate-700/50"
                                    priority
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src="/01.png"
                                    alt="macbook mockup for tensor bloom"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto rounded-lg shadow-2xl border border-slate-700/50"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}