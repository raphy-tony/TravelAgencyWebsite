import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-20`}>
    <h2 className={`font-poppins font-semibold  xs:text-[48px] text-[30px] sm:text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full flex justify-center mx-6`}>Testimonials</h2>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40" />
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
