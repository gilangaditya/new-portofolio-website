import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Footer = ({ isDarkMode }) => {
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

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      id="contact"
      className="mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center" variants={itemVariants}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="footer"
            className="w-36 mx-auto mb-2"
          />
        </motion.div>

        <motion.div
          className="w-max flex items-center gap-4 mx-auto"
          variants={itemVariants}
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="web"
            className="w-6"
          />
          <span>gilangaditya.purnamasidhi@gmail.com</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={itemVariants}>
          © 2025 Gilang Aditya Purnama Sidhi. All rights reserved.
        </motion.p>
        <motion.ul
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.li variants={linkVariants}>
            <motion.a
              target="_blank"
              href="https://github.com/gilangaditya"
              whileHover={{ y: -3, color: "#ec4853" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Github
            </motion.a>
          </motion.li>
          <motion.li variants={linkVariants}>
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/gilang-aditya-purnama-sidhi"
              whileHover={{ y: -3, color: "#ec4853" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              LinkedIn
            </motion.a>
          </motion.li>
          <motion.li variants={linkVariants}>
            <motion.a
              target="_blank"
              href="https://instagram.com/gilangadtyp_"
              whileHover={{ y: -3, color: "#ec4853" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Instagram
            </motion.a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;