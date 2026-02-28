'use client'
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuVariants = {
        closed: { x: "100%" },
        open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.8, ease: "easeInOut" },
        }),
    };

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="Header Background" className="w-full" />
            </div>
            
            <motion.nav 
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all
                ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="#top" scroll={false}>
                        <Image 
                            src={isDarkMode ? assets.logo_dark : assets.logo} 
                            alt="Website Logo" 
                            className="cursor-pointer mr-14 w-10" />
                    </Link>
                </motion.div>

                <motion.ul 
                    className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                    ${isScrolled ? "" : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                >
                    {['Home', 'About Me', 'Services', 'My Work', 'Contact Me', 'Blog'].map((item, i) => (
                        <motion.li
                            key={item}
                            custom={i}
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ y: -3 }}
                        >
                            {item === 'Home' ? (
                                <Link className="font-Ovo" href="/">{item}</Link>
                            ) : item === 'Blog' ? (
                                <Link className="font-Ovo" href="/blog">{item}</Link>
                            ) : (
                                <a className="font-Ovo" href={`#${item.toLowerCase().replace(/ /g, '')}`}>{item}</a>
                            )}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.button 
                        onClick={() => setIsDarkMode(prev => !prev)}
                        whileHover={{ rotate: 20 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Toggle Dark Mode" className="w-6" />
                    </motion.button>

                    <motion.div
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50 hover:bg-lightHover hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white" href="#contact">
                            Contact Me 
                            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3" />
                        </Link>
                    </motion.div>

                    <motion.button 
                        className="block md:hidden ml-3" 
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Open Menu" className="w-6" />
                    </motion.button>
                </motion.div>

                {/* ---- Mobile Menu ---- */}
                <motion.ul 
                    className={`fixed top-0 bottom-0 right-0 w-64 h-screen bg-white shadow-lg z-50 p-10 dark:bg-darkHover dark:text-white`}
                    variants={menuVariants}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                >

                    <motion.div 
                        className="absolute right-6 top-6 cursor-pointer" 
                        onClick={() => setIsMenuOpen(false)}
                        whileHover={{ rotate: 90 }}
                    >
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className="w-5" />
                    </motion.div>

                    {['Home', 'About Me', 'Services', 'My Work', 'Contact Me', 'Blog'].map((item, i) => (
                        <motion.li 
                            key={item}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ delay: isMenuOpen ? i * 0.05 : 0 }}
                        >
                            {item === 'Home' ? (
                                <Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="/" scroll={false}>{item}</Link>
                            ) : item === 'Blog' ? (
                                <Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href="/blog" scroll={false}>{item}</Link>
                            ) : (
                                <Link className="font-Ovo" onClick={() => setIsMenuOpen(false)} href={`#${item.toLowerCase().replace(/ /g, '')}`} scroll={false}>{item}</Link>
                            )}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>
        </>
    );
};

export default Navbar;
