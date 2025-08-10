import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Info } from "lucide-react"
import AnimatedBadge from "@/components/ui/animated-badge"
import { ProjectModal } from "@/components/project-modal"

const techBadgeStyles = {
  'Next.js': {
    bgColor: 'bg-blue-900/80',
    textColor: 'text-blue-200',
    gradientColor: 'from-transparent via-blue-500/60 to-transparent',
  },
  'React': {
    bgColor: 'bg-cyan-900/80',
    textColor: 'text-cyan-200',
    gradientColor: 'from-transparent via-cyan-400/60 to-transparent',
  },
  'Python': {
    bgColor: 'bg-yellow-900/80',
    textColor: 'text-yellow-200',
    gradientColor: 'from-transparent via-yellow-500/60 to-transparent',
  },
  'Gemini AI': {
    bgColor: 'bg-purple-900/80',
    textColor: 'text-purple-200',
    gradientColor: 'from-transparent via-purple-500/60 to-transparent',
  },
  'Vue.js': {
    bgColor: 'bg-emerald-900/80',
    textColor: 'text-emerald-200',
    gradientColor: 'from-transparent via-emerald-400/60 to-transparent',
  },
  'Svelte': {
    bgColor: 'bg-orange-900/80',
    textColor: 'text-orange-200',
    gradientColor: 'from-transparent via-orange-500/60 to-transparent',
  },
  'default': {
    bgColor: 'bg-gray-900/80',
    textColor: 'text-gray-200',
    gradientColor: 'from-transparent via-gray-500/60 to-transparent',
  },
}

const getTechBadgeStyle = (tech: string) => {
  return techBadgeStyles[tech as keyof typeof techBadgeStyles] || techBadgeStyles.default
}

interface ProjectItem {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
  stack: string[]
  problem: string
  solution: string
  challenges: string[]
  results: string[]
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Hyper AI",
    description: "An AI‑powered web app delivering quick, intuitive flows and a seamless UX for everyday tasks and workflows.",
    tags: ["AI", "Web App", "Automation"],
    link: "https://hyper-ai.netlify.app",
    image: "/hyper.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
    problem: "Users needed a more intuitive way to interact with AI tools for daily tasks without switching between multiple applications.",
    solution: "Developed a unified AI platform that integrates various AI tools into a single, user-friendly interface with customizable workflows.",
    challenges: [
      "Integrating multiple AI APIs while maintaining consistent performance",
      "Creating an intuitive drag-and-drop workflow builder",
      "Ensuring real-time updates across all connected devices"
    ],
    results: [
      "Reduced task completion time by 65% for common workflows",
      "Achieved 4.8/5 user satisfaction rating in beta testing",
      "Onboarded 1,000+ active users in the first month"
    ]
  },
  {
    title: "Easy UI",
    description: "A refined UI component system with polished patterns and ready-to-ship elements for crafting premium interfaces, fast.",
    tags: ["UI", "Components", "Library"],
    link: "https://ez-ui.netlify.app",
    image: "/ez-ui.png",
    stack: ["React", "TypeScript", "Vite", "Motion"],
    problem: "Developers were spending too much time building and styling common UI components from scratch.",
    solution: "Created a comprehensive component library with pre-built, accessible, and customizable UI elements that follow best practices.",
    challenges: [
      "Ensuring cross-browser compatibility",
      "Maintaining consistent theming across components",
      "Optimizing bundle size for production"
    ],
    results: [
      "Reduced development time by 40% for new features",
      "Achieved 95%+ accessibility score across all components",
      "Adopted by 500+ developers in the first quarter"
    ]
  },
  {
    title: "UFC Predict",
    description: "An ML‑assisted predictor for UFC matchups using curated features and lightweight modeling for smart insights.",
    tags: ["AI", "Predictive", "Sports"],
    link: "https://ufc-predict.netlify.app",
    image: "/ufc.png",
    stack: ["Python", "TensorFlow", "Flask", "Shadcn"],
    problem: "MMA fans lacked data-driven insights to inform their fight predictions and understand fighter matchups.",
    solution: "Built a machine learning model that analyzes historical fight data and provides predictions with confidence scores.",
    challenges: [
      "Sourcing and cleaning historical fight data",
      "Feature engineering for predictive modeling",
      "Creating an intuitive interface for non-technical users"
    ],
    results: [
      "Achieved 72% prediction accuracy on test data",
      "Grew to 10,000+ monthly active users",
      "Featured in MMA analytics community forums"
    ]
  },
  {
    title: "Linkify",
    description: "An agentic blog generator that researches, drafts, and styles long‑form posts—then publishes with a single click.",
    tags: ["AI", "Agents", "Content"],
    link: "https://linkify.wiki",
    image: "/linkify.png",
    stack: ["Gemini AI", "Node.js", "MongoDB", "Express"],
    problem: "Content creators needed a way to produce high-quality, well-researched articles more efficiently.",
    solution: "Developed an AI-powered content creation platform that automates research, writing, and formatting of blog posts.",
    challenges: [
      "Ensuring factual accuracy in generated content",
      "Maintaining consistent brand voice across articles",
      "Implementing reliable source citation"
    ],
    results: [
      "Reduced content creation time by 80%",
      "Achieved 4.5/5 content quality rating from users",
      "Generated 1,000+ articles in the first two months"
    ]
  },
  {
    title: "Physician AI",
    description: "Analytics for clinicians powered by AI—surface trends, augment decisions, and present insights with clarity.",
    tags: ["AI", "Healthcare", "Analytics"],
    link: "https://physicianai.netlify.app",
    image: "/physician.png",
    stack: ["Python", "TensorFlow", "Flask", "Shadcn"],
    problem: "Healthcare providers needed better tools to analyze patient data and identify trends to improve care delivery.",
    solution: "Developed an AI-powered analytics platform that processes patient data to provide actionable insights for healthcare providers.",
    challenges: [
      "Ensuring HIPAA compliance and data security",
      "Processing large volumes of medical data efficiently",
      "Creating intuitive visualizations for complex medical data"
    ],
    results: [
      "Reduced data analysis time by 75% for clinicians",
      "Identified key health trends that improved patient outcomes",
      "Achieved 98% accuracy in predictive analytics"
    ]
  },
  {
    title: "Open UI",
    description: "A sleek, open‑source UI kit with 100+ components and templates to build beautiful, responsive interfaces fast.",
    tags: ["Design System", "UI Kit", "Open Source"],
    link: "https://openui.dev",
    image: "/open.png",
    stack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    problem: "Developers needed a comprehensive, customizable UI kit that follows modern design principles and is easy to implement.",
    solution: "Created an open-source UI kit with 100+ components, thorough documentation, and design system guidelines.",
    challenges: [
      "Ensuring consistent design language across all components",
      "Optimizing performance for production use",
      "Creating comprehensive documentation and examples"
    ],
    results: [
      "2,500+ GitHub stars in the first month",
      "Used in 500+ production applications",
      "Featured in Awesome React Components list"
    ]
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section className="w-full bg-transparent py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <Card className="group relative h-full overflow-hidden border-border-/50 bg-background/30 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur supports-[backdrop-filter]:bg-background/20">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="aspect-[16/9] w-full overflow-hidden"
                    >
                      <img
                        src={p.image}
                        alt={`${p.title} hero screenshot`}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                    <motion.div
                      aria-hidden
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="pointer-events-none absolute -inset-1 rounded-xl bg-[radial-gradient(200px_120px_at_var(--x,50%)_0%,hsl(var(--primary)/0.25),transparent_70%)] opacity-0 transition-opacity duration-300"
                    />
                  </div>
                  <div className="flex grow flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white/95">
                        {p.title}
                      </h3>
                      <AnimatedBadge 
                        text={p.stack[0]}
                        size="sm"
                        className="border-border-/60 hover:scale-105 transition-transform duration-200"
                        {...getTechBadgeStyle(p.stack[0])}
                        animationDuration="3s"
                      />
                    </div>
                    <p className="mt-2 min-h-16 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {p.stack.map((s, i) => (
                        <motion.span
                          key={s}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 * i }}
                          whileHover={{ scale: 1.04 }}
                          className="rounded-md border border-border-/60 bg-background/50 px-2 py-0.5 text-[11px] text-muted-foreground transition-colors group-hover:border-border group-hover:text-foreground"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t, i) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, ease: "easeOut", delay: 0.06 * i }}
                          whileHover={{ scale: 1.04 }}
                          className="rounded-full border border-border-/60 bg-background/50 px-2 py-1 text-xs text-muted-foreground transition-colors group-hover:border-border group-hover:text-foreground"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-3">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="group relative overflow-hidden"
                          onClick={() => openModal(p)}
                        >
                          <Info className="mr-2 h-4 w-4" />
                          <span>Case Study</span>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="group relative overflow-hidden"
                        >
                          <motion.a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Live Demo</span>
                            <motion.span
                              initial={{ x: -4, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="inline-block"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.span>
                          </motion.a>
                        </Button>
                      </div>
                      <motion.div
                        aria-hidden
                        initial={{ opacity: 0, x: 8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                        className="hidden h-2 w-2 rounded-full bg-primary group-hover:scale-125 md:block"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </section>
  )
}
