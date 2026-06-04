"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full max-w-xs border-l items-center bg-white dark:bg-black text-black dark:text-white"
      >
        <SheetHeader className="mb-8">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-left text-xl font-bold text-black dark:text-white">
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
