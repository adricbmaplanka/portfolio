"use client";

import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data";
import { Button } from "@/components/ui/button";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";
import { jura } from "@/lib/fonts";
import React from "react";

export function Hero() {
  const nameWords = ABOUT_DATA.name.split(" ");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center py-12 overflow-hidden">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <h1
              className={`flex flex-wrap justify-center overflow-hidden text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl ${jura.className}`}
            >
              {nameWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4 last:mr-0"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1], // easeOutExpo
                    delay: 0.1 + index * 0.1,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-xl text-primary font-medium md:text-2xl tracking-widest uppercase"
            >
              {ABOUT_DATA.title}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-6"
          >
            <p>{ABOUT_DATA.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-12 font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <span className="text-lg">Contact Me</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce cursor-pointer"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FaArrowDown className="h-6 w-6 text-muted-foreground" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  );
}
