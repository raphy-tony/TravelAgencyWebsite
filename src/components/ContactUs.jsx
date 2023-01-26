import Image from 'next/image'
import styles from "../style";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { WhatsAppButtonGreenLarge } from "../assets";


import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const ContactUs = () =>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u2o0v2t",
        "template_yyarorn",
        form.current,
        "n1dTgPhZ8RR6SYM98"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      event.target.reset()
  };


return(
  <section id="contact" className={`${styles.marginY} ${styles.padding} bg-gray-gradient rounded-[20px] box-shadow`}>
    <div className="flex flex-col md:flex-row justify-between md:space-y-0 space-y-10">
      <div className="flex flex-col space-y-8 justify-between">
        <div>
          <h2 className={`font-bold font-poppins text-4xl tracking-normal text-white mt-4`}>
            Get in Touch
          </h2>
          <p className={`${styles.paragraph} mt-4 leading-6 tracking-wider text-dimWhite`}>
            Try out the Best Travel consultation Services from the most trusted Agency.
          </p>
        </div>

      
        <div className=" cursor-pointer space-y-4 md:space-y-6  font-poppins text-white">
          <div className="flex space-x-4 items-center">
            <IoMdCall className=" text-[25px]"/>
            <a href="tel:0759663648">+254 720 352 149</a>
          </div>
          
          <div className="flex space-x-4 items-center">
            <MdMail className=" text-[25px]"/>
            <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcSKkVPxxskjRnKHLCLFZMQgZVkDJsflCSVtBwhmlgZcVjBkljKQNcfQftxRGVbLqjDGsXcQg" className="text-md md:text-lg">raphtech@gmail.com</a>
          </div>

          <div className="flex space-x-4 items-center">
            <MdLocationOn className=" text-[25px] text-blue-gradient"/>
            <span>Rd. Katani, Syokimau</span>
          </div>
        </div>

        <a aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer" href="https://wa.me/720352149">
          <Image alt="Chat on WhatsApp" src={WhatsAppButtonGreenLarge} />
        </a>  

        <div className="flex space-x-4 text-lg text-secondary">
          <a href="https://www.instagram.com">
            <FiInstagram/>
          </a>

          <a href="https://www.instagram.com">
            <FaFacebook/>
          </a>

          <a href="https://www.instagram.com">
            <BsTwitter/>
          </a>
        </div>
      </div>
      

      
    <div className="font-poppins">
      <h1 className="items-center justify-center text-lg flex text-white p-3">
       Send an Email
      </h1>
      <div className="bg-white shadow-lg p-8 rounded-xl">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div>
            <label  className="text-sm">Your Name</label>
            <input type="text" name="name" placeholder="Your Name" className="ring-1 mt-2 ring-gray-300 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal-300" />
          </div>

          <div>
            <label className="text-sm">Your Email</label>
            <input type="email" name="email" placeholder="Email Address" className="ring-1 mt-2 ring-gray-300 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal-300" />
          </div>

          <div>
            <label className="text-sm">Your Message</label>
            <textarea type="message" name="message" placeholder="Your Message" rows={5} className="ring-1 mt-2 ring-gray-300 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-teal-300" />
          </div>
          
          <button type="submit" className={`py-2 px-6 self-end font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
            send Message
          </button>
        </form>
      </div>
    </div>
    
    </div>
    
  </section>
);

};


export default ContactUs;
