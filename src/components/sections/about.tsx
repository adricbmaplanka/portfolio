"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ABOUT_DATA } from "@/data";
import { jura } from "@/lib/fonts";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${jura.className}`}>
              About Me
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              My background and professional journey
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-12 max-w-3xl text-center"
          >
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m a Full Stack Developer based in {ABOUT_DATA.location}{" "}
              with a passion for building scalable software solutions and
              services. My expertise spans across frontend and backend
              technologies, with a strong focus on Node, JavaScript, React
              ecosystem and microservices architecture.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
