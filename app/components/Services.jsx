import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = ({isDarkMode}) => {
    return (
        <div id="services" className="w-full px-[12%] py-10 scoll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My Services</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am a Fullstack developer from Depok, Indoneisa with 1 years of experience. in multiple companies I have a strong foundation in web development and have a passion for learning new technologies and building new projects. I am always looking for new opportunities to grow and expand my knowledge.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10 ">
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index} 
                    className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white">
                       <Image src={icon} alt="image" className="w-10" />
                          <h3 className="my-4 text-lg text-gray-700 dark:text-white">{title}</h3>
                          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                            {description}
                          </p>
                          <a href={link} className="flex items-center gap-2 mt-5 text-sm">
                            Read More <Image src={ isDarkMode ? assets.right_arrow_white : assets.right_arrow} className="w-4" alt="link" />
                          </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;