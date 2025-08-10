import { BlogLayout } from "@/components/blocks/blog-layout";

const BlogPost4 = () => {
  return (
    <BlogLayout
      title="Building a Developer Career: Lessons from My Journey"
      author="Drew Sepeczi"
      authorImage="https://media.licdn.com/dms/image/v2/D5603AQGVWxt2-iXSJg/profile-displayphoto-shrink_200_200/B56ZVptVO1HoAY-/0/1741235246470?e=2147483647&v=beta&t=H6_hH6H9Ah6vzmaQixuz95u8CPz2AccYo4fvPGNOEwk"
      date="August 7, 2025"
    >
      <p className="text-lg leading-relaxed text-slate-300 mb-6">
        Over the past decade, I've navigated the ever-changing landscape of web development, from my early days tinkering with HTML to leading development teams at TripleTen. This journey has taught me invaluable lessons about building a successful career in tech. Today, I want to share the most impactful insights I've gathered along the way.
      </p>

      <div className="bg-slate-800/50 border-l-4 border-blue-400 border-solid pl-6 py-4 my-8 rounded-r-lg">
        <p className="text-blue-200 font-medium italic">
          "Your career is a journey, not a destination. The most successful developers are those who never stop learning and adapting."
        </p>
      </div>

      <h2>1. Building a Strong Foundation</h2>
      <p>
        When I started, I made the mistake of jumping into frameworks before mastering the fundamentals. Here's what I wish I knew earlier:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Core Technologies</h3>
          <ul className="space-y-2">
            {[
              'HTML5 & Semantic Markup',
              'CSS3 & Responsive Design',
              'JavaScript (ES6+)',
              'Browser APIs & DOM Manipulation',
              'HTTP/HTTPS & RESTful APIs',
              'Version Control (Git)'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">✓</span>
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Learning Resources</h3>
          <ul className="space-y-3">
            {[
              { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
              { name: 'freeCodeCamp', url: 'https://freecodecamp.org' },
              { name: 'Frontend Masters', url: 'https://frontendmasters.com' },
              { name: 'CSS-Tricks', url: 'https://css-tricks.com' },
              { name: 'Smashing Magazine', url: 'https://smashingmagazine.com' }
            ].map((resource, index) => (
              <li key={index}>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                >
                  {resource.name}
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>2. The Power of Specialization</h2>
      <p>
        Early in my career, I tried to learn everything at once. It wasn't until I focused on full-stack JavaScript development that my career truly took off. Here's my recommended tech stack for 2025:
      </p>

      <div className="bg-slate-800/30 p-6 rounded-xl my-6 border border-slate-700/50 border-solid">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { category: 'Frontend', items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
            { category: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL'] },
            { category: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'] }
          ].map((stack, index) => (
            <div key={index} className="bg-slate-800/50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-3">{stack.category}</h3>
              <ul className="space-y-2">
                {stack.items.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <h2>3. Building a Personal Brand</h2>
      <p>
        In today's competitive market, your online presence is your resume. Here's how I built mine:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">GitHub: Your Code Portfolio</h3>
          <p className="text-slate-300 mb-4">
            I maintain active repositories with clean, well-documented code. Each project includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 pl-4">
            <li>Comprehensive README with screenshots</li>
            <li>Clear commit messages</li>
            <li>Live demo links</li>
            <li>Technical documentation</li>
          </ul>
        </div>

        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Blogging & Content Creation</h3>
          <p className="text-slate-300 mb-4">
            Writing about what I learn has been transformative. It helps me:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-300 mb-2">Technical Articles</h4>
              <p className="text-sm text-slate-400">In-depth tutorials and how-tos on specific technologies</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-300 mb-2">Project Showcases</h4>
              <p className="text-sm text-slate-400">Detailed walkthroughs of my personal projects</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-300 mb-2">Career Insights</h4>
              <p className="text-sm text-slate-400">Lessons learned and career advice</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-300 mb-2">Open Source</h4>
              <p className="text-sm text-slate-400">Contributions to popular projects</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-xl my-8 border border-blue-500/30 border-dashed">
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">Pro Tip: The 70/30 Learning Rule</h3>
        <p className="text-slate-300 mb-4">
          I follow a simple but effective learning approach: spend 30% of your time learning new concepts and 70% building projects. This balance ensures you're constantly applying what you learn, which leads to better retention and practical skills.
        </p>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <h4 className="font-medium text-emerald-300 mb-2">Example Learning Week</h4>
          <div className="grid md:grid-cols-5 gap-2 text-sm">
            {[
              { day: 'Mon', activity: 'Study new React concepts' },
              { day: 'Tue', activity: 'Build project using new concepts' },
              { day: 'Wed', activity: 'Continue project implementation' },
              { day: 'Thu', activity: 'Debug and optimize' },
              { day: 'Fri', activity: 'Document and share on GitHub' }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/30 p-3 rounded">
                <div className="font-medium text-blue-400">{item.day}</div>
                <div className="text-slate-400 text-xs">{item.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>4. Navigating Career Growth</h2>
      <p>
        Career progression in tech isn't just about technical skills. Here's what I've learned about growing in your career:
      </p>
      
      <div className="space-y-6 my-8">
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Mentorship & Networking</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-slate-200 mb-2">Finding Mentors</h4>
              <ul className="space-y-2 text-slate-400">
                <li>• Reach out to senior developers in your network</li>
                <li>• Participate in local meetups and conferences</li>
                <li>• Engage with tech communities on Twitter and Discord</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-200 mb-2">Giving Back</h4>
              <ul className="space-y-2 text-slate-400">
                <li>• Mentor junior developers</li>
                <li>• Contribute to open source</li>
                <li>• Share your knowledge through blog posts or talks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Interview Preparation</h3>
          <p className="text-slate-300 mb-4">
            After conducting hundreds of interviews, here's what stands out:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-300 mb-2">Technical Skills</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Data structures & algorithms</li>
                <li>• System design principles</li>
                <li>• Framework-specific knowledge</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-300 mb-2">Problem Solving</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Clear communication</li>
                <li>• Breaking down problems</li>
                <li>• Considering edge cases</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-300 mb-2">Culture Fit</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Team collaboration</li>
                <li>• Learning mindset</li>
                <li>• Passion for technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>Final Thoughts</h2>
      <p className="mb-6">
        Building a successful career in tech is a marathon, not a sprint. The key is consistent learning, building in public, and contributing to the community. Remember that every expert was once a beginner, and every line of code you write is a step forward in your journey.
      </p>
      <p>
        I'd love to hear about your career journey! Connect with me on <a href="https://linkedin.com/in/drewsepeczi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a> or check out my <a href="https://github.com/drewsepeczi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">GitHub</a> to see what I'm currently working on.
      </p>
    </BlogLayout>
  );
};

export default BlogPost4;
