"use client";

import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { jura } from "@/lib/fonts";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ${jura.className}`}
            >
              {ABOUT_DATA.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground md:text-2xl">
              {ABOUT_DATA.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-6"
          >
            <p>{ABOUT_DATA.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="gap-2">
              <Link href="#contact">
                Contact Me
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="#projects">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Link
              href={`https://${ABOUT_DATA.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={`https://${ABOUT_DATA.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={`mailto:${ABOUT_DATA.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full animate-bounce"
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
