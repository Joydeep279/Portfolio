import rectangle from "../assets/img/Rectangle 1.svg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Heading = () => {
  return (
    <motion.div
      className="absolute inset-0 mx-auto mt-6 sm:mt-8 md:mt-10 w-4/5 sm:w-3/4 md:w-1/2 text-[#CEB7FF] font-death-star flex flex-col items-center text-nowrap gap-4 sm:gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col">
        <motion.div className="flex" variants={lineVariants}>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
          <span className="font-medium text-xs sm:text-sm w-/5">
            a message from earth{" "}
          </span>
        </motion.div>
        <motion.h1
          className="font-outline text-lg sm:text-2xl md:text-[42px] text-glow font-black"
          variants={itemVariants}
        >
          hello fellow galaxy member
        </motion.h1>
        <motion.div className="flex" variants={lineVariants}>
          <span className="font-medium text-xs sm:text-sm">a message from earth </span>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="react" />
        </motion.div>
      </div>
      <motion.h1
        className="font-outline text-lg sm:text-2xl md:text-[42px] text-glow"
        variants={itemVariants}
      >
        i am joydeep
      </motion.h1>
    </motion.div>
  );
};

export default Heading;
