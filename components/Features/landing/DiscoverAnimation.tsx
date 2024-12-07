"use client";
import React from "react";
import { motion } from "framer-motion";

function DiscoverAnimation(props: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full lg:w-2/4"
    >
      {props.children}
    </motion.section>
  );
}

export default DiscoverAnimation;
