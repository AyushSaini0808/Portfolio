"use client";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import {LineChart, BarChart3, TrendingUp, ExternalLink } from "lucide-react";

const pixelify = Pixelify_Sans({
    variable: "--font-pixel",
    subsets: ["latin"],
    weight: "500",
});

export default function StockSage() {

    const features = [
        { icon: <LineChart className="text-emerald-400" />, title: "Real-Time Analysis", description: "Live updates from Yahoo Finance API with minute-by-minute price tracking" },
        { icon: <BarChart3 className="text-blue-400" />, title: "LSTM Predictions", description: "96% accurate price forecasting using deep learning model" },
        { icon: <TrendingUp className="text-purple-400" />, title: "Technical Indicators", description: "RSI, MACD, and moving averages to support trading decisions" }
    ];

    const tools = ["Streamlit", "Keras", "TensorFlow", "Pandas", "Plotly", "Seaborn", "Scikit-learn"];

    return (
        <main className=" min-h-screen text-white">
            <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-4 md:px-8 py-8 gap-8">
                {/* Info Section */}
                <article className="md:max-w-md lg:max-w-xl sticky top-8 self-start">
                    <h1 className={`${pixelify.className} text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent`}>
                        StockSage
                    </h1>

                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        <span className="mr-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <p className="text-emerald-400 text-sm font-medium">Financial Intelligence Platform</p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-slate-50/40 uppercase text-sm tracking-wider font-medium">About</h2>
                        <div className="mt-3 space-y-4 text-slate-200">
                            <p className="leading-relaxed">
                                StockSage is an advanced stock dashboard hosted on Streamlit, designed to provide
                                comprehensive insights into company financials and stock performance. It fetches data
                                directly from the Yahoo Finance API and displays real-time updates on stock volatility,
                                closing price trends, and trading volume.
                            </p>
                            <p className="leading-relaxed">
                                A standout feature is its LSTM (Long Short-Term Memory) model, which predicts closing
                                prices based on historical data with 96% accuracy—making it a valuable tool for
                                data-driven investment decisions.
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
                    <Image src={"/ss_logo.png"} alt={"StockSage logo"} width={550} height={550} className={"rounded-3xl mb-6"} />
                    <Image src={"/website.png"} alt={"StockSage logo"} width={550} height={550} />
                    <Image src={"/dashboard.svg"} alt={"StockSage logo"} width={550} height={550} className={"mt-6"}/>
                    <Image src={"/prediction.png"} alt={"StockSage logo"} width={550} height={650} className={"mt-6 rounded-lg"}/>
                </div>
            </section>
        </main>
    );
}