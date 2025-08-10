import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from '../ui/card';

const BlogArticles: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "React: The Game-Changer for UI Development",
      excerpt: "A deep dive into the library that revolutionized front-end development, from my personal journey to its core concepts.",
      buttonText: "Read More",
      route: "/blog/post-1",
      category: "React",
      readTime: "5 min read",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "My Secret Weapon for Staying Ahead in Web Development",
      excerpt: "Discover the resources I use to keep my skills sharp and stay on top of the ever-changing world of web development.",
      buttonText: "Explore Journey",
      route: "/blog/post-2",
      category: "Learning",
      readTime: "7 min read",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "CSS-Tricks: More Than Just CSS",
      excerpt: "An ode to one of the most valuable resources for front-end developers, and how it has helped me throughout my career.",
      buttonText: "Discover Trends",
      route: "/blog/post-3",
      category: "CSS",
      readTime: "4 min read",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "SitePoint: A Developer's Learning Playground",
      excerpt: "A look at the platform that has been my companion in the journey of continuous learning as a software developer.",
      buttonText: "Learn UI/UX",
      route: "/blog/post-4",
      category: "Resources",
      readTime: "6 min read",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="blog" className="scroll-mt-24 w-full mt-10 opacity-0">
      <div className="mb-16 text-center">
        <div className="inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 relative">
            Blog & Articles
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
          Insights, tutorials, and thoughts on technology and design.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {blogPosts.map((post) => (
          <Card 
            key={post.id}
            className="group relative overflow-hidden bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl"
          >
            {/* Gradient overlay */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${post.gradient}`}></div>
            
            {/* Category badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${post.gradient} shadow-lg`}>
                {post.category}
              </span>
            </div>

            <div className="p-8 relative">
              {/* Read time indicator */}
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500 mr-2"></div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {post.title}
              </h2>
              
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <Link to={post.route} className="flex-1">
                  <Button
                    className={`w-full bg-gradient-to-r ${post.gradient} hover:shadow-lg hover:shadow-blue-500/25 text-white border-0 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95`}
                  >
                    {post.buttonText}
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/10 group-hover:to-purple-50/10 dark:group-hover:from-blue-900/10 dark:group-hover:to-purple-900/10 transition-all duration-500 pointer-events-none rounded-2xl"></div>
          </Card>
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-center mt-16">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;