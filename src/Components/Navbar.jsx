import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Navbar = ({ sections, currentIndex, onNavigate }) => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[200] grid grid-cols-2 md:grid-cols-3 items-center py-3 md:py-4 px-4 sm:px-6 md:px-10 gap-y-3 md:gap-y-0"
      style={{
        backdropFilter: "blur(12px) saturate(160%)",
        backgroundColor: "rgba(10, 5, 30, 0.45)",
        borderBottom: "1px solid rgba(206, 183, 255, 0.08)",
      }}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.a
        className="justify-self-start font-death-star text-[#CEB7FF] text-lg sm:text-xl md:text-2xl cursor-pointer font-outline text-glow select-none"
        variants={itemVariants}
        onClick={() => onNavigate(0)}
        whileHover={{
          textShadow: "0px 0px 30px rgba(206, 183, 255, 0.9)",
          transition: { duration: 0.3 },
        }}
      >
        JOYDEEP
      </motion.a>

      {/* Nav Links */}
      <div className="col-span-2 md:col-span-1 md:col-start-2 row-start-2 md:row-start-1 flex items-center justify-center gap-2 sm:gap-4 md:gap-8 w-full overflow-x-auto no-scrollbar pb-1 md:pb-0">
        {sections.map((item, index) => (
          <motion.button
            key={item.id}
            className="relative px-2 sm:px-4 py-1.5 sm:py-2 font-bebas-neue text-sm sm:text-lg md:text-xl tracking-wider cursor-pointer border-none bg-transparent outline-none whitespace-nowrap"
            style={{
              color:
                currentIndex === index
                  ? "#CEB7FF"
                  : "rgba(208, 180, 245, 0.5)",
            }}
            variants={itemVariants}
            onClick={() => onNavigate(index)}
            whileHover={{
              color: "#CEB7FF",
              textShadow: "0px 0px 20px rgba(206, 183, 255, 0.7)",
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.92 }}
          >
            {item.label}

            {currentIndex === index && (
              <motion.div
                className="absolute bottom-0 left-1/2 h-[2px] bg-[#CEB7FF] rounded-full"
                layoutId="activeIndicator"
                style={{ translateX: "-50%" }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "70%", opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.button
        className="justify-self-end col-start-2 row-start-1 md:col-start-3 md:row-start-1 px-4 py-1.5 sm:px-5 sm:py-2 font-bebas-neue text-sm sm:text-base md:text-lg tracking-wider rounded-full cursor-pointer border-none outline-none whitespace-nowrap"
        style={{
          background:
            "linear-gradient(135deg, rgba(206, 183, 255, 0.2), rgba(206, 183, 255, 0.05))",
          border: "1px solid rgba(206, 183, 255, 0.35)",
          color: "#d0b4f5",
          backdropFilter: "blur(8px)",
        }}
        variants={itemVariants}
        onClick={() => onNavigate(sections.length - 1)}
        whileHover={{
          background:
            "linear-gradient(135deg, rgba(206, 183, 255, 0.35), rgba(206, 183, 255, 0.15))",
          boxShadow: "0 0 25px rgba(206, 183, 255, 0.3)",
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{
            textShadow: [
              "0px 0px 10px rgba(206, 183, 255, 0.3)",
              "0px 0px 25px rgba(206, 183, 255, 0.7)",
              "0px 0px 10px rgba(206, 183, 255, 0.3)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Contact Me
        </motion.span>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
