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
      className="absolute top-28 sm:top-32 md:top-36 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-auto text-[#CEB7FF] font-death-star flex flex-col items-center text-center sm:text-nowrap gap-3 sm:gap-6 md:gap-8 z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-1 sm:gap-2">
        <motion.div className="flex items-center justify-center gap-2" variants={lineVariants}>
          <img src={rectangle} className="w-12 sm:w-16 md:w-20 h-1.5 sm:h-2 md:h-3" alt="react" />
          <span className="font-medium text-[0.55rem] sm:text-sm whitespace-nowrap">
            a message from earth{" "}
          </span>
        </motion.div>
        <motion.h1
          className="font-outline text-lg sm:text-2xl md:text-[42px] text-glow font-black"
          variants={itemVariants}
        >
          hello fellow galaxy member
        </motion.h1>
        <motion.div className="flex items-center justify-center gap-2" variants={lineVariants}>
          <span className="font-medium text-[0.55rem] sm:text-sm whitespace-nowrap">a message from earth </span>
          <img src={rectangle} className="w-12 sm:w-16 md:w-20 h-1.5 sm:h-2 md:h-3" alt="react" />
        </motion.div>
      </div>
      <motion.h1
        className="font-outline text-xl sm:text-3xl md:text-[42px] text-glow"
        variants={itemVariants}
      >
        i am joydeep
      </motion.h1>
    </motion.div>
  );
};

export default Heading;
