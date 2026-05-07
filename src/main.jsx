import { createRoot } from "react-dom/client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainHome from "./Components/Home.jsx";
import SkillContainer from "./Components/SkillContainer.jsx";

import SideNav from "./Components/SideNav.jsx";
import ContactComponent from "./Components/ContactComponent.jsx";
import ProjectComponent from "./Components/Project.jsx";
import WorkExperience from "./Components/WorkExp.jsx";

const sections = [
  { id: "home", label: "Home", component: MainHome },
  { id: "skills", label: "Skills", component: SkillContainer },
  { id: "project", label: "Project", component: ProjectComponent },
  { id: "WorkExp", label: "Work Exp", component: WorkExperience },
  { id: "contact", label: "Contact", component: ContactComponent },
];

// Slide direction-aware variants
const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? "40%" : "-40%",
    scale: 0.95,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? "-40%" : "40%",
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isTransitioning = useRef(false);
  const cooldownTimer = useRef(null);

  const navigateTo = useCallback(
    (index) => {
      if (index === currentIndex || index < 0 || index >= sections.length) return;
      if (isTransitioning.current) return;

      isTransitioning.current = true;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);

      // Cooldown to prevent rapid switching
      clearTimeout(cooldownTimer.current);
      cooldownTimer.current = setTimeout(() => {
        isTransitioning.current = false;
      }, 500);
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    if (currentIndex < sections.length - 1) navigateTo(currentIndex + 1);
  }, [currentIndex, navigateTo]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) navigateTo(currentIndex - 1);
  }, [currentIndex, navigateTo]);

  // Mouse wheel navigation
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 30) return; // ignore tiny scroll
      if (e.deltaY > 0) goNext();
      else goPrev();
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Touch swipe navigation
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 60) {
        if (delta > 0) goNext();
        else goPrev();
      }
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Prevent default scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const CurrentComponent = sections[currentIndex].component;

  return (
    <div className="w-screen h-screen overflow-hidden relative">

      <SideNav
        sections={sections}
        currentIndex={currentIndex}
        onNavigate={navigateTo}
      />
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full absolute inset-0"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
