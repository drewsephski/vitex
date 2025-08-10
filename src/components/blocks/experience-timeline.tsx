import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaBuilding, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDocker, SiGoogle, SiAmazon, SiAdobephotoshop, SiAdobexd, SiFigma } from 'react-icons/si';

// Mock company logos - replace with actual company logos
const companyLogos: Record<string, React.ReactNode> = {
  'Tech Innovators Inc.': <SiDocker className="w-8 h-8 text-blue-500" />,
  'Digital Solutions LLC': <SiGoogle className="w-8 h-8 text-green-500" />,
  'WebStart Agency': <SiAmazon className="w-8 h-8 text-orange-500" />,
  'Design Studio X': <SiAdobexd className="w-8 h-8 text-pink-500" />,
  'Creative Web Co.': <SiFigma className="w-8 h-8 text-purple-500" />,
  'Pixel Perfect': <SiAdobephotoshop className="w-8 h-8 text-blue-400" />
};

type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  tags: string[];
};

export function ExperienceTimeline() {
  const experiences: Experience[] = [
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Tech Innovators Inc.',
      duration: '2021 - Present',
      description: 'Leading frontend architecture and development of enterprise applications.',
      achievements: [
        'Architected and implemented a micro-frontend architecture that improved development velocity by 40%',
        'Mentored a team of 5 junior developers, improving code quality and best practices',
        'Introduced TypeScript across the codebase, reducing runtime errors by 60%',
        'Led the migration from legacy Angular to React, improving performance by 35%'
      ],
      tags: ['React', 'TypeScript', 'Micro-frontends', 'Leadership', 'GraphQL', 'Jest']
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      duration: '2018 - 2021',
      description: 'Developed and maintained full-stack applications for various clients.',
      achievements: [
        'Built a real-time dashboard that processed 10,000+ events per second using WebSockets',
        'Reduced API response time by 70% through query optimization and caching strategies',
        'Implemented CI/CD pipelines reducing deployment time from 1 hour to 10 minutes',
        'Designed and developed a scalable microservices architecture'
      ],
      tags: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 3,
      role: 'Web Developer',
      company: 'WebStart Agency',
      duration: '2016 - 2018',
      description: 'Developed responsive websites and web applications for small to medium businesses.',
      achievements: [
        'Delivered 20+ client projects with 100% satisfaction rate',
        'Improved website performance scores by 50% on average through optimization techniques',
        'Introduced modern JavaScript practices and build tools to the team',
        'Created reusable component libraries that reduced development time by 30%'
      ],
      tags: ['JavaScript', 'HTML5/CSS3', 'WordPress', 'PHP', 'jQuery', 'Bootstrap']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A timeline of my career progression, key achievements, and professional growth
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8 relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex flex-row' : 'md:flex-row-reverse'}`}
              variants={item}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10 items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-background"></div>
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/20 group">
                    <CardHeader className="pb-3">
                      <div className={`flex flex-col space-y-2 ${index % 2 === 0 ? 'md:items-start' : 'md:items-start'}`}>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-lg bg-background border flex items-center justify-center shadow-sm">
                            {companyLogos[exp.company] || <FaBuilding className="w-6 h-6 text-muted-foreground" />}
                          </div>
                          <div>
                            <CardTitle className="text-xl md:text-2xl font-bold">{exp.role}</CardTitle>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <FaBuilding className="mr-1.5 w-3.5 h-3.5" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <FaCalendarAlt className="mr-1.5 w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90 mb-4">{exp.description}</p>
                      <ul className={`space-y-3 mb-5`}>
                        {exp.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start group/achievement"
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                          >
                            <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                            <span className="text-foreground/90">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className={`flex flex-wrap gap-2 mt-4`}>
                        {exp.tags.map((tag) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="font-normal hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <a 
                        href="#" 
                        className="text-sm font-medium text-primary flex items-center hover:underline group-hover:underline"
                        onClick={(e) => e.preventDefault()}
                      >
                        View Project
                        <FaExternalLinkAlt className="ml-1.5 w-3 h-3" />
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
              
              {/* Empty div for spacing on alternating sides */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
