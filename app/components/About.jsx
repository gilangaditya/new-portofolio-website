'use client';

import { assets, infoList, techData, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = ({isDarkMode})=> {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    return(
        <motion.div 
            id="aboutme" 
            className="w-full px-[12%] py-10 scoll-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.h4 variants={itemVariants} className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
            <motion.h2 variants={itemVariants} className="text-center text-5xl font-Ovo">About Me</motion.h2>
            
            <motion.div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20" variants={containerVariants}>
                <motion.div 
                    className="w-64 sm:w-80 rounded-3xl mx-w-one"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <Image src={assets.icon3} alt="user image" className="w-full rounded-3xl" />
                </motion.div>
                
                <motion.div className="flex-1" variants={itemVariants}>
                    <motion.p className="mb-10 max-w-2xl font-Ovo">I am experience Software Engineer with over a decade of professional expertise in the field thoughtout my career, I have had teh privilege of collaboration with prestigius organization, contributing to their success and growth. </motion.p>

                    <motion.ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({icon, iconDark, title, description}, index)=>(
                            <motion.li 
                                key={index} 
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                            >
                                <Image src={ isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4 variants={itemVariants} className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</motion.h4>

                    <motion.ul className="flex items-center gap-2 flex-wrap sm:gap-5">
                        {toolsData.map((tool, index)=>(
                            <motion.li 
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer" 
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                            >
                                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4 variants={itemVariants} className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tech Stack I use</motion.h4>

                    <motion.ul className="flex items-center gap-2 flex-wrap sm:gap-5">
                        {techData.map((tech, index)=>(
                            <motion.li 
                                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer" 
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                whileHover={{ scale: 1.1, rotate: -10 }}
                            >
                                <Image src={tech} alt="tech stack" className="w-5 sm:w-7" />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About;