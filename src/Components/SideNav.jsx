import { motion, AnimatePresence } from "framer-motion";

/* ── animation variants ── */
const railVariants = {
  hidden: { opacity: 0, x: 40, scaleY: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scaleY: 1,
    transition: {
      duration: 0.8,
      delay: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.15,
      delayChildren: 1.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20, scale: 0.6 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const sectionLabelVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const SideNav = ({ sections, currentIndex, onNavigate }) => {
  return (
    <>
      {/* ── Navigation Rail (right side) ── */}
      <motion.nav
        className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-[150]"
        variants={railVariants}
        initial="hidden"
        animate="visible">
        {/* Glassmorphism rail background */}
        <div
          className="absolute inset-0 rounded-full -z-10"
          style={{
            width: 56,
            left: "50%",
            transform: "translateX(-50%)",
            top: -16,
            bottom: -16,
            backdropFilter: "blur(16px) saturate(140%)",
            backgroundColor: "rgba(10, 5, 30, 0.35)",
            border: "1px solid rgba(206, 183, 255, 0.08)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(206, 183, 255, 0.05)",
          }}
        />

        <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 relative py-2">
          {sections.map((section, index) => {
            const isActive = index === currentIndex;
            return (
              <motion.button
                key={section.id}
                className="relative flex items-center cursor-pointer bg-transparent border-none outline-none p-2"
                variants={itemVariants}
                onClick={() => onNavigate(index)}
                whileTap={{ scale: 0.88 }}
                aria-label={`Go to ${section.label}`}>
                {/* Label — always visible for active, fades in on hover for inactive */}
                <motion.span
                  className="absolute right-14 sm:right-16 whitespace-nowrap font-bebas-neue text-base sm:text-lg md:text-xl tracking-[0.15em] pointer-events-none"
                  style={{
                    color: isActive
                      ? "rgba(206, 183, 255, 0.95)"
                      : "rgba(206, 183, 255, 0.5)",
                    textShadow: isActive
                      ? "0 0 20px rgba(206, 183, 255, 0.4)"
                      : "none",
                  }}
                  animate={
                    isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }
                  }
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}>
                  {section.label}
                </motion.span>

                {/* Dot assembly */}
                <div className="relative flex items-center justify-center w-8 h-8">
                  {/* Active pill background */}
                  {isActive && (
                    <motion.div
                      className="absolute rounded-full"
                      style={{
                        width: 36,
                        height: 36,
                        background:
                          "radial-gradient(circle, rgba(206, 183, 255, 0.12) 0%, rgba(206, 183, 255, 0.03) 70%)",
                        border: "1.5px solid rgba(206, 183, 255, 0.3)",
                      }}
                      layoutId="navActivePill"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 28,
                      }}
                    />
                  )}

                  {/* Outer ring */}
                  {isActive && (
                    <motion.div
                      className="absolute rounded-full"
                      style={{
                        width: 30,
                        height: 30,
                        border: "1px solid rgba(206, 183, 255, 0.4)",
                      }}
                      layoutId="navActiveRing"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {/* Glow pulse for active */}
                  {isActive && (
                    <motion.div
                      className="absolute rounded-full"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 12px rgba(206, 183, 255, 0.25), 0 0 24px rgba(206, 183, 255, 0.1)",
                          "0 0 20px rgba(206, 183, 255, 0.5), 0 0 40px rgba(206, 183, 255, 0.2)",
                          "0 0 12px rgba(206, 183, 255, 0.25), 0 0 24px rgba(206, 183, 255, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  {/* Inner dot */}
                  <motion.div
                    className="rounded-full relative z-10"
                    animate={{
                      width: isActive ? 14 : 8,
                      height: isActive ? 14 : 8,
                      backgroundColor: isActive
                        ? "#CEB7FF"
                        : "rgba(206, 183, 255, 0.25)",
                      boxShadow: isActive
                        ? "0 0 14px rgba(206, 183, 255, 0.6)"
                        : "0 0 0px transparent",
                    }}
                    whileHover={{
                      backgroundColor: "#CEB7FF",
                      width: 14,
                      height: 14,
                      boxShadow: "0 0 14px rgba(206, 183, 255, 0.5)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Connecting line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -z-20"
          style={{
            width: 2,
            top: 24,
            bottom: 24,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(206, 183, 255, 0.12) 30%, rgba(206, 183, 255, 0.12) 70%, transparent 100%)",
            borderRadius: 1,
          }}
        />
      </motion.nav>

      {/* ── Section indicator (bottom-right) ── */}
      <div className="fixed bottom-5 right-4 sm:right-6 md:right-8 z-[150]">
        <AnimatePresence mode="wait">
          <motion.div
            key={sections[currentIndex].id}
            className="flex items-center gap-3"
            variants={sectionLabelVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            {/* Progress bar */}
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: 48,
                height: 3,
                backgroundColor: "rgba(206, 183, 255, 0.1)",
              }}>
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ backgroundColor: "rgba(206, 183, 255, 0.5)" }}
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentIndex + 1) / sections.length) * 100}%`,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span
              className="font-bebas-neue text-sm sm:text-base tracking-[0.2em] uppercase"
              style={{ color: "rgba(206, 183, 255, 0.5)" }}>
              {String(currentIndex + 1).padStart(2, "0")}{" "}
              <span style={{ color: "rgba(206, 183, 255, 0.2)" }}>/</span>{" "}
              {String(sections.length).padStart(2, "0")}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default SideNav;
