import ScrollImg from "../assets/img/scroll.svg";
import { motion } from "framer-motion";

const ScrollComponent = () => {
  return (
    <motion.div
      className="fixed right-10 bottom-10 text-white font-Bebas Neue font-semibold text-3xl z-[100]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
    >
      <motion.img
        src={ScrollImg}
        alt="ScrollImg"
        className="h-28 w-16"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default ScrollComponent;
