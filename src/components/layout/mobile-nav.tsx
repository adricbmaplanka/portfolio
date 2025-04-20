"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";

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
      <SheetContent side="right" className="w-full max-w-xs border-l">
        <SheetHeader className="mb-8">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-left text-xl font-bold">
              Navigation
            </SheetTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
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
