/** @format */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionRevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  y?: number;
};

type MotionStaggerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  delayChildren?: number;
};

export const MotionReveal = ({
  children,
  className,
  style,
  delay = 0,
  y = 24,
}: MotionRevealProps) => {
  return (
    <motion.div
      className={cn(className)}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export const MotionStagger = ({
  children,
  className,
  style,
  stagger = 0.12,
  delayChildren = 0.08,
}: MotionStaggerProps) => {
  return (
    <motion.div
      className={cn(className)}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const MotionStaggerItem = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      className={cn(className)}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
