"use client";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import {Palette, Scale, Rabbit, ExternalLink } from "lucide-react";

const pixelify = Pixelify_Sans({
    variable: "--font-pixel",
    subsets: ["latin"],
    weight: "500",
});

export default function PixelPoet() {
    const features = [
        { icon: <Palette className="text-blue-400" />, title: "Image-to-ASCII Conversion", description: "Converts any uploaded image into a detailed ASCII art representation." },
        { icon: <Scale className="text-emerald-400" />, title: "Pixel Intensity Mapping", description: "Maps pixel brightness to ASCII characters based on grayscale intensity." },
        { icon: <Rabbit className="text-rose-400" />, title: "Fast and Lightweight", description: "Optimized for quick processing and snappy performance, even on large images." }
    ];

    const tools = ["HTML", "CSS", "JavaScript"];

    return (
        <main className="min-h-screen text-white ">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-8 lg:gap-12 xl:gap-16">
                    {/* Info Section */}
                    <article className="flex-1 xl:max-w-2xl xl:sticky xl:top-8 xl:self-start">
                        {/* Title */}
                        <h1 className={`${pixelify.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight`}>
                            Pixel-Poet
                        </h1>

                        {/* Status Badge */}
                        <div className="mt-4 sm:mt-6 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-500/10 border border-emerald-500/30">
                            <span className="mr-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <p className="text-green-400 text-xs sm:text-sm font-medium">ASCII Art Generator</p>
                        </div>

                        {/* About Section */}
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <h2 className="text-slate-400 uppercase text-xs sm:text-sm tracking-wider font-medium">About</h2>
                            <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-slate-200">
                                <p className="leading-relaxed text-sm sm:text-base">
                                    PixelPoet is a minimalist ASCII art generator web app deployed on Vercel. It transforms images into expressive ASCII representations by mapping pixel brightness to corresponding text characters.
                                </p>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    Each pixel&apos;s color intensity is analyzed and translated into an ASCII symbol, which is then rendered using the pre tag to preserve formatting and alignment. The result is a stylized, text-based version of the original image—perfect for nostalgic vibes or unique visual storytelling.
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

                        {/* Duration and CTA */}
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                                <div>
                                    <h2 className="text-slate-400 uppercase text-xs sm:text-sm tracking-wider font-medium">Duration</h2>
                                    <p className="text-slate-200 mt-1 sm:mt-2 text-sm sm:text-base">December 2024 – January 2025</p>
                                </div>
                                <a
                                    href="https://pixel-poet.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg transition-colors text-sm sm:text-base font-medium text-white self-start sm:self-auto"
                                >
                                    View Project <ExternalLink size={16} className="flex-shrink-0" />
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Images Section */}
                    <div className="flex-1 xl:max-w-2xl">
                        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                            <div className="relative">
                                <Image
                                    src="/pp_logo.png"
                                    alt="PixelPoet logo"
                                    width={550}
                                    height={550}
                                    className="w-full h-auto rounded-lg shadow-2xl border border-slate-700/50"
                                    priority
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src="/pp_mockup.png"
                                    alt="PixelPoet application mockup"
                                    width={550}
                                    height={550}
                                    className="w-full h-auto rounded-lg shadow-2xl border border-slate-700/50"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src="/copilot.png"
                                    alt="PixelPoet ASCII art example"
                                    width={550}
                                    height={550}
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