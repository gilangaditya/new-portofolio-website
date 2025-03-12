import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = ()=> {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image src={assets.user_image} alt="" className="rounded-full w-32" />
            </div>
                <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">Hi! I'm Gilang Aditya Purnama Sidhi <Image src={assets.hand_icon} alt="" className="w-6"/></h3>
                <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Software Engineer based in Depok</h1>
                <p className="max-w-2xl mx-auto font-Ovo">I am an experienced Software Engineer with over a decade of professional expertise. Throughout my career, I have collaborated with prestigious organizations, contributing to their success and growth. I am passionate about technology and continuously seek to learn new skills to stay updated with industry trends. In my free time, I enjoy working on creative projects and experimenting with innovative ideas. 😄 </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a href="#contact" className="px-10 py-3 border border-white rounded-full border-gray-500 flex items-center gap-2 text-white bg-black dark:bg-transparent">Contact Me <Image src={assets.right_arrow_white} alt="" className="w-4" /></a>

                    <a href="" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black">My Resume <Image src={assets.download_icon} alt="" className="w-4" /></a>
                </div>
        </div>
    )
}

export default Header;