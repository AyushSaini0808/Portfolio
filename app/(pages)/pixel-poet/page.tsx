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
        <main className=" min-h-screen text-white">
            <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4 md:px-8 py-8 gap-8">
                {/* Info Section */}
                <article className="md:max-w-md lg:max-w-xl sticky top-8 self-start">
                    <h1 className={`${pixelify.className} text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent`}>
                        Pixel-Poet
                    </h1>

                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-emeraldnpm -500/30">
                        <span className="mr-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <p className="text-green-400 text-sm font-medium">ASCII Art Generator</p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-slate-50/40 uppercase text-sm tracking-wider font-medium">About</h2>
                        <div className="mt-3 space-y-4 text-slate-200">
                            <p className="leading-relaxed">
                                PixelPoet is a minimalist ASCII art generator web app deployed on Vercel. It transforms images into expressive ASCII representations by mapping pixel brightness to corresponding text characters.

                                Each pixel&apos;s color intensity is analyzed and translated into an ASCII symbol, which is then rendered using the pre tag to preserve formatting and alignment. The result is a stylized, text-based version of the original image—perfect for nostalgic vibes or unique visual storytelling.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-slate-50/40 uppercase text-sm tracking-wider font-medium">Key Features</h2>
                        <div className="mt-4 space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-100">{feature.title}</h3>
                                        <p className="text-sm text-slate-300">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-slate-50/40 uppercase text-sm tracking-wider font-medium">Tech Stack</h2>
                        <ul className="flex flex-wrap gap-2 mt-3">
                            {tools.map((tool) => (
                                <li key={tool} className="bg-slate-800/70 border border-slate-700/70 px-3 py-1 rounded-full text-sm">
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex items-center gap-8">
                        <div>
                            <h2 className="text-slate-50/40 uppercase text-sm tracking-wider font-medium">Duration</h2>
                            <p className="text-slate-200 mt-1">December 2024 – January 2025</p>
                        </div>
                        <a href="https://pixel-poet.vercel.app/" target={"_blank"} className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors my-3">
                            View Project <ExternalLink size={16} />
                        </a>
                    </div>
                </article>
                <div>
                    <Image src={"/pp_logo.png"} alt={"StockSage logo"} width={550} height={550} className={"mb-6"} />
                    <Image src={"/pp_mockup.png"} alt={"StockSage logo"} width={550} height={550} />
                    <Image src={"/copilot.png"} alt={"StockSage logo"} width={550} height={550} className={"mt-6"}/>


                </div>
            </section>
        </main>
    );
}