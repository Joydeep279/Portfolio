import globe from "../assets/img/projectGlobe.png";
import astronaut from "../assets/img/projectAstronaut.png";
import BoxClose from "../assets/img/BoxClose.svg";
import BoxOpen from "../assets/img/BoxOpen.svg";
import leftArrow from "../assets/img/leftArrow.png";
import rightArrow from "../assets/img/rightArrow.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectDesc from "../utils/projectDesc";

const ProjectGlobe = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);

    function toggleBox() {
        setIsBoxOpen(!isBoxOpen);
    }

    function nextProject() {
        setCurrentProject((prev) => (prev + 1) % projectDesc.length);
        setIsBoxOpen(false);
    }

    function prevProject() {
        setCurrentProject((prev) => (prev - 1 + projectDesc.length) % projectDesc.length);
        setIsBoxOpen(false);
    }

    const project = projectDesc[currentProject];

    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95vw] sm:w-[90vw] max-h-[80vh] flex justify-center items-end">
            {/* Floating astronaut */}
            <motion.img
                src={astronaut}
                className="absolute bottom-[88%] sm:bottom-[55%] z-50 h-10 sm:h-20 md:h-24"
                alt="astronaut"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                animate={{
                    y: [0, -18, 0],
                    rotate: [0, 5, -5, 0],
                }}
                whileHover={{ scale: 1.2, rotate: 10 }}
            />

            {/* Project title with animated entrance */}
            <AnimatePresence mode="wait">
                <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={project.name}
                    className="text-2xl sm:text-4xl md:text-5xl text-glow text-white font-bebas-neue font-medium absolute bottom-[80%] z-50 tracking-wider"
                    initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                        textShadow: "0 0 30px rgba(206, 183, 255, 0.6), 0 0 60px rgba(206, 183, 255, 0.3)",
                    }}
                >
                    {project.name}
                </motion.a>
            </AnimatePresence>

            {/* Left arrow */}
            <motion.img
                src={leftArrow}
                alt="Previous"
                className="absolute bottom-[55%] left-[5%] sm:left-[20%] z-[60] h-8 sm:h-14 md:h-24 cursor-pointer"
                onClick={prevProject}
                whileHover={{
                    scale: 1.25,
                    x: -6,
                    filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.7))",
                }}
                whileTap={{ scale: 0.85, x: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />

            {/* Right arrow */}
            <motion.img
                src={rightArrow}
                alt="Next"
                className="absolute bottom-[55%] right-[5%] sm:right-[20%] z-[60] h-8 sm:h-14 md:h-24 cursor-pointer"
                onClick={nextProject}
                whileHover={{
                    scale: 1.25,
                    x: 6,
                    filter: "drop-shadow(0 0 12px rgba(206, 183, 255, 0.7))",
                }}
                whileTap={{ scale: 0.85, x: 12 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />

            {/* Interactive box – closed / opened */}
            <AnimatePresence mode="wait">
                {!isBoxOpen ? (
                    <motion.img
                        key="closed"
                        src={BoxClose}
                        className="absolute bottom-8 sm:bottom-16 md:bottom-20 z-50 w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 left-1/2 -translate-x-1/2 sm:left-[45%] sm:translate-x-0 cursor-pointer"
                        onClick={() => toggleBox()}
                        alt="BoxClose"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: [
                                "drop-shadow(0 0 8px rgba(206, 183, 255, 0.2))",
                                "drop-shadow(0 0 20px rgba(206, 183, 255, 0.5))",
                                "drop-shadow(0 0 8px rgba(206, 183, 255, 0.2))",
                            ],
                        }}
                        exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], filter: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                        whileHover={{
                            scale: 1.15,
                            filter: "drop-shadow(0 0 25px rgba(206, 183, 255, 0.8))",
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                    />
                ) : (
                    <motion.div
                        key="opened"
                        className="absolute bottom-8 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 sm:left-2/6 sm:translate-x-0 z-50 w-[65%] sm:w-[40%] md:w-[35%]"
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
                        <motion.div
                            className="p-2 sm:p-4 md:p-5 absolute inset-0 flex flex-col items-center justify-center gap-1 sm:gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <motion.p
                                className="text-white/90 font-mono text-[0.5rem] sm:text-xs md:text-sm text-center leading-tight"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                            >
                                {project.description}
                            </motion.p>
                            <motion.div
                                className="flex gap-2 sm:gap-3 mt-1"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.4 }}
                            >
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[0.5rem] sm:text-xs font-mono text-white border border-white/30 hover:border-[#ceb7ff] hover:text-[#ceb7ff] hover:shadow-[0_0_12px_rgba(206,183,255,0.4)] transition-all duration-300"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[0.5rem] sm:text-xs font-mono text-black bg-[#ceb7ff] hover:bg-white hover:shadow-[0_0_12px_rgba(206,183,255,0.6)] transition-all duration-300"
                                    >
                                        Demo
                                    </a>
                                )}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Globe with slow rise + glow pulse */}
            <motion.img
                src={globe}
                alt="globe"
                className="relative w-full sm:w-[95%] md:w-[85%] h-full object-contain pointer-events-none"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                animate={{
                    filter: [
                        "drop-shadow(0 0 20px rgba(206, 183, 255, 0.1))",
                        "drop-shadow(0 0 40px rgba(206, 183, 255, 0.25))",
                        "drop-shadow(0 0 20px rgba(206, 183, 255, 0.1))",
                    ],
                }}
                style={{
                    animation: "none",
                }}
            />
        </div>
    );
};

export default ProjectGlobe;
