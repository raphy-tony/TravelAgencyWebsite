import {passport} from "../assets";
import styles, { layout } from "../style";
import Image from 'next/image'

import { motion } from 'framer-motion';
import { TitleText} from '../components';

import { fadeIn, staggerContainer,planetVariants } from '../utils/motion';

const Visa = () => (
  <motion.section id="visa"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={layout.sectionReverse}
    >
      <motion.div
        variants={planetVariants('left')}
        className={layout.sectionImgReverse}>
        <Image src={passport} alt="Visa" className="w-[100%] h-[76%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </motion.div>

      <motion.div className={layout.sectionInfo}>
      <TitleText
        title={(
        <h2>
          Want to Travel but Afraid of the paperwork?
        </h2>
        )}
        textStyles=" "
      />     
        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We offer you a hassle-free visa application assistance and other passport services. From application procedures to legalization of your documents, we have got everything under control. With us, you can rest assured that you are in absolutely safe hands. We assist visa application to China, USA, United Kingdom, India, Dubai, Vietnam, Schengen countries and Most African countries
        </motion.p>
      </motion.div>
  </motion.section>
);

export default Visa;
Visa