"use client";
import React from "react";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gradient-to-t from-black/50 to-transparent border-t border-white/10 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">

                    {/* Left Section - Version & Status */}
                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
                        <div className="group relative">
                            <div className="text-yellow-300 border-2 border-yellow-300 rounded-full px-4 py-2 text-sm font-mono font-semibold transition-all duration-300 hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:shadow-yellow-300/25 cursor-default">
                                v1.0.0
                            </div>
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                Current Version
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 text-green-400 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="font-medium">Live & Running</span>
                        </div>
                    </div>

                    {/* Center Section - Made with love */}
                    <div className="flex items-center space-x-2 text-white/70 text-sm">
                        <span>Made with</span>
                        <Heart
                            size={16}
                            className="text-red-500 animate-pulse hover:scale-110 transition-transform duration-200"
                        />
                        <span>&</span>
                        <Coffee
                            size={16}
                            className="text-amber-600 hover:scale-110 transition-transform duration-200"
                        />
                        <span>by</span>
                        <span className="text-white font-semibold">Ayush Saini</span>
                    </div>

                    {/* Right Section - Copyright */}
                    <div className="flex flex-col items-center lg:items-end space-y-2">
                        <div className="text-white/60 text-sm">
                            © {currentYear} Ayush Saini
                        </div>
                        <div className="text-white/40 text-xs">
                            All rights reserved
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Additional Info */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">

                        {/* Tech Stack Indicator */}
                        <div className="flex items-center space-x-3">
                            <Code size={16} className="text-blue-400" />
                            <div className="flex items-center space-x-2 text-xs text-white/50">
                                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">React</span>
                                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">Next.js</span>
                                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Tailwind</span>
                            </div>
                        </div>

                        {/* Quick Links - could be expanded */}
                        <div className="flex items-center space-x-6 text-xs text-white/50">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="hover:text-white/80 transition-colors duration-200 flex items-center space-x-1"
                            >
                                <span>↑</span>
                                <span>Back to top</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Border Effect */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </footer>
    );
};

export default Footer;