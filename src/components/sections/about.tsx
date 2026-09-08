"use client";

import { ABOUT_DATA } from "@/data";
import { jura } from "@/lib/fonts";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const text = `I'm a Full Stack Developer based in ${ABOUT_DATA.location} with a passion for building scalable software solutions and services. My expertise spans across frontend and backend technologies, with a strong focus on Node, JavaScript, React ecosystem and microservices architecture.`;
  const words = text.split(" ");

  return (
    <section id="about" className="py-24 md:py-40 relative">
      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 relative"
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          {/* Left Side: Sticky Heading */}
          <div className="md:w-1/3 md:sticky md:top-32">
            <h2
              className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ${jura.className}`}
            >
              About Me
            </h2>
            <div className="w-12 h-1 bg-primary mt-6 rounded-full" />
            <p className="mt-6 text-muted-foreground uppercase tracking-widest text-sm font-medium">
              Background & Journey
            </p>
          </div>

          {/* Right Side: Scroll-Reveal Text */}
          <div className="md:w-2/3">
            <p className="text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight font-medium flex flex-wrap gap-x-2 gap-y-2">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
