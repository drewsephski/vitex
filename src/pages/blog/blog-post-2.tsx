import { BlogLayout } from "@/components/blocks/blog-layout";

const BlogPost2 = () => {
  return (
    <BlogLayout
      title="Essential Web Development Resources: My Curated List for 2025"
      author="Drew Sepeczi"
      authorImage="https://media.licdn.com/dms/image/v2/D5603AQGVWxt2-iXSJg/profile-displayphoto-shrink_200_200/B56ZVptVO1HoAY-/0/1741235246470?e=2147483647&v=beta&t=H6_hH6H9Ah6vzmaQixuz95u8CPz2AccYo4fvPGNOEwk"
      date="August 9, 2025"
    >
      <p className="text-lg leading-relaxed text-slate-300 mb-6">
        In the ever-evolving landscape of web development, staying current with the right resources can be the difference between struggling to keep up and leading the pack. After years of honing my skills as a full-stack developer, I've curated a list of resources that have consistently delivered value throughout my journey.
      </p>

      <div className="bg-slate-800/50 border-l-4 border-blue-400 border-solid pl-6 py-4 my-8 rounded-r-lg">
        <p className="text-blue-200 font-medium italic">
          "The best investment you can make is in yourself. The more you learn, the more you'll earn." - Warren Buffett
        </p>
      </div>

      <h2>1. Learning Platforms That Deliver Results</h2>
      <p>
        When I mentor junior developers at TripleTen, I always recommend these platforms:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">FreeCodeCamp</h3>
          <p className="text-slate-300 mb-4">
            My personal journey began with FreeCodeCamp. Their project-based curriculum helped me build a portfolio while learning. The community is incredibly supportive, and the hands-on approach ensures you're job-ready.
          </p>
          <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
            Visit FreeCodeCamp
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Frontend Masters</h3>
          <p className="text-slate-300 mb-4">
            When I needed to dive deep into advanced JavaScript concepts, Frontend Masters was my go-to. The quality of instruction is exceptional, and the courses are regularly updated to reflect industry standards.
          </p>
          <a href="https://frontendmasters.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
            Explore Frontend Masters
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <h2>2. Must-Read Blogs & Newsletters</h2>
      <p>
        Staying updated is crucial in our field. Here are my top picks:
      </p>
      
      <ul className="space-y-4 my-6">
        <li className="flex items-start">
          <span className="text-blue-400 mr-3 mt-1">•</span>
          <div>
            <h3 className="font-semibold text-slate-200">Smashing Magazine</h3>
            <p className="text-slate-400">In-depth articles on design and development that have consistently provided me with actionable insights.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-blue-400 mr-3 mt-1">•</span>
          <div>
            <h3 className="font-semibold text-slate-200">CSS-Tricks</h3>
            <p className="text-slate-400">My first stop for any CSS-related questions. The almanac section is particularly helpful.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-blue-400 mr-3 mt-1">•</span>
          <div>
            <h3 className="font-semibold text-slate-200">JavaScript Weekly</h3>
            <p className="text-slate-400">A curated newsletter that keeps me updated on the latest in the JavaScript ecosystem.</p>
          </div>
        </li>
      </ul>

      <div className="bg-slate-800/30 p-6 rounded-xl my-8 border border-slate-700/50 border-solid">
        <h3 className="text-xl font-semibold text-blue-400 mb-3">Pro Tip: Create Your Learning Path</h3>
        <p className="text-slate-300 mb-4">
          When I mentor junior developers, I recommend focusing on one technology stack before moving to the next. Master the fundamentals of HTML, CSS, and JavaScript before diving into frameworks. This approach has helped my mentees build stronger foundations and become more versatile developers.
        </p>
      </div>

      <h2>3. Tools That Boost Productivity</h2>
      <p>
        These are the tools that have significantly improved my workflow:
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 my-6">
        {[
          { name: 'VS Code', desc: 'My code editor of choice with essential extensions' },
          { name: 'GitHub Copilot', desc: 'AI pair programming assistant that saves hours of coding' },
          { name: 'Figma', desc: 'For design collaboration and prototyping' },
          { name: 'Postman', desc: 'Essential for API development and testing' },
          { name: 'Notion', desc: 'My all-in-one workspace for notes and project management' },
          { name: 'Raycast', desc: 'Boosts productivity with keyboard shortcuts' }
        ].map((tool, index) => (
          <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/30">
            <h4 className="font-medium text-blue-300">{tool.name}</h4>
            <p className="text-sm text-slate-400">{tool.desc}</p>
          </div>
        ))}
      </div>

      <h2>Final Thoughts</h2>
      <p>
        The key to growth in web development is consistent learning and practice. While these resources have been invaluable to my journey, the most important factor has been applying what I've learned to real projects. Start building, make mistakes, and keep pushing forward.
      </p>
      <p className="mt-4">
        What resources have been most helpful in your development journey? I'd love to hear about them on <a href="https://linkedin.com/in/drewsepeczi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a>!
      </p>
    </BlogLayout>
  );
};

export default BlogPost2;
