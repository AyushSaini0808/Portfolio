"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {BackgroundGradientDemo} from "@/components/Logo";


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
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && event.target && event.target instanceof Element && !event.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
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
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            scrolled
                ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10'
                : 'bg-black/95'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:justify-between py-4">
                    <div className="flex-shrink-0">
                        <BackgroundGradientDemo />
                    </div>

                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                className="text-white hover:text-blue-400 transition-all duration-200 relative group font-medium text-lg"
                                rel={link.external ? "noopener noreferrer" : undefined}
                            >
                                {link.name}
                                <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1s-2822sgp-96oeCdYcfj9nBVGnufGpYs/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                            aria-label="View Resume"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex justify-between items-center py-4">
                    <BackgroundGradientDemo />
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-white focus:outline-none rounded-lg hover:bg-white/10 transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <div className="relative w-6 h-6">
                            <Menu
                                size={24}
                                className={`absolute transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                                }`}
                            />
                            <X
                                size={24}
                                className={`absolute transition-all duration-300 ${
                                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                                }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ${
                        isMenuOpen
                            ? 'opacity-100 z-40 visible'
                            : 'opacity-0 -z-10 invisible'
                    }`}
                    style={{ top: '80px' }}
                >
                    <div className={`flex flex-col items-center justify-center h-full space-y-8 p-6 transition-all duration-500 ${
                        isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                className={`text-2xl text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110 ${
                                    isMenuOpen ? 'animate-fadeInUp' : ''
                                }`}
                                style={{ animationDelay: `${index * 100}ms` }}
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
                            className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg ${
                                isMenuOpen ? 'animate-fadeInUp' : ''
                            }`}
                            style={{ animationDelay: '300ms' }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;