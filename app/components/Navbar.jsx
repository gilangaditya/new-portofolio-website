'use client'
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="Header Background" className="w-full" />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
            ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>

                <Link href="#top" scroll={false}>
                    <Image 
                        src={isDarkMode ? assets.logo_dark : assets.logo} 
                        alt="Website Logo" 
                        className="cursor-pointer mr-14 w-10" />
                </Link>

                <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                ${isScrolled ? "" : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><Link className="font-Ovo" href="/">Home</Link></li>
                    <li><a className="font-Ovo" href="#aboutme" >About Me</a></li>
                    <li><a className="font-Ovo" href="#services">Services</a></li>
                    <li><a className="font-Ovo" href="#work" >My Work</a></li>
                    <li><a className="font-Ovo" href="#contact">Contact Me</a></li>
                    <li><Link className="font-Ovo" href="/blog">Blog</Link></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={() => setIsDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Dark Mode" className="w-6" />
                    </button>

                    <Link className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white" href="#contact">
                        Contact Me 
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3" />
                    </Link>

                    <button className="block md:hidden ml-3" onClick={() => setIsMenuOpen(prev => !prev)}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Open Menu" className="w-6" />
                    </button>
                </div>

                {/* ---- Mobile Menu ---- */}
                <ul className={`fixed top-0 bottom-0 right-0 w-64 h-screen bg-white shadow-lg z-50 p-10 transition-transform duration-500 dark:bg-darkHover dark:text-white 
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                    <div className="absolute right-6 top-6 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className="w-5" />
                    </div>

                    <li><Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="/" scroll={false}>Home</Link></li>
                    <li><Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#aboutme" scroll={false}>About Me</Link></li>
                    <li><Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#services" scroll={false}>Services</Link></li>
                    <li><Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#work" scroll={false}>My Work</Link></li>
                    <li><Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="#contact" scroll={false}>Contact Me</Link></li>
                    <li><Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="/blog" scroll={false}>Blog</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
