import React from 'react'
import {AuroraBackgroundDemo} from "@/components/Intro";
import {TextHoverEffect} from "@/components/ui/text-hover-effect";
import ProjectGrid from "@/components/ProjectGrid";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/Me";

const Hero = () => {
    return (
        <div className={"h-full w-full"}>
            <Navbar/>
            <div className={"ml-10 mr-10 mt-10"}>
                <AuroraBackgroundDemo/>
            </div>
            <div className="h-[20rem] flex items-center text-center justify-center">
                <TextHoverEffect text="PROJECTS" />
            </div>
            <ProjectGrid/>
            <AboutMe/>
        </div>
    )
}
export default Hero
