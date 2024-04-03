'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/Link";
import {useContext} from "react";


function Navbar({ className }: { className?: string }){
    

    const [active, setActive] = useState<string | null>(null);
    return(
    <>
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    
                    </MenuItem>
                </Link>
                    <MenuItem setActive={setActive} active={active} item="Explore">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/courses">All Projects</HoveredLink>
                            <HoveredLink href="/courses">AI and Machine Learning</HoveredLink>
                            <HoveredLink href="/courses">DevOps</HoveredLink>
                            <HoveredLink href="/courses">Development</HoveredLink>
                            <HoveredLink href="/courses">Cloud</HoveredLink>
                            
                        </div>
                    </MenuItem>
                    <Link href={"/about"}>
                    <MenuItem setActive={setActive} active={active} item="About us">
                    
                    </MenuItem>
                    </Link>
            </Menu>
        </div>
      </>
    )
}

export default Navbar