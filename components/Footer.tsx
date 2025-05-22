'use client'
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
    return (
        <div className="h-full flex flex-row justify-between items-center my-5 mx-14">
            <div className="text-yellow-300 border-2 border-yellow-300 rounded-full w-[80px] text-center px-4 py-2 text-sm mt-4 ml-16">
                v1.0.0
            </div>
            <div className="text-white/60 mt-4 mr-16">© 2025, Ayush Saini</div>
        </div>
    );
};

export default Footer;