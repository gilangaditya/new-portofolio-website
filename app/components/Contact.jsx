"use client";
import { assets } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("success");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.5, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: -20,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "b75909d4-270f-4f9e-9708-68e1629b39e6");

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
    <motion.div
      id="contacts"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-cover bg-center bg-[length:90%_auto] dark:bg-none'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo" variants={itemVariants}>
        Connect with me
      </motion.h4>
      <motion.h2 className="text-center text-5xl font-Ovo" variants={itemVariants}>
        Get in touch
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        variants={itemVariants}
      >
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto relative">
        <motion.div
          className="grid grid-cols-auto mt-10 mb-8 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.input
            type="text"
            placeholder="Enter Your Name"
            required
            className="flex-1 p-3 caret-pink-500 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
            variants={inputVariants}
            whileFocus={{ scale: 1.05, boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.1)" }}
            transition={{ duration: 0.3 }}
          />
          <motion.input
            type="email"
            placeholder="Enter Your Email"
            required
            className="flex-1 p-3 caret-pink-500 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
            variants={inputVariants}
            whileFocus={{ scale: 1.05, boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.1)" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.textarea
          className="w-full p-4 caret-pink-500 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          rows={6}
          required
          placeholder="Enter Your Message"
          name="message"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.1)" }}
          transition={{ duration: 0.3 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="send" className="w-4" />
        </motion.button>
      </form>

      {/* Popup Alert */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`p-8 rounded-2xl shadow-lg text-center w-[90%] max-w-sm ${
              popupType === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3 className="text-2xl font-semibold mb-2 font-Ovo">
              {popupType === "success" ? "Success!" : "Error"}
            </h3>
            <p className="mb-6">{result}</p>
            <motion.button
              onClick={() => setShowPopup(false)}
              className={`px-6 py-2 rounded-full font-semibold ${
                popupType === "success"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-red-600 text-white hover:bg-red-700"
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              OK
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Contact;
