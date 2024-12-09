"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "./_lib/clsx";

export default function Template({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
