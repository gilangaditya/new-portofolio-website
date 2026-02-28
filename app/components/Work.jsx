'use client';

import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Work = ({isDarkMode}) => {
    const router = useRouter();
    const initialProjects = 4;
    const [visibleProjects, setVisibleProjects] = useState(initialProjects);
    
    const handleShowMore = () => {
        setVisibleProjects(workData.length);
    };
    
    const handleShowLess = () => {
        setVisibleProjects(initialProjects);
    };
    
    const handleLinkClick = (e, link) => {
        e.preventDefault();
        
        if (!link || link.trim() === "" || link === "#") {
            router.push("/components/404");
        } else {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1,
            },
        },
    };

    const projectVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };
    
    return (
        <motion.div 
            id="work" 
            className="w-full px-[12%] py-10 scoll-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h4 variants={titleVariants} className="text-center mb-2 text-lg font-Ovo">My portfolio</motion.h4>
            <motion.h2 variants={titleVariants} className="text-center text-5xl font-Ovo">My latest work</motion.h2>
            <motion.p variants={titleVariants} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web development portfolio! Explore a collection of projects showcasing
                my expertise in Software Engineer.
            </motion.p>
            
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 dark:text-black" 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={visibleProjects}
            >
                {workData.slice(0, visibleProjects).map((project, index) => (
                    <motion.div 
                        key={index}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        variants={projectVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div 
                            className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 items-center flex justify-between"
                            whileHover={{ bottom: 28 }}
                        >
                            <div>
                                <h2 className="font-semibold">{project.title}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <motion.div 
                                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition cursor-pointer"
                                onClick={(e) => handleLinkClick(e, project.link)}
                                whileHover={{ scale: 1.1, backgroundColor: "#bfff00" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image src={assets.send_icon} alt="send icon" className="w-5" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
            
            {visibleProjects < workData.length ? (
                <motion.button 
                    onClick={handleShowMore}
                    className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 mx-auto hover:bg-lightHover dark:border-white dark:hover:bg-darkHover/50 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Show More <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt="right arrow" className="w-4" />
                </motion.button>
            ) : (
                <motion.button 
                    onClick={handleShowLess}
                    className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 mx-auto hover:bg-lightHover dark:border-white dark:hover:bg-darkHover/50 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt="right arrow" className="w-4 rotate-180" />
                    Show Less
                </motion.button>
            )}
        </motion.div>
    );
};

export default Work;