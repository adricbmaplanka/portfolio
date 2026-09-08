"use client";

import { useEffect, useState } from "react";
import { FluentEmoji } from "@lobehub/fluent-emoji";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 relative cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={resolvedTheme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          {resolvedTheme === "dark" ? (
            <FluentEmoji
              emoji="☀️"
              type="3d"
              size={35}
              className="animate-[spin_20s_linear_infinite] hover:scale-105 transition-transform"
            />
          ) : (
            <FluentEmoji
              emoji="🌙"
              type="3d"
              size={35}
              className="[filter:grayscale(1)_brightness(0.6)] animate-[pulse_3s_ease-in-out_infinite] hover:rotate-12 transition-transform duration-300"
            />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
