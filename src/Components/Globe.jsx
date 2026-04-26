import globe from "../assets/img/globe.png";
import astronaut from "../assets/img/astronaut.svg";
import BoxClose from "../assets/img/BoxClose.svg";
import BoxOpen from "../assets/img/BoxOpen.svg";
import { useState } from "react";
import { aboutMsg } from "../utils/contants";
import { motion, AnimatePresence } from "framer-motion";

const Globe = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  function toggleBox() {
    setIsBoxOpen(!isBoxOpen);
  }
  return (
    <div className="absolute bottom-0 left-[49%] -translate-x-1/2 w-[90vw] flex justify-center items-end">
      {/* Floating astronaut */}
      <motion.img
        src={astronaut}
        className="absolute bottom-11/12 z-50 h-16 sm:h-20 md:h-24"
        alt="astronaut"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        animate={{
          y: [0, -12, 0],
          rotate: [0, 3, -3, 0],
        }}
        style={{ animationDelay: "0.5s" }}
        whileHover={{ scale: 1.15 }}
      />

      <AnimatePresence mode="wait">
        {!isBoxOpen ? (
          <motion.img
            key="closed"
            src={BoxClose}
            className="absolute bottom-12 sm:bottom-16 md:bottom-20 z-50 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 left-[45%] cursor-pointer"
            onClick={() => toggleBox()}
            alt="BoxClose"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{
              scale: 1.1,
              filter: "drop-shadow(0 0 20px rgba(206, 183, 255, 0.6))",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          />
        ) : (
          <motion.div
            key="opened"
            className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-2/6 z-50 w-[45%] sm:w-[40%] md:w-[35%]"
            initial={{ opacity: 0, scale: 0.6, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img
              src={BoxOpen}
              alt="BoxOpen"
              className="w-full cursor-pointer"
              onClick={() => toggleBox()}
            />
            <motion.span
              className="p-3 sm:p-4 md:p-5 absolute inset-0 flex items-start justify-center text-white font-mono text-sm sm:text-base md:text-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {aboutMsg}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Globe with slow rise + subtle floating */}
      <motion.img
        src={globe}
        alt="globe"
        className="relative w-5/6 sm:w-4/5 md:w-4/6 h-full"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
};

export default Globe;
