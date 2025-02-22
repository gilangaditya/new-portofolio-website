import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";


const Footer = ({isDarkMode}) => {

    return (
        <div id="contact" className="mt-20">
            <div className="text-center">
                <Image src={ isDarkMode ? assets.logo_dark : assets.logo} alt="footer" className="w-36 mx-auto mb-2"/>

                <div className="w-max flex items-center gap-4 mx-auto">
                    <Image src={ isDarkMode ? assets.mail_icon_dark :  assets.mail_icon} alt="web" className="w-6"/>
                    gilangaditya.purnamasidhi@gmail.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6">
                <p>© 2025 Gilang Aditya Purnama Sidhi. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target="_blank" href="https://github.com/gilangaditya">Github</a></li>
                    <li><a target="_blank" href="www.linkedin.com/in/gilang-aditya-purnama-sidhi">LinkedIn</a></li>
                    <li><a target="_blank" href="https://instagram.com/gilangadtyp_">Instagram</a></li>
                </ul>
            </div>

        </div>

    )
}

export default Footer;