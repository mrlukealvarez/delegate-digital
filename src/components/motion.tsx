"use client";

import {
  motion,
  useReducedMotion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const fadeInUpVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const fadeInDownVariants = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
const fadeInLeftVariants = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
const fadeInRightVariants = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
const fadeInVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variantMap = {
    up: fadeInUpVariants,
    down: fadeInDownVariants,
    left: fadeInLeftVariants,
    right: fadeInRightVariants,
    none: fadeInVariants,
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      variants={variantMap[direction]}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CyanGlow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "transparent",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.02,
              boxShadow: "0 0 15px rgba(6,182,212,0.15)",
              borderColor: "rgba(6,182,212,0.3)",
            }
      }
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function addSeparator(numStr: string, sep: string): string {
  const [intPart, decPart] = numStr.split(".");
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return decPart !== undefined ? `${formatted}.${decPart}` : formatted;
}

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
  separator,
  className = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  separator?: string;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const formatNum = (n: number) => {
    const raw = n.toFixed(decimals);
    return separator ? addSeparator(raw, separator) : raw;
  };

  const [display, setDisplay] = useState(
    prefersReducedMotion ? formatNum(end) : formatNum(0)
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(formatNum(end));
      return;
    }
    if (!isInView) return;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    function easeOut(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOut(progress);
      const current = eased * end;
      const raw = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
      setDisplay(separator ? addSeparator(raw, separator) : raw);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        const final = end.toFixed(decimals);
        setDisplay(separator ? addSeparator(final, separator) : final);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, end, duration, decimals, separator, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function CyanShimmer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.span
      style={{
        backgroundImage:
          "linear-gradient(90deg, #06B6D4 0%, #67E8F9 50%, #06B6D4 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
      animate={
        prefersReducedMotion
          ? { backgroundPosition: "0% 50%" }
          : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 3, repeat: Infinity, ease: "linear" }
      }
      className={className}
    >
      {children}
    </motion.span>
  );
}

export function ParallaxSection({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-100 * speed, 100 * speed]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function PulseGlow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              boxShadow: [
                "0 0 20px rgba(6,182,212,0.3)",
                "0 0 40px rgba(6,182,212,0.5)",
                "0 0 20px rgba(6,182,212,0.3)",
              ],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? undefined
          : { scale: 0.8, opacity: 0, rotate: -2 }
      }
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
