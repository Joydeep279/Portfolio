import workExpBg from "../assets/img/workExpBG.png";
import rectangle from "../assets/img/Rectangle 1.svg";
import { motion } from "framer-motion";

import WorkExpGlobe from "./WorkExpGlobe";

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};


/* Pulsing glow animation for decorative rectangles */
const rectGlowVars = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    filter: [
      "drop-shadow(0 0 4px rgba(206, 183, 255, 0.3))",
      "drop-shadow(0 0 12px rgba(206, 183, 255, 0.6))",
      "drop-shadow(0 0 4px rgba(206, 183, 255, 0.3))",
    ],
    transition: {
      opacity: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
      scaleX: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
      filter: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

const WorkExperience = () => {
  return (
    <div
      className="w-screen h-screen relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3)), url(${workExpBg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="flex flex-col items-center pt-16 sm:pt-20 relative z-10 h-full w-full"
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Top decorative rectangle with glow pulse */}
        <motion.div variants={rectGlowVars}>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="rect" />
        </motion.div>

        {/* Title with enhanced glow */}
        <motion.h1 className="font-outline font-out text-xl sm:text-2xl md:text-[42px] font-black tracking-[0.1em] sm:tracking-[0.2em] text-center px-4">
          Work Experience
        </motion.h1>

        {/* Bottom decorative rectangle with glow pulse */}
        <motion.div variants={rectGlowVars}>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="rect" />
        </motion.div>

        <WorkExpGlobe />
      </motion.div>
    </div>
  );
};

export default WorkExperience;
