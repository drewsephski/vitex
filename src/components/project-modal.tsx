import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import AnimatedBadge from "./ui/animated-badge"

type ProjectModalProps = {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    problem: string
    solution: string
    challenges: string[]
    results: string[]
    image: string
    stack: string[]
    link?: string
  }
}

const techBadgeStyles = {
  React: { style: { backgroundColor: '#61DAFB', color: '#20232A' } },
  TypeScript: { style: { backgroundColor: '#3178C6', color: '#FFFFFF' } },
  NextJS: { style: { backgroundColor: '#000000', color: '#FFFFFF' } },
  TailwindCSS: { style: { backgroundColor: '#38B2AC', color: '#FFFFFF' } },
  NodeJS: { style: { backgroundColor: '#339933', color: '#FFFFFF' } },
  Express: { style: { backgroundColor: '#000000', color: '#FFFFFF' } },
  MongoDB: { style: { backgroundColor: '#47A248', color: '#FFFFFF' } },
  PostgreSQL: { style: { backgroundColor: '#336791', color: '#FFFFFF' } },
  Firebase: { style: { backgroundColor: '#FFCA28', color: '#333333' } },
  default: { style: { backgroundColor: '#888888', color: '#FFFFFF' } },
};

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  function getTechBadgeStyle(tech: string): { style: React.CSSProperties } {
    return techBadgeStyles[tech as keyof typeof techBadgeStyles] || techBadgeStyles.default
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] p-0 border-0 bg-transparent shadow-none">
        <div className="relative w-full p-8 bg-background rounded-lg">
          
          <div className="space-y-6 w-full max-w-[1600px] mx-auto">
            <DialogHeader className="text-left">
              <DialogTitle className="text-4xl font-bold tracking-tight mb-1">{project.title}</DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground">
                {project.description}
              </DialogDescription>
            </DialogHeader>

          {project.image && (
            <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg bg-muted">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-auto w-full aspect-video object-cover max-h-80"
              />
            </div>
          )}

          <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
            <section className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight pb-2">The Challenge</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight pb-2">My Solution</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </section>

            <div className="space-y-6">
              <section className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight pb-2">Technical Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span className="text-base text-muted-foreground leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight pb-2">Results & Impact</h3>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-green-500" />
                      <span className="text-base text-muted-foreground leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

          </div>

          {project.stack && (
            <section className="mt-8 pt-4 border-t border-border w-full">
              <h3 className="mb-4 text-xl font-bold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 w-full">
                {project.stack.map((tech) => (
                  <AnimatedBadge
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium"
                    text={tech}
                    style={getTechBadgeStyle(tech).style}
                  >
                    {tech}
                  </AnimatedBadge>
                ))}
              </div>
            </section>
          )}
          
          <div className="mt-8 flex justify-end">
            <Button asChild size="default" className="text-base px-6 py-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                View Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      </DialogContent>
    </Dialog>
  )
}
