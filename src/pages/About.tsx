import { motion } from 'framer-motion';
import { SkillsMatrix } from "@/components/blocks/skills-matrix";
import { ExperienceTimeline } from "@/components/blocks/experience-timeline";
import AnimatedHero from "@/components/ui/animated-hero";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <AnimatedHero
        title={
          <>
            Crafting Digital Experiences
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              About My Journey
            </span>
          </>
        }
        description="I'm a passionate developer with a keen eye for design and a love for building exceptional digital experiences. Here's a bit about my journey, skills, and professional experience."
        actions={
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="gap-2 group">
              View My Work
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </div>
        }
      />

      {/* Main Content */}
      <div className="w-full bg-background py-16 md:py-24">
        <div className="container px-4 md:px-8 max-w-6xl mx-auto">
          {/* Skills Section */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24"
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are the technologies and tools I work with on a regular basis.
              </p>
            </div>
            <div className="bg-muted/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-muted/20 shadow-sm">
              <SkillsMatrix />
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative">
              <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 hidden md:block"></div>
              <div className="space-y-8">
                <ExperienceTimeline />
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}