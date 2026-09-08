"use client";

import { ABOUT_DATA, SOCIAL_LINKS } from "@/data";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";
import { jura } from "@/lib/fonts";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/animated-section";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export function Footer() {
  return (
    <AnimatedSection
      id="contact"
      className="bg-background relative pt-24 pb-8 overflow-hidden"
      staggerChildren={0.1}
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col">
        {/* Availability Marquee Banner */}
        <AnimatedItem className="mb-24 flex overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex items-center space-x-4 text-sm font-medium tracking-widest text-muted-foreground uppercase"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Available for work</span>
                <span className="text-primary">•</span>
                <span>Open to new opportunities</span>
                <span className="text-primary">•</span>
              </React.Fragment>
            ))}
          </motion.div>
        </AnimatedItem>

        <div className="flex flex-col mb-32">
          {/* Giant CTA */}
          <AnimatedItem>
            <h2
              className={`text-[12vw] leading-none font-bold tracking-tighter uppercase ${jura.className}`}
            >
              Let&apos;s work
            </h2>
          </AnimatedItem>
          <AnimatedItem className="flex items-center gap-4">
            <h2
              className={`text-[12vw] leading-none font-bold tracking-tighter uppercase text-muted-foreground ${jura.className}`}
            >
              Together
            </h2>
          </AnimatedItem>

          {/* Magnetic/Hover Email Link */}
          <AnimatedItem className="mt-12 group w-fit">
            <a
              href={`mailto:${ABOUT_DATA.email}`}
              className="flex items-center gap-4 text-2xl md:text-4xl font-medium tracking-tight hover:text-primary transition-colors"
            >
              {ABOUT_DATA.email}
              <motion.span
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                whileHover={{ rotate: -45, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowRight />
              </motion.span>
            </a>
          </AnimatedItem>
        </div>

        <AnimatedItem>
          <Separator className="my-8" />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-col">
              <p className="text-sm font-medium">
                © {new Date().getFullYear()} Adric Busani Maplanka.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with Next.js & Tailwind CSS
              </p>
            </div>

            {/* Minimal Social Links */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              {SOCIAL_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
