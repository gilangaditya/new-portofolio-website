'use client';

import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Services = ({isDarkMode}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    return (
        <motion.div 
            id="services" 
            className="w-full px-[12%] py-10 scoll-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h4 variants={titleVariants} className="text-center mb-2 text-lg font-Ovo">What I offer</motion.h4>
            <motion.h2 variants={titleVariants} className="text-center text-5xl font-Ovo">My Services</motion.h2>
            <motion.p variants={titleVariants} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am a Software Engineer from Depok, Indonesia with 1 years of experience in multiple companies. I have a strong foundation in web development and have a passion for learning new technologies and building new projects. I am always looking for new opportunities to grow and expand my knowledge.
            </motion.p>
            
            <motion.div className="grid grid-cols-auto gap-6 my-10" variants={containerVariants}>
                {serviceData.map(({icon, title, description, link, slug}, index) => (
                    <motion.div 
                        key={index}
                        className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
                        variants={cardVariants}
                        whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                    >
                        <Image src={icon} alt={title} className="w-10" />
                        <h3 className="my-4 text-lg text-gray-700 dark:text-white">{title}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                            {description}
                        </p>
                        <motion.div
                            whileHover={{ x: 5 }}
                        >
                            <Link 
                                href={`/services/${slug || link}`} 
                                className="flex items-center gap-2 mt-5 text-sm transition-all"
                            >
                                Read More 
                                <Image 
                                    src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} 
                                    className="w-4" 
                                    alt="arrow" 
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Services;