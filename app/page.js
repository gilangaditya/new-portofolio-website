'use client'
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { useState } from "react";
import Experience from "./components/Experience";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
        // Logika Inisialisasi:
        const storedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        // Atur state berdasarkan: (1) storedTheme 'dark' ATAU (2) tidak ada storedTheme DAN sistemnya dark
        if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
            setIsDarkMode(true);
        } else {
            // Ini akan mencakup storedTheme === "light" atau tidak ada storedTheme dan sistemnya light
            setIsDarkMode(false);
        }
    }, []); 

    useEffect(() => {
        // Logika Perubahan (Toggle):
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            // ✅ PERBAIKAN: Menyimpan secara eksplisit
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            // ✅ PERBAIKAN: Menyimpan secara eksplisit
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode}/>
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
