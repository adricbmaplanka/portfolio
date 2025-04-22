"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = () => {
    onClose();
  };

  const currentTheme = mounted ? resolvedTheme : "light";
  const isDarkMode = currentTheme === "dark";

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full max-w-xs border-l items-center"
        style={{
          backgroundColor: isDarkMode ? "#000000" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#000000",
        }}
      >
        <SheetHeader className="mb-8">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-left text-xl font-bold">
              Navigation
            </SheetTitle>
          </div>
        </SheetHeader>
        <nav className="flex flex-col space-y-6">
          <Link
            href="#about"
            onClick={handleLinkClick}
            className="flex items-center py-2 text-base font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#skills"
            onClick={handleLinkClick}
            className="flex items-center py-2 text-base font-medium transition-colors hover:text-primary"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={handleLinkClick}
            className="flex items-center py-2 text-base font-medium transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="flex items-center py-2 text-base font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
