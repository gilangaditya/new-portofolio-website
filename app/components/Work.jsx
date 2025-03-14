import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { useState } from "react";


const Work = ({isDarkMode}) => {

    const initialProjects = 4; // Awalnya tampilkan 6 proyek
    const [visibleProjects, setVisibleProjects] = useState(initialProjects);

    const handleShowMore = () => {
        setVisibleProjects(workData.length); // Tampilkan semua proyek
    };

    const handleShowLess = () => {
        setVisibleProjects(initialProjects); // Kembali ke jumlah awal
    };


    return (

        <div id="work" className="w-full px-[12%] py-10 scoll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            Welcome to my web development portfolio! Explore a collection of projects showcasing
            my expertise in Software Engineer.
            </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 dark:text-black">
        {workData.slice(0, visibleProjects).map((project, index) => (
                <div key={index}
                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                style={{ backgroundImage: `url(${project.bgImage})` }}>
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 items-center flex justify-between duration-500 group-hover:bottom-7">
                        <div>
                            <h2 className="font-semibold">{project.title}</h2>
                            <p className="text-sm text-gray-700">{project.description}</p>
                        </div>
                        <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ">
                           <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Image src={assets.send_icon} alt="send icon" className="w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {visibleProjects < workData.length ? (
                <button onClick={handleShowMore} className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 mx-auto hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:bg-darkHover/50 dark:text-white">
                    Show More <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt="right arrow" className="w-4" />
                </button>
            ) : (
                <button onClick={handleShowLess} className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 mx-auto hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:bg-darkHover/50 dark:text-white">
                     <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt="right arrow" className="w-4 rotate-180" />Show Less
                </button>
            )}
        </div>
    )
}

export default Work;