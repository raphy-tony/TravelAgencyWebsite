import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import Image from 'next/image'

import styles from "../style";
import {socialMedia } from "../constants";


const Footer = () => (
  <motion.section
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 Joytech. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </motion.section>
);

export default Footer;
