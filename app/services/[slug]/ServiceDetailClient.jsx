// app/services/[slug]/ServiceDetailClient.jsx
"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ServiceDetailClient({ service, slug }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };
        checkDarkMode();
        
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        
        return () => observer.disconnect();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.05 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    };
    
    return (
        <div className="w-full px-[12%] py-10 min-h-screen">
            {/* Breadcrumb */}
            <motion.div
                className="flex items-center gap-2 mb-8 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Home
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/#services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Services
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900 dark:text-white">{service.title}</span>
            </motion.div>
            
            {/* Header */}
            <motion.div
                className="max-w-4xl mx-auto text-center mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="text-4xl">
                        {slug === 'web-developer' && '🌐'}
                        {slug === 'mobile-app' && '📱'}
                        {slug === 'ui-ux-design' && '🎨'}
                        {slug === 'graphics-design' && '🖼️'}
                    </div>
                </motion.div>
                <motion.h1 className="text-5xl md:text-6xl font-Ovo mb-6" variants={itemVariants}>
                    {service.title}
                </motion.h1>
                <motion.p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
                    {service.fullDescription}
                </motion.p>
            </motion.div>
            
            {/* Key Services */}
            <motion.div
                className="max-w-6xl mx-auto mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.h2 className="text-3xl font-Ovo mb-8 text-center" variants={itemVariants}>
                    What I Offer
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {service.keyServices.map((item, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            
            {/* Technologies */}
            <motion.div
                className="max-w-6xl mx-auto mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.h2 className="text-3xl font-Ovo mb-8 text-center" variants={itemVariants}>
                    Technologies & Tools
                </motion.h2>
                <motion.div
                    className="flex flex-wrap justify-center gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {service.technologies.map((tech, index) => (
                        <motion.span
                            key={index}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
            
            {/* Benefits */}
            <motion.div
                className="max-w-6xl mx-auto mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.h2 className="text-3xl font-Ovo mb-8 text-center" variants={itemVariants}>
                    Why Choose This Service
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {service.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-3 p-4 rounded-lg hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
                            variants={itemVariants}
                            whileHover={{ y: -3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-green-500 text-xl mt-1">✓</div>
                            <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            
            {/* Process */}
            <motion.div
                className="max-w-4xl mx-auto mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.h2 className="text-3xl font-Ovo mb-8 text-center" variants={itemVariants}>
                    My Process
                </motion.h2>
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {service.process.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-6 items-start"
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold"
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {index + 1}
                            </motion.div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                                    {item.step}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            
            {/* CTA */}
            <motion.div
                className="max-w-4xl mx-auto text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h2 className="text-3xl font-Ovo mb-4" variants={itemVariants}>
                    Ready to Start Your Project?
                </motion.h2>
                <motion.p className="text-lg mb-8 opacity-90" variants={itemVariants}>
                    Let's discuss how I can help bring your ideas to life
                </motion.p>
                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/#contact"
                            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/#work"
                            className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                        >
                            View Portfolio
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
            
            {/* Back Button */}
            <div className="text-center mt-12">
                <Link 
                    href="/#services"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <Image 
                        src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} 
                        className="w-4 rotate-180" 
                        alt="back" 
                    />
                    Back to All Services
                </Link>
            </div>
        </div>
    );
}