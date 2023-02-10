import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

import { features } from "../constants";
import styles, { layout } from "../style";
import { client } from '../../lib/client';



const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <Image src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>      
  </div>
);

const AboutUs = ({ testimonials }) =>  (

  <section id="about-us" className={layout.section}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={layout.sectionInfo}
    >
     
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
      >
      <h2 className={styles.heading2}>
        About Us
      </h2>
      <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {/* {testimonials.map((testimonial) =>(testimonial.title))} */}
      </div>
      </motion.div>

    </motion.div>
    
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    

  </section>
);

export default AboutUs;
