import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiGraphql, SiPostgresql, SiTerraform, SiJavascript, SiHtml5, SiCss3, SiWordpress } from 'react-icons/si';

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

export function SkillsMatrix() {
  const categories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: <FaReact className="text-blue-500" size={20} /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="text-blue-600" size={20} /> },
        { name: 'JavaScript', level: 88, icon: <SiJavascript className="text-yellow-400" size={20} /> },
        { name: 'Next.js', level: 85, icon: <SiNextdotjs className="text-black dark:text-white" size={20} /> },
        { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-cyan-400" size={20} /> },
        { name: 'HTML5', level: 95, icon: <SiHtml5 className="text-orange-500" size={20} /> },
        { name: 'CSS3', level: 90, icon: <SiCss3 className="text-blue-500" size={20} /> },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, icon: <FaNodeJs className="text-green-500" size={20} /> },
        { name: 'Python', level: 85, icon: <span className="text-yellow-400 font-bold">Py</span> },
        { name: 'GraphQL', level: 80, icon: <SiGraphql className="text-pink-500" size={20} /> },
        { name: 'PostgreSQL', level: 85, icon: <SiPostgresql className="text-blue-700" size={20} /> },
        { name: 'REST APIs', level: 90, icon: <span className="text-green-500 font-medium text-sm">REST</span> },
        { name: 'WordPress', level: 75, icon: <SiWordpress className="text-blue-700" size={20} /> },
      ],
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85, icon: <FaDocker className="text-blue-500" size={20} /> },
        { name: 'AWS', level: 80, icon: <FaAws className="text-orange-500" size={20} /> },
        { name: 'Git', level: 90, icon: <FaGitAlt className="text-orange-600" size={20} /> },
        { name: 'Terraform', level: 75, icon: <SiTerraform className="text-purple-500" size={20} /> },
        { name: 'CI/CD', level: 85, icon: <span className="text-blue-500 text-lg">🔄</span> },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {category.name}
          </h3>
          <div className="space-y-4 pl-1">
            {category.skills.map((skill) => (
              <div key={skill.name} className="space-y-1.5 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-foreground/80 group-hover:text-primary transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full rounded-full ${
                      skill.level > 85 ? 'bg-green-500' : 
                      skill.level > 70 ? 'bg-blue-500' : 
                      'bg-yellow-500'
                    } group-hover:opacity-90 transition-opacity`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
