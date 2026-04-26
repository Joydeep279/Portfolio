import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="fixed right-4 top-4 sm:right-6 sm:top-6 md:right-10 md:top-10 text-glow text-[#d0b4f5] font-Bebas font-semibold text-lg sm:text-2xl md:text-3xl z-[100] cursor-pointer"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 40px rgba(206, 183, 255, 0.9)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        animate={{
          textShadow: [
            "0px 0px 15px rgba(206, 183, 255, 0.4)",
            "0px 0px 35px rgba(206, 183, 255, 0.8)",
            "0px 0px 15px rgba(206, 183, 255, 0.4)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Contact Me
      </motion.span>
    </motion.div>
  );
};

export default Contact;
