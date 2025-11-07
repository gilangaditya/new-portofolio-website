import { Outfit, Ovo } from "next/font/google";
<<<<<<< HEAD
import Script from "next/script";
=======
>>>>>>> 250738183746d8bde3bbeee5658796546cc41ed1
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "700", "500", "600"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Gilang Aditya Purnama Sidhi",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 over-flow-x-hidden dark:bg-darkTheme dark:text-white` }
      >
        {children}
        <Analytics />
<<<<<<< HEAD
        {/* ✅ hCaptcha di-load di client */}
        <Script
          src="https://hcaptcha.com/1/api.js"
          strategy="afterInteractive"
          async
          defer
        />
=======
>>>>>>> 250738183746d8bde3bbeee5658796546cc41ed1
      </body>
    </html>
  );
}
