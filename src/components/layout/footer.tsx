"use client";

import { ABOUT_DATA, SOCIAL_LINKS } from "@/data";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { jura } from "@/lib/fonts";

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "GitHub":
        return <Github className="h-5 w-5" />;
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "Mail":
        return <Mail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer id="contact" className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={footerVariants}
          className="flex flex-col"
        >
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center mx-auto"
          >
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl ${jura.className}`}>
              Get In Touch
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Feel free to contact me for work opportunities or just to say
              hello!
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Contact Info */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${ABOUT_DATA.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {ABOUT_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${ABOUT_DATA.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {ABOUT_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{ABOUT_DATA.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold">Connect With Me</h3>
              <div className="flex flex-col space-y-3">
                {SOCIAL_LINKS.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {renderSocialIcon(link.icon)}
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <div className="flex flex-col space-y-3">
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Separator className="my-8" />
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Adric Busani Maplanka. All rights
                reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with Next.js, Tailwind CSS, and Shadcn UI
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
