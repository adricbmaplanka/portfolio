"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECT_PLACEHOLDERS } from "@/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { jura } from "@/lib/fonts";

export function Projects() {
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
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${jura.className}`}
            >
              My Projects
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              A showcase of my recent work and contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {PROJECT_PLACEHOLDERS.map((project, index) => (
              <motion.div key={index} variants={itemVariants} custom={index}>
                <Card className="h-full overflow-hidden flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
                      Project {index + 1} Image
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-center text-muted-foreground">
              More projects coming soon!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
