import projectBackground from "../assets/img/projectBG.png";
import rectangle from "../assets/img/Rectangle 1.svg";
import { motion } from "framer-motion";
import ProjectGlobe from "./ProjectGlobe";

const containerVars = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
};

const itemVars = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    visible: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
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

const ProjectComponent = () => {
    return (
        <div
            className="w-screen h-screen relative overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3)), url(${projectBackground})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>

            {/* Ambient floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: 2 + Math.random() * 3,
                        height: 2 + Math.random() * 3,
                        background: "rgba(206, 183, 255, 0.4)",
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        boxShadow: "0 0 6px rgba(206, 183, 255, 0.3)",
                    }}
                    animate={{
                        y: [0, -30 - Math.random() * 40, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.7, 0.2],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 3,
                    }}
                />
            ))}

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
                <motion.h1
                    className="font-outline font-out text-lg sm:text-2xl md:text-[42px] font-black tracking-[0.15em] sm:tracking-[0.2em]"
                >
                    PROJECTS
                </motion.h1>

                {/* Bottom decorative rectangle with glow pulse */}
                <motion.div variants={rectGlowVars}>
                    <img src={rectangle} className="h-3 sm:h-4 md:h-5" alt="rect" />
                </motion.div>

                <ProjectGlobe />
            </motion.div>
        </div>
    );
};

export default ProjectComponent;
