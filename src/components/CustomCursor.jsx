import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // detect clickable elements
    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovering(true));
      el.addEventListener("mouseleave", () => setHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Main Dot */}
      {/* <motion.div
        animate={{
          x: mouse.x - 4,
          y: mouse.y - 4,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--accent-gradient2)] pointer-events-none z-[9999]"
      /> */}

      {/* Follower */}
      <motion.div
        animate={{
          x: mouse.x - (hovering ? 20 : 16),
          y: mouse.y - (hovering ? 20 : 16),
          width: hovering ? 40 : 15,
          height: hovering ? 40 : 15,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        className="fixed top-0 left-0 rounded-full border border-[var(--accent-gradient1)] pointer-events-none z-[9998]"
        style={{
          background:
            "radial-gradient(circle, rgba(107,253,217,0.15), transparent)",
          backdropFilter: "blur(4px)",
        }}
      />
    </>
  );
};

export default CustomCursor;