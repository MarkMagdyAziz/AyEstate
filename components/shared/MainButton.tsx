"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/_lib/clsx";
import { useRouter } from "next/navigation";

interface MainButtonProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
}
function MainButton(props: MainButtonProps) {
  const { push } = useRouter();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-xl bg-app-primary px-6 py-3 text-base font-semibold text-black",
        props.className,
      )}
      onClick={() => props.href && push(props.href)}
    >
      {props?.title || props?.children}
    </motion.button>
  );
}

export default MainButton;
