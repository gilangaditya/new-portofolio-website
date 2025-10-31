// app/404/page.jsx atau pages/404.jsx (tergantung struktur Next.js Anda)
import Link from "next/link";
import { assets } from "@/assets/assets";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-black">
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Number */}
                <h1 className="text-[150px] md:text-[200px] font-bold text-gray-200 dark:text-gray-800 leading-none">
                    404
                </h1>
                
                {/* Message */}
                <h2 className="text-3xl md:text-5xl font-Ovo mb-4 -mt-10 text-gray-800 dark:text-white">
                    Project Link Not Found
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 font-Ovo mb-8 text-lg">
                    Oops! The project link you're looking for is currently unavailable or doesn't exist.
                    This project might still be in development or under maintenance.
                </p>
                
                {/* Back Button */}
                <Link 
                    href="/#work"
                    className="inline-flex items-center gap-2 text-gray-700 dark:text-white border-[0.5px] border-gray-700 dark:border-white rounded-full py-3 px-10 hover:bg-lightHover dark:hover:bg-darkHover/50 hover:-translate-y-1 duration-500 transition-all"
                >
                    <Image 
                        src={assets.right_arrow_bold} 
                        alt="back arrow" 
                        className="w-4 rotate-180 dark:invert" 
                    />
                    Back to Portfolio
                </Link>
                
                {/* Optional: Home Button */}
                <div className="mt-4">
                    <Link 
                        href="/"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline font-Ovo"
                    >
                        Or go back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}