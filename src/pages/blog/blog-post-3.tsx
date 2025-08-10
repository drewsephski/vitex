import { BlogLayout } from "@/components/blocks/blog-layout";

const BlogPost3 = () => {
  return (
    <BlogLayout
      title="Mastering Modern CSS: Techniques That Transformed My Workflow"
      author="Drew Sepeczi"
      authorImage="https://media.licdn.com/dms/image/v2/D5603AQGVWxt2-iXSJg/profile-displayphoto-shrink_200_200/B56ZVptVO1HoAY-/0/1741235246470?e=2147483647&v=beta&t=H6_hH6H9Ah6vzmaQixuz95u8CPz2AccYo4fvPGNOEwk"
      date="August 8, 2025"
    >
      <p className="text-lg leading-relaxed text-slate-300 mb-6">
        In my journey from a junior developer to a full-stack engineer, I've witnessed the evolution of CSS from simple style rules to a powerful layout and animation engine. Today, I want to share the modern CSS techniques that have revolutionized how I build user interfaces, along with practical examples you can implement in your projects.
      </p>

      <div className="bg-slate-800/50 border-l-4 border-blue-400 border-solid pl-6 py-4 my-8 rounded-r-lg">
        <p className="text-blue-200 font-medium italic">
          "CSS is like a fine wine—it gets better with age. The more you learn, the more you realize how much you can achieve with just CSS."
        </p>
      </div>

      <h2>1. CSS Grid: The Layout Game-Changer</h2>
      <p>
        When CSS Grid was introduced, it completely transformed how I approach layouts. Here's a practical example of a responsive card grid that adapts beautifully across all screen sizes:
      </p>

      <div className="bg-slate-800/30 p-6 rounded-xl my-6 border border-slate-700/50 border-solid overflow-x-auto">
        <pre className="text-sm text-slate-300">
          <code className="language-css">
{`.card-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: 1rem;
}

/* Modern way to handle aspect ratios */
.card {
  aspect-ratio: 16/9;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border: 1px solid #334155;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}`}
          </code>
        </pre>
      </div>

      <h2>2. CSS Custom Properties for Theming</h2>
      <p>
        CSS variables have made theming and design systems more maintainable. Here's how I implement dark/light mode using CSS custom properties:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">CSS Variables Setup</h3>
            <pre className="text-sm text-slate-300">
              <code className="language-css">
{`:root {
  --primary: #8b5cf6;
  --primary-hover: #7c3aed;
  --text-primary: #f8fafc;
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --border-color: #334155;
}

[data-theme="light"] {
  --text-primary: #0f172a;
  --bg-primary: #f8fafc;
  --bg-secondary: #e2e8f0;
  --border-color: #cbd5e1;
}`}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">React Implementation</h3>
            <pre className="text-sm text-slate-300">
              <code className="language-jsx">
{`const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme', 
      isDark ? 'dark' : 'light'
    );
  }, [isDark]);
  
  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="theme-toggle"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <h2>3. Modern CSS Features You Should Be Using</h2>
      
      <div className="space-y-6 my-8">
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Container Queries</h3>
          <p className="text-slate-300 mb-4">
            The next evolution of responsive design. Style elements based on their container's size rather than the viewport.
          </p>
          <pre className="text-sm bg-slate-800/50 p-4 rounded-lg overflow-x-auto">
            <code className="language-css">
{`.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content {
    flex-direction: row;
  }
  
  .card-image {
    width: 40%;
  }
}`}
            </code>
          </pre>
        </div>

        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 border-solid">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">CSS Nesting</h3>
          <p className="text-slate-300 mb-4">
            Write more maintainable and readable CSS with native nesting (now supported in all major browsers).
          </p>
          <pre className="text-sm bg-slate-800/50 p-4 rounded-lg overflow-x-auto">
            <code className="language-css">
{`.card {
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
  
  & .title {
    font-size: 1.25rem;
    color: var(--text-primary);
    
    & .highlight {
      color: var(--primary);
    }
  }
}`}
            </code>
          </pre>
        </div>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-xl my-8 border border-slate-700/50 border-solid">
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">Pro Tip: CSS Debugging</h3>
        <p className="text-slate-300 mb-4">
          When debugging layout issues, add this temporary style to highlight all elements. It's like an X-ray for your layout:
        </p>
        <pre className="text-sm bg-slate-800/50 p-4 rounded-lg overflow-x-auto">
          <code className="language-css">
{`*:not(path):not(g) {
  color: hsla(210, 100%, 100%, 0.9) !important;
  background: hsla(210, 100%, 50%, 0.1) !important;
  outline: solid 1px hsla(210, 100%, 50%, 0.5) !important;
  box-shadow: none !important;
  filter: none !important;
}`}
          </code>
        </pre>
      </div>

      <h2>4. Performance Optimizations</h2>
      <p>
        Modern CSS offers several ways to improve performance. Here are my top recommendations:
      </p>
      
      <ul className="space-y-4 my-6">
        <li className="flex items-start">
          <span className="text-purple-400 mr-3 mt-1">•</span>
          <div>
            <h3 className="font-semibold text-slate-200">Use <code>content-visibility</code></h3>
            <p className="text-slate-400">Dramatically improve initial load times by only rendering visible content.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-purple-400 mr-3 mt-1">•</span>
          <div>
            <h3 className="font-semibold text-slate-200">Leverage <code>will-change</code> Wisely</h3>
            <p className="text-slate-400">Hint to browsers about which properties will change for optimized rendering.</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-purple-400 mr-3 mt-1">•</span>
          <div>
            <h3 className="font-semibold text-slate-200">Use <code>font-display: optional</code></h3>
            <p className="text-slate-400">Prevent layout shifts by controlling font loading behavior.</p>
          </div>
        </li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>
        Modern CSS is incredibly powerful, but with great power comes great responsibility. Always consider performance, accessibility, and browser compatibility when implementing new features. The key is to use these tools judiciously and always test across different devices and browsers.
      </p>
      <p className="mt-4">
        What are your favorite modern CSS features? I'd love to hear about them! Connect with me on <a href="https://linkedin.com/in/drewsepeczi" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">LinkedIn</a> to continue the conversation.
      </p>
    </BlogLayout>
  );
};

export default BlogPost3;
