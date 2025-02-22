import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { useState } from "react";


const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6a019548-bdae-4e12-ac68-fbe56e8342da");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


    return (

        <div id="contacts"  className='w-full px-[12%] py-10 scoll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-cover bg-center bg-[length:90%_auto] dark:bg-none'>
            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'd love to hear from you! If you have any questions, comments or 
                feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className=" max-w-2xl mx-auto">
                <div className="grid grid-cols-auto mt-10 mb-8 gap-6">
                    <input type="text" placeholder="Enter Your Name" required className="flex-1 p-3 caret-pink-500 outline-none border-[0.5px] border-gray-4 rounded-md bg-white dark:bg-darkHover/30 darl:border-white/90 " name="name"/>
                    <input type="email" placeholder="Enter Your Email" required className="flex-1 caret-pink-500 p-3 outline-none border-[0.5px] border-gray-4 rounded-md bg-white dark:bg-darkHover/30 darl:border-white/90" name="email"/>
                </div>
                <textarea className="w-full p-4 caret-pink-500 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 darl:border-white/90" rows={6} required placeholder="Enter Your Message" name="message">
                </textarea>

                <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-tranparent dark:border-[0.5px] dark:hover:bg-darkHover">Submit Now <Image src={assets.right_arrow_white} alt="send" className="w-4" /></button>

                <p className="mt-4">{result}</p>
            </form>

        </div>

    )
}

export default Contact;