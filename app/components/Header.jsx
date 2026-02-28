'use client';

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Header = ()=> {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
        hover: { scale: 1.05, transition: { type: "spring", stiffness: 250, damping: 25 } },
    };

    return (
        <motion.div 
            className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={imageVariants} whileHover="hover">
                <Image src={assets.user_image} alt="" className="rounded-full w-32" />
            </motion.div>
            
            <motion.h3 variants={itemVariants} className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Gilang Aditya Purnama Sidhi <Image src={assets.hand_icon} alt="" className="w-6"/>
            </motion.h3>
            
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                Software Engineer based in Depok
            </motion.h1>
            
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto font-Ovo">
                I am an experienced Software Engineer with over a decade of professional expertise. Throughout my career, I have collaborated with prestigious organizations, contributing to their success and growth. I am passionate about technology and continuously seek to learn new skills to stay updated with industry trends. In my free time, I enjoy working on creative projects and experimenting with innovative ideas. 😄 
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a 
                    href="#contact" 
                    className="px-10 py-3 border border-white rounded-full border-gray-500 flex items-center gap-2 text-white bg-black dark:bg-transparent hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Me <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </motion.a>

                <motion.a 
                    href="" 
                    className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black hover:bg-lightHover hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white dark:hover:text-white"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    My Resume <Image src={assets.download_icon} alt="" className="w-4" />
                </motion.a>
            </motion.div>
        </motion.div>
    )
}

export default Header;