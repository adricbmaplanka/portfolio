"use client";

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
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { jura } from "@/lib/fonts";
import {
  AnimatedSection,
  AnimatedItem,
} from "@/components/ui/animated-section";

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="py-16 md:py-24"
      staggerChildren={0.2}
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <AnimatedItem className="mb-12 text-center">
          <h2
            className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${jura.className}`}
          >
            My Projects
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A showcase of my recent work and contributions
          </p>
        </AnimatedItem>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {PROJECT_PLACEHOLDERS.map((project, index) => (
            <AnimatedItem key={index}>
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
                    <FaGithub className="h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <FaExternalLinkAlt className="h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem className="mt-12">
          <p className="text-center text-muted-foreground">
            More projects coming soon!
          </p>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
