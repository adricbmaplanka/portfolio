"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data";
import { jura } from "@/lib/fonts";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/animated-section";
import React from "react";

// Create a flat list of all skills for the marquee
const allSkills = SKILL_CATEGORIES.flatMap((category) => category.skills);

// Split skills into three rows for a varied marquee effect
const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 3));
const row2 = allSkills.slice(
  Math.ceil(allSkills.length / 3),
  Math.ceil((allSkills.length / 3) * 2)
);
const row3 = allSkills.slice(Math.ceil((allSkills.length / 3) * 2));

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 40,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="relative flex w-full overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* We duplicate the items to create a seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-4 flex items-center justify-center rounded-full border border-primary/20 bg-background/50 px-8 py-4 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <span className="text-lg font-medium tracking-wide">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="py-24 md:py-32 bg-muted/30 overflow-hidden relative"
      staggerChildren={0.2}
    >
      {/* Subtle background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 mb-16 flex flex-col items-center">
        <AnimatedItem className="text-center">
          <h2
            className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ${jura.className}`}
          >
            Technologies
          </h2>
          <p className="mt-6 text-muted-foreground md:text-xl max-w-[600px] mx-auto">
            Tools and frameworks I use to bring ideas to life.
          </p>
        </AnimatedItem>
      </div>

      <AnimatedItem className="w-full rotate-[-2deg] scale-105 origin-center my-8">
        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" speed={45} />
          <MarqueeRow items={row2} direction="right" speed={55} />
          <MarqueeRow items={row3} direction="left" speed={40} />
        </div>
      </AnimatedItem>
    </AnimatedSection>
  );
}
