import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar, NavBody, NavItems, NavbarLogo } from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

interface BlogLayoutProps {
  title: string;
  author: string;
  authorImage: string;
  date: string;
  children: React.ReactNode;
}

export function BlogLayout({
  title,
  author,
  authorImage,
  date,
  children,
}: BlogLayoutProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [estimatedReadTime, setEstimatedReadTime] = useState(0);

  useEffect(() => {
    // Calculate estimated read time
    const wordsPerMinute = 200;
    const text = document.querySelector('article')?.textContent || '';
    const wordCount = text.split(/\s+/).length;
    setEstimatedReadTime(Math.ceil(wordCount / wordsPerMinute));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      // For anchor links, scroll to the section
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For regular links, navigate to the route
      navigate(href);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden text-base sm:text-[15px]">
      {/* Navbar */}
      <Navbar>
        <NavBody className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavbarLogo />
            <div className="hidden md:block">
              <NavItems 
                items={navItems} 
                onItemClick={handleNavClick} 
                className="space-x-4 md:space-x-6 px-2 py-1 text-sm sm:text-[15px] md:text-base hover:text-blue-400 transition-colors"
              />
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => {}}
                className="p-2 -mr-2 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </NavBody>
      </Navbar>
      
      {/* Mobile menu */}
      <div className="md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40 transition-opacity duration-300 opacity-0 pointer-events-none">
        <div className="absolute top-0 right-0 p-4">
          <button className="p-2 text-slate-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="h-full flex flex-col items-center justify-center space-y-6 px-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={(e) => {
                handleNavClick(e, item.link);
              }}
              className="text-xl font-medium text-slate-200 hover:text-blue-400 transition-colors px-4 py-2"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%)]" style={{ backgroundSize: '100px 100px' }}></div>
      </div>

      {/* Reading progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Floating reading stats - Mobile */}
      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 z-40 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} md:hidden`}>
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-4 py-2 shadow-2xl flex items-center space-x-3 text-xs">
          <span className="text-slate-300">{Math.round(readingProgress)}% read</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-300">{estimatedReadTime} min read</span>
        </div>
      </div>

      {/* Floating reading stats - Desktop */}
      <div className={`fixed top-6 right-6 transition-all duration-500 z-40 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} hidden lg:block`}>
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-4 py-3 shadow-2xl">
          <div className="flex items-center space-x-4 text-sm text-slate-300">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{estimatedReadTime} min</span>
            </div>
            <div className="w-px h-4 bg-slate-700"></div>
            <div className="text-blue-400 font-medium">
              {Math.round(readingProgress)}%
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <article className="max-w-3xl mx-auto">
          <header className="mb-16 text-center">
            {/* Category badge */}
            <div className="inline-block mb-8">
              <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 backdrop-blur-sm">
                Web Development
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300">
              {title}
            </h1>
            
            {/* Author info */}
            <div className="flex flex-col items-center space-y-4 text-slate-300 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="flex items-center space-x-2 xs:space-x-4">
                <Avatar className="h-10 w-10 xs:h-12 xs:w-12 border-2 border-cyan-500/20">
                  <AvatarImage src={authorImage} alt={author} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    {author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium text-slate-200">{author}</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs">
                    <time dateTime={new Date(date).toISOString()} className="text-slate-400">
                      {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{estimatedReadTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Enhanced content area */}
          <div className="prose prose-lg prose-invert max-w-none
                      prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-24
                      prose-h1:text-5xl prose-h1:font-black prose-h1:mb-8 prose-h1:bg-gradient-to-r prose-h1:from-blue-100 prose-h1:to-blue-300 prose-h1:bg-clip-text prose-h1:text-transparent
                      prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:bg-gradient-to-r prose-h2:from-blue-200 prose-h2:to-blue-300 prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:border-l-4 prose-h2:border-blue-500/50 prose-h2:pl-6
                      prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-blue-200
                      prose-p:text-lg prose-p:leading-relaxed prose-p:text-blue-300 prose-p:my-6
                      prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors prose-a:duration-200
                      prose-strong:text-blue-100 prose-strong:font-semibold
                      prose-em:text-blue-200 prose-em:not-italic prose-em:bg-blue-800/50 prose-em:px-2 prose-em:py-1 prose-em:rounded
                      prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-blue-500/70 
                      prose-blockquote:bg-gradient-to-r prose-blockquote:from-blue-800/50 prose-blockquote:to-blue-800/30 
                      prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:rounded-r-xl prose-blockquote:text-blue-200 prose-blockquote:shadow-xl
                      prose-code:bg-blue-800/80 prose-code:text-blue-300 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-blue-700/50
                      prose-pre:bg-blue-900/90 prose-pre:border prose-pre:border-blue-700/50 prose-pre:shadow-2xl prose-pre:backdrop-blur-sm
                      prose-ul:space-y-3 prose-ol:space-y-3
                      prose-li:text-blue-300 prose-li:leading-relaxed
                      prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-blue-700/50">
            {children}
          </div>

          {/* Enhanced footer with author info */}
          <footer className="mt-20 pt-12 border-t border-slate-800/50">
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/30 shadow-2xl backdrop-blur-xl rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5"></div>
              <CardHeader className="pb-4 relative">
                <CardTitle className="text-2xl font-bold text-slate-100 flex items-center space-x-3">
                  <span>✨</span>
                  <span>About the Author</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-start space-x-6">
                  <Avatar className="h-20 w-20 ring-2 ring-slate-600/50 ring-offset-4 ring-offset-slate-900/50">
                    <AvatarImage src={authorImage} alt={author} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold">
                      {author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 mb-3">{author}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      Software developer and AI engineer building and scaling
                      full-stack web apps, AI-powered software, and e-commerce
                      websites. Passionate about creating elegant solutions to complex problems.
                    </p>
                    <div className="flex space-x-4">
                      {[
                        { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                        { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                        { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
                      ].map((social, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="group p-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50 rounded-xl transition-all duration-300 hover:scale-105"
                        >
                          <svg className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d={social.icon} />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter signup */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-100 mb-4">Stay in the loop</h3>
                <p className="text-slate-300 mb-6 max-w-md mx-auto">
                  Get notified when I publish new articles about web development and technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="flex-1 px-4 py-3 bg-slate-800/80 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}