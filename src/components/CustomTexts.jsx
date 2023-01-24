import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-poppins font-semibold sm:text-[45px] text-[30px] text-white sm:leading-[76.8px] leading-[60.8px] w-full ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.div
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`font-poppins font-semibold sm:text-[45px] text-[30px] text-white sm:leading-[76.8px] leading-[60.8px] w-full ${textStyles}`}
  >
    {title}
  </motion.div>
);
