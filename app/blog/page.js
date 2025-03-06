'use client';
import { useState } from "react";
import { useEffect } from "react";
import BlogComponent from "../components/blog/BlogComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {

     const [isDarkMode, setIsDarkMode] = useState(false);
    
      useEffect(() => {
        // Cek apakah tema di localStorage adalah "dark" atau preferensi media query adalah dark
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
          setIsDarkMode(true);
        } else {
          setIsDarkMode(false);
        }
      }, []);  // Hanya eksekusi sekali saat pertama kali render
    
      useEffect(() => {
        // Set dark mode ke body saat isDarkMode berubah
        if (isDarkMode) {
          document.documentElement.classList.add("dark");
          localStorage.theme = "dark";
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "";
        }
      }, [isDarkMode]);

    return (
        <>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <BlogComponent isDarkMode={isDarkMode}/>
            <Footer isDarkMode={isDarkMode}/>
        </>
    )
}