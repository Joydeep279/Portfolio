import skillBackground from "../assets/img/skillBackground.png";
import SkillContainerGlobe from "./SkillContainerGlobe";
import rectangle from "../assets/img/Rectangle 1.svg";
import Social from "./Social";
import SkillsList from "./SkillsList";
import { motion } from "framer-motion";

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const titleItemVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const SkillContainer = () => {
  return (
    <div
      className="w-screen h-screen relative bg-black p-0 m-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${skillBackground})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <motion.div
        className="absolute inset-0 mx-auto mt-6 sm:mt-8 md:mt-10 w-4/5 sm:w-3/4 md:w-1/2 text-[#CEB7FF] font-death-star flex flex-col items-center text-nowrap gap-4 sm:gap-6 md:gap-8"
        variants={titleContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-center">
          <motion.div variants={titleItemVariants}>
            <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
          </motion.div>
          <motion.h1
            className="font-outline text-lg sm:text-2xl md:text-[42px] text-glow font-black"
            variants={titleItemVariants}
          >
            My SKILLS
          </motion.h1>
          <motion.div variants={titleItemVariants}>
            <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
          </motion.div>
        </div>
        <motion.span
          className="text-lg sm:text-xl md:text-3xl text-[#d0b4f5] font-bebas-neue text-glow "
          variants={titleItemVariants}
        >
          Here is a list of some of my skills{" "}
        </motion.span>
      </motion.div>
      <SkillContainerGlobe />
      {/* <Social /> */}
      <SkillsList />
    </div>
  );
};

export default SkillContainer;
