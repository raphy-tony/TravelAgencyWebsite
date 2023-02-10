import Image from 'next/image'
import styles from "../style";
import { motion } from 'framer-motion';

import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { laptop, airplane } from "../assets";

const Hero = () => {
  return (
    <motion.section id="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex md:flex-row flex-col ${styles.paddingY} h-screen`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <motion.div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <Image src={airplane} alt="airplane" className="sm:w-[42px] sm:h-[42px] w-[32px] h-[32px]" />
            <div className={`${styles.paragraph} ml-2`}>
              <span className="text-white">Best</span> Travel consultation Services from the most trusted Agency{" "}
            </div>
          </motion.div>

          <motion.div className="flex flex-row justify-between items-center w-full">
            <motion.h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[100.8px] leading-[65px]">
              Travel <br className="sm:block hidden" />{" "}
              <motion.span 
                variants={zoomIn(0.3, 1)}
                className="text-gradient">
                  Consultants
              </motion.span>
              <br className="sm:block hidden" />{" "}
              <span className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">and</span>{" "}
            </motion.h1>
          </motion.div>

          <motion.h1 className="font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] w-full tracking-wider">
            IT Products <br className="sm:block hidden" /> Supplier.
          </motion.h1>
          
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className={`flex-1 flex ${styles.flexCenter}  md:my-0 my-10 relative`}
        >
          <Image src={laptop} alt="laptop" className="h:[180px] w:[160px] relative px-[2px] z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </motion.div>   
    </motion.section>
  );
};

export default Hero;
