"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl transition-all duration-300 pointer-events-auto">
      <div
        className={`flex h-16 items-center justify-between rounded-full px-6 transition-all duration-300 text-neutral-900 dark:text-white shadow-md dark:shadow-[0_4px_14px_0_rgba(255,255,255,0.05)] ${
          scrolled || mobileNavOpen
            ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800"
            : "bg-white/50 dark:bg-neutral-950/50 backdrop-blur-md border border-neutral-200/40 dark:border-neutral-800/40"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight">
            Adric<span className="text-primary">.</span>
          </span>
          {/* Pulsing Availability Indicator */}
          <div
            className="relative flex h-2.5 w-2.5 ml-2"
            title="Available for work"
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary group"
            >
              {link.name}
              <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100 -z-10"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Mobile Nav Toggle */}
          <Button
            id="mobile-nav-toggle"
            data-mobile-toggle="true"
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full cursor-pointer overflow-hidden z-[60]"
            onClick={(e) => {
              e.stopPropagation();
              setMobileNavOpen((prev) => !prev);
            }}
          >
            <motion.div
              initial={false}
              animate={mobileNavOpen ? "open" : "closed"}
              className="flex flex-col justify-center items-center w-5 h-5 gap-1.5"
            >
              <motion.span
                className="w-5 h-[2px] bg-neutral-900 dark:bg-white block rounded-full origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-[2px] bg-neutral-900 dark:bg-white block rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-[2px] bg-neutral-900 dark:bg-white block rounded-full origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}
