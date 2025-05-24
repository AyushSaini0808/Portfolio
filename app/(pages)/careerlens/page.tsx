"use client";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import {FileUser, Brain, ExternalLink } from "lucide-react";

const pixelify = Pixelify_Sans({
    variable: "--font-pixel",
    subsets: ["latin"],
    weight: "500",
});

export default function CareerLens() {
    const features = [
        { icon: <FileUser className="text-pink-400" />, title: "Resume Analysis", description: "Gain in-depth insights about your resume, highlighting overall impact and areas of improvement." },
        { icon: <Brain className="text-orange-400" />, title: "Chat with the Coach", description: "AI coach that can help you prepare for your interviews (technical, behavioral or general) and suggest ways you can improve upon your skills for the job role that you provide." },
    ];

    const tools = ["Streamlit", "GroqAPI", "PyPDF2"];

    return (
        <main className="min-h-screen text-white">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-8 lg:gap-12 xl:gap-16">
                    {/* Info Section */}
                    <article className="flex-1 xl:max-w-2xl xl:sticky xl:top-8 xl:self-start">
                        {/* Title */}
                        <h1 className={`${pixelify.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight`}>
                            CareerLens
                        </h1>

                        {/* Status Badge */}
                        <div className="mt-4 sm:mt-6 inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                            <span className="mr-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <p className="text-emerald-400 text-xs sm:text-sm font-medium">AI Interview Coach</p>
                        </div>

                        {/* About Section */}
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <h2 className="text-slate-400 uppercase text-xs sm:text-sm tracking-wider font-medium">About</h2>
                            <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 text-slate-200">
                                <p className="leading-relaxed text-sm sm:text-base">
                                    CareerLens is an innovative AI-powered career guidance platform designed to help
                                    professionals and students navigate their career paths with intelligent insights and
                                    personalized recommendations.
                                </p>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    Whether you&apos;re a student exploring career options, a professional looking to advance,
                                    or someone considering a career change, CareerLens provides the intelligent guidance
                                    you need to move forward with confidence.
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
                                    <p className="text-slate-200 mt-1 sm:mt-2 text-sm sm:text-base">July 2024 – August 2024</p>
                                </div>
                                <a
                                    href="https://stocksage-app.streamlit.app/"
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
                                    src="/prepify_logo.png"
                                    alt="CareerLens logo"
                                    width={550}
                                    height={550}
                                    className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-700/50"
                                    priority
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src="/career-lens.png"
                                    alt="CareerLens application interface"
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