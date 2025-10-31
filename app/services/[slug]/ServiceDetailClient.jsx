// app/services/[slug]/ServiceDetailClient.jsx
"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    
    return (
        <div className="w-full px-[12%] py-10 min-h-screen">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-sm">
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Home
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/#services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Services
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-900 dark:text-white">{service.title}</span>
            </div>
            
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-4xl">
                        {slug === 'web-developer' && '🌐'}
                        {slug === 'mobile-app' && '📱'}
                        {slug === 'ui-ux-design' && '🎨'}
                        {slug === 'graphics-design' && '🖼️'}
                    </div>
                </div>
                <h1 className="text-5xl md:text-6xl font-Ovo mb-6">{service.title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.fullDescription}
                </p>
            </div>
            
            {/* Key Services */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-Ovo mb-8 text-center">What I Offer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {service.keyServices.map((item, index) => (
                        <div 
                            key={index}
                            className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
                        >
                            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Technologies */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-Ovo mb-8 text-center">Technologies & Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {service.technologies.map((tech, index) => (
                        <span 
                            key={index}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Benefits */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-Ovo mb-8 text-center">Why Choose This Service</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="flex items-start gap-3 p-4 rounded-lg hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
                        >
                            <div className="text-green-500 text-xl mt-1">✓</div>
                            <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Process */}
            <div className="max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl font-Ovo mb-8 text-center">My Process</h2>
                <div className="space-y-6">
                    {service.process.map((item, index) => (
                        <div 
                            key={index}
                            className="flex gap-6 items-start"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                {index + 1}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                                    {item.step}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* CTA */}
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-white">
                <h2 className="text-3xl font-Ovo mb-4">Ready to Start Your Project?</h2>
                <p className="text-lg mb-8 opacity-90">
                    Let's discuss how I can help bring your ideas to life
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                        href="/#contact"
                        className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Get In Touch
                    </Link>
                    <Link 
                        href="/#work"
                        className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                    >
                        View Portfolio
                    </Link>
                </div>
            </div>
            
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