"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_CATEGORIES } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { jura } from "@/lib/fonts";

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
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

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${jura.className}`}>
              Skills & Technologies
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              My technical expertise and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div key={index} variants={itemVariants} custom={index}>
                <Card className="h-full overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-bold">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
