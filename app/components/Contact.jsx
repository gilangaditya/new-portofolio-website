"use client";
import { assets } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("success");
  const [hcaptchaToken, setHcaptchaToken] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "b75909d4-270f-4f9e-9708-68e1629b39e6");
    formData.append("h-captcha-response", hcaptchaToken);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setPopupType("success");
      setResult("Form Submitted Successfully");
      setShowPopup(true);
      event.target.reset();
    } else {
      setPopupType("error");
      setResult(data.message);
      setShowPopup(true);
    }
  };

  return (
    <div
      id="contacts"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-cover bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto relative">
        <div className="grid grid-cols-auto mt-10 mb-8 gap-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            className="flex-1 p-3 caret-pink-500 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            className="flex-1 p-3 caret-pink-500 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </div>

        <textarea
          className="w-full p-4 caret-pink-500 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          rows={6}
          required
          placeholder="Enter Your Message"
          name="message"
        ></textarea>

        {/* hCaptcha element */}
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
          onVerify={(token) => setHcaptchaToken(token)}
        />


        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="send" className="w-4" />
        </button>
      </form>

      {/* Popup Alert */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div
            className={`p-8 rounded-2xl shadow-lg text-center w-[90%] max-w-sm ${
              popupType === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            } animate-fadeIn`}
          >
            <h3 className="text-2xl font-semibold mb-2 font-Ovo">
              {popupType === "success" ? "Success!" : "Error"}
            </h3>
            <p className="mb-6">{result}</p>
            <button
              onClick={() => setShowPopup(false)}
              className={`px-6 py-2 rounded-full font-semibold ${
                popupType === "success"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-red-600 text-white hover:bg-red-700"
              } transition-all duration-300`}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
