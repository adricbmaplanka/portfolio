"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ABOUT_DATA, EXPERIENCE_DATA } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
              I'm a Full Stack Developer based in {ABOUT_DATA.location} with a
              passion for building scalable software solutions and services. My
              expertise spans across frontend and backend technologies, with a
              strong focus on Node, JavaScript, React ecosystem and
              microservices architecture.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <h3 className="mb-6 text-2xl font-bold tracking-tighter">
              Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((experience, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle>{experience.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {experience.company} | {experience.period}
                        </CardDescription>
                      </div>
                      <CardDescription className="mt-1 md:mt-0">
                        {experience.location}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                      {experience.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 w-full">
            <h3 className="mb-6 text-2xl font-bold tracking-tighter">
              Education
            </h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>CompTIA A+ Certificate, Java OCA</CardTitle>
                  <CardDescription>
                    Joburg Centre for Software Engineering | April 2018 – March
                    2019
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>UX/UI Course</CardTitle>
                  <CardDescription>
                    Joburg Centre for Software Engineering | April 2017 – March
                    2018
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>BSc in Systems Development</CardTitle>
                  <CardDescription>
                    Richfield Graduate Institute of Technology | March 2017 –
                    May 2019
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Higher Certificate in Information Technology
                  </CardTitle>
                  <CardDescription>
                    Richfield Graduate Institute of Technology | February 2016 –
                    March 2017
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
