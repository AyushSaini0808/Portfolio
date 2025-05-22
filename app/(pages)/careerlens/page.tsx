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
        <main className=" min-h-screen text-white">
            <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4 md:px-8 py-8 gap-8">
                {/* Info Section */}
                <article className="md:max-w-md lg:max-w-xl sticky top-8 self-start">
                    <h1 className={`${pixelify.className} text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent`}>
                        CareerLens
                    </h1>

                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        <span className="mr-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <p className="text-emerald-400 text-sm font-medium">AI Interview Coach</p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-slate-50/40 uppercase text-sm tracking-wider font-medium">About</h2>
                        <div className="mt-3 space-y-4 text-slate-200">
                            <p className="leading-relaxed">
                                CareerLens is an innovative AI-powered career guidance platform designed to help
                                professionals and students navigate their career paths with intelligent insights and
                                personalized recommendations.
                            </p>
                            <p className="leading-relaxed">
                                Whether you're a student exploring career options, a professional looking to advance,
                                or someone considering a career change, CareerLens provides the intelligent guidance
                                you need to move forward with confidence.
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
                            <p className="text-slate-200 mt-1">July 2024 – August 2024</p>
                        </div>
                        <a href="https://stocksage-app.streamlit.app/" target={"_blank"} className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors my-3">
                            View Project <ExternalLink size={16} />
                        </a>
                    </div>
                </article>
                <div>
                    <Image src={"/prepify_logo.png"} alt={"StockSage logo"} width={550} height={550} className={"rounded-3xl mb-6"} />
                    <Image src={"/website.png"} alt={"StockSage logo"} width={550} height={550} />
                    <Image src={"/career-lens.png"} alt={"StockSage logo"} width={550} height={550} className={"mt-6"}/>
                    <Image src={"/prediction.png"} alt={"StockSage logo"} width={550} height={650} className={"mt-6 rounded-lg"}/>
                </div>
            </section>
        </main>
    );
}