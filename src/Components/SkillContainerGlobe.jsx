import globe from "../assets/img/globe.png";
import astronaut from "../assets/img/skillastronaut.svg";
import { motion } from "framer-motion";

const SkillContainerGlobe = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40%] sm:h-[50%] md:h-[60%] flex justify-center items-end pointer-events-none">
      {/* Floating astronaut with gentle drift */}
      <motion.img
        src={astronaut}
        className="absolute bottom-[80%] sm:bottom-[75%] md:bottom-[70%] z-50 h-16 sm:h-20 md:h-24 pointer-events-auto"
        alt="astronaut"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, -2, 2, 0],
        }}
      />

      {/* Globe rising from bottom */}
      <motion.img
        src={globe}
        alt="globe"
        className="relative w-full sm:w-[95%] md:w-[85%] h-full object-contain object-bottom pointer-events-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
};

export default SkillContainerGlobe;
