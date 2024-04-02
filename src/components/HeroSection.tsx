"use client";
import Link from "next/link";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import {toast, Toaster} from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { TracingBeam } from "./ui/tracing-beam";
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";


function HeroSection(){
    return(
    
        <div
        className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            {/* <Spotlight
                 className="-top-40 left-0 md:left-60 md:-top-20"
                 fill="green"
            /> */}
            
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full absolute top-0 left-0 z-0"
                particleColor="#FFFFFF"
             />
             
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> Revolutionizing 
                    Project <br/> Building </h1>
                <p 
                className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    "Discover a new era of project collaboration and innovation. Join us as we redefine 
                    the way projects are conceived, developed, and delivered."
                </p>
                <div className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <>
                        Explore
                    </>
                    
                </div>
            </div>
        </div>
    
    )
}

export default HeroSection