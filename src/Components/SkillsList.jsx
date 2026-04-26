import { skillSet } from "../utils/contants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const SkillsList = () => {
  return (
    <motion.div
      className="absolute top-2/3 left-[15%] sm:left-[20%] md:left-[30%] -translate-y-1/2 z-50 w-[70%] sm:w-[60%] md:w-[45%] flex flex-row-reverse flex-wrap justify-end gap-2 sm:gap-3 md:gap-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skillSet.map((skill, index) => (
        <motion.span
          className="backdrop-brightness-75 pt-1.5 sm:pt-2 md:pt-2.5 font-mono text-white text-xs sm:text-lg md:text-2xl font-thin border-2 border-[#CEB7FF] text-center w-20 h-10 sm:w-28 sm:h-12 md:w-36 md:h-14 cursor-pointer"
          key={index}
          variants={skillVariants}
          whileHover={{
            scale: 1.12,
            borderColor: "#ffffff",
            boxShadow: "0 0 25px rgba(206, 183, 255, 0.6), inset 0 0 15px rgba(206, 183, 255, 0.15)",
            backdropFilter: "brightness(1.25)",
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SkillsList;