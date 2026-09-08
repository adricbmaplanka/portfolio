"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { jura } from "@/lib/fonts";
import { FaArrowRight } from "react-icons/fa";
import { NAV_LINKS } from "@/data";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
      modal={false}
    >
      {/* Backdrop overlay when modal={false} */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/20 dark:bg-black/60 backdrop-blur-xs hidden sm:block md:hidden"
          />
        )}
      </AnimatePresence>

      <SheetContent
        side="right"
        hideClose={true}
        withOverlay={false}
        onPointerDownOutside={(e) => {
          const target = e.target as HTMLElement | null;
          if (
            target?.closest("#mobile-nav-toggle") ||
            target?.closest("[data-mobile-toggle]")
          ) {
            e.preventDefault();
          }
        }}
        onInteractOutside={(e) => {
          const target = e.target as HTMLElement | null;
          if (
            target?.closest("#mobile-nav-toggle") ||
            target?.closest("[data-mobile-toggle]")
          ) {
            e.preventDefault();
          }
        }}
        className="w-full sm:max-w-md border-l border-neutral-200/50 dark:border-neutral-800/60 bg-white/1 dark:bg-black/1 backdrop-blur-xl !text-black dark:!text-white flex flex-col justify-center px-8 sm:px-12"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Mobile navigation menu</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col space-y-6 mt-8">
          <AnimatePresence>
            {open &&
              NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.33, 1, 0.68, 1], // Custom easeOutCubic
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between text-5xl font-bold tracking-tighter uppercase !text-black dark:!text-white transition-colors hover:text-primary py-2 cursor-pointer ${jura.className}`}
                  >
                    <span className="!text-black dark:!text-white">{link.name}</span>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <FaArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
