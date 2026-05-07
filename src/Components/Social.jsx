import github from "../assets/img/github.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";
import leetCode from "../assets/img/leetCodeIcon.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.5 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Social = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-2 sm:left-4 md:left-10 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5 z-[100]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.a
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        href="https://github.com/Joydeep279"
        target="blank"
        variants={iconVariants}
        whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.8))" }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={github} />
      </motion.a>
      <motion.a
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
        href="https://leetcode.com/u/joydeep279/"
        target="blank"
        variants={iconVariants}
        whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.8))" }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={leetCode} />
      </motion.a>
      <motion.a
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        href=""
        variants={iconVariants}
        whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.8))" }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={instagram} />
      </motion.a>
      <motion.a
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        href="https://www.linkedin.com/in/joydeep-nath007"
        target="blank"
        variants={iconVariants}
        whileHover={{ scale: 1.3, filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.8))" }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={linkedin} />
      </motion.a>

    </motion.div>
  );
};

export default Social;
