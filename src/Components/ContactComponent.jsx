import ContactBackground from "../assets/img/ContactBackground.png";
import rectangle from "../assets/img/Rectangle 1.svg";
import EmailComponent from "./EmailComponent";
import { motion } from "framer-motion";

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ContactComponent = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${ContactBackground})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <motion.div
        className="flex flex-col items-center pt-20"
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVars}>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="rect" />
        </motion.div>
        <motion.h1
          className="font-outline font-out text-lg sm:text-2xl md:text-[42px] text-glow font-black"
          variants={itemVars}
        >
          CONTACT ME
        </motion.h1>
        <motion.div variants={itemVars}>
          <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="rect" />
        </motion.div>
        <EmailComponent />
      </motion.div>
    </div>
  );
};
export default ContactComponent;
