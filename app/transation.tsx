"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
