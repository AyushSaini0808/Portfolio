'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { BackgroundGradientDemo } from "@/components/Logo";
import { JetBrains_Mono } from "next/font/google";
import { Menu, X } from 'lucide-react';
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains",
    subsets: ["latin"],
    weight: "800",
});

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside or on escape key
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isMenuOpen]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Contact Me", href: "mailto:ayushsaini2004@gmail.com", external: true },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/ayush-saini-3b2884247/", external: true },
        { name: "Github", href: "https://github.com/AyushSaini0808", external: true },
    ];

    return (
        <nav className={`sticky top-0 z-50 w-full bg-black shadow-md overflow-y-hidden ${jetBrainsMono.className}`}>
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:justify-between py-4 border-b-2 border-b-slate-50/20">
                    <Link href={"/"} className="w-1/3" aria-label="Home">
                        <BackgroundGradientDemo />
                    </Link>

                    <div className="flex justify-center space-x-6 text-xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                className=" text-white transition-colors duration-200 relative group"
                                rel={link.external ? "noopener noreferrer" : undefined}
                            >
                                {link.name}
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1s-2822sgp-96oeCdYcfj9nBVGnufGpYs/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500 hover:text-purple-300 transition-colors duration-200 font-semibold relative group"
                            aria-label="View Resume"
                        >
                            Resume
                            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex justify-between items-center py-4">
                    <Link href={"/"} aria-label="Home">
                        <BackgroundGradientDemo />
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-white focus:outline-none rounded-md hover:bg-white/10 transition-colors duration-200"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed inset-0 top-16 bg-black/95 transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none -z-10'
                    }`}
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                className="text-2xl text-white hover:text-blue-400 transition-colors duration-200"
                                rel={link.external ? "noopener noreferrer" : undefined}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1s-2822sgp-96oeCdYcfj9nBVGnufGpYs/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-purple-500 hover:text-purple-300 transition-colors duration-200 font-semibold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;