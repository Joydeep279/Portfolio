import { motion, AnimatePresence } from "framer-motion";

/* ── animation variants ── */
const containerVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.12,
      delayChildren: 1.4,
    },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const sectionLabelVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const SideNav = ({ sections, currentIndex, onNavigate }) => {
  return (
    <>
      {/* ── Logo (top-left) ── */}
      <motion.a
        className="fixed top-6 left-6 sm:left-8 md:left-10 z-[200] font-death-star text-[#CEB7FF] text-lg sm:text-xl md:text-2xl cursor-pointer font-outline text-glow select-none"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        onClick={() => onNavigate(0)}
        whileHover={{
          textShadow: "0px 0px 30px rgba(206, 183, 255, 0.9)",
          transition: { duration: 0.3 },
        }}
      >
        JOYDEEP
      </motion.a>

      {/* ── Dot navigation (right side) ── */}
      <motion.div
        className="fixed right-6 sm:right-8 md:right-10 top-1/2 -translate-y-1/2 z-[150] flex flex-col items-center gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sections.map((section, index) => {
          const isActive = index === currentIndex;
          return (
            <motion.button
              key={section.id}
              className="group relative flex items-center cursor-pointer bg-transparent border-none outline-none p-1"
              variants={dotVariants}
              onClick={() => onNavigate(index)}
              whileTap={{ scale: 0.85 }}
              aria-label={`Go to ${section.label}`}
            >
              {/* Label tooltip */}
              <motion.span
                className="absolute right-8 whitespace-nowrap font-bebas-neue text-sm tracking-wider pointer-events-none"
                initial={{ opacity: 0, x: 8 }}
                whileHover={{ opacity: 1, x: 0 }}
                style={{ color: "rgba(206, 183, 255, 0.85)" }}
                animate={
                  isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }
                }
                transition={{ duration: 0.25 }}
              >
                {section.label}
              </motion.span>

              {/* Dot */}
              <div className="relative flex items-center justify-center">
                {/* Outer ring for active */}
                {isActive && (
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: 22,
                      height: 22,
                      border: "1.5px solid rgba(206, 183, 255, 0.5)",
                    }}
                    layoutId="sideNavRing"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                {/* Glow for active */}
                {isActive && (
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: 22,
                      height: 22,
                      boxShadow: "0 0 12px rgba(206, 183, 255, 0.5)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 8px rgba(206, 183, 255, 0.3)",
                        "0 0 18px rgba(206, 183, 255, 0.6)",
                        "0 0 8px rgba(206, 183, 255, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                {/* Inner dot */}
                <motion.div
                  className="rounded-full"
                  style={{
                    backgroundColor: isActive
                      ? "#CEB7FF"
                      : "rgba(206, 183, 255, 0.3)",
                  }}
                  animate={{
                    width: isActive ? 10 : 6,
                    height: isActive ? 10 : 6,
                    backgroundColor: isActive
                      ? "#CEB7FF"
                      : "rgba(206, 183, 255, 0.3)",
                  }}
                  whileHover={{
                    backgroundColor: "#CEB7FF",
                    width: 10,
                    height: 10,
                  }}
                  transition={{ duration: 0.25 }}
                />
              </div>
            </motion.button>
          );
        })}

        {/* Connecting line between dots */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 -z-10"
          style={{
            width: 1,
            height: "calc(100% - 24px)",
            background:
              "linear-gradient(to bottom, transparent, rgba(206, 183, 255, 0.15), transparent)",
          }}
        />
      </motion.div>

      {/* ── Current section label (bottom-right) ── */}
      <div className="fixed bottom-6 right-6 sm:right-8 md:right-10 z-[150] flex items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.span
            key={sections[currentIndex].id}
            className="font-bebas-neue text-xs sm:text-sm tracking-[0.25em] uppercase"
            style={{ color: "rgba(206, 183, 255, 0.45)" }}
            variants={sectionLabelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {String(currentIndex + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")} — {sections[currentIndex].label}
          </motion.span>
        </AnimatePresence>
      </div>
    </>
  );
};

export default SideNav;
