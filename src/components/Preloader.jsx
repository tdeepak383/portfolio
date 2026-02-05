import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed inset-0
        bg-[var(--accent-primary)]
        flex items-center justify-center
        z-[9999]
      "
    >
      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="
          w-16 h-16
          rounded-full
          border-4
          border-t-[var(--accent-gradient1)]
          border-r-[var(--accent-gradient2)]
          border-b-[var(--accent-gradient1)]
          border-l-[var(--accent-gradient2)]
        "
      />
    </motion.div>
  );
};

export default Preloader;