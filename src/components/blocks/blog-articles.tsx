import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from '../ui/card';

const BlogArticles: React.FC = () => {
  return (
    <section id="blog" className="scroll-mt-24 w-full mt-10 opacity-0">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Blog & Articles</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mt-3">
          Insights, tutorials, and thoughts on technology and design.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[80%] lg:max-w-[50%] mx-auto">
        <Card>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
            React: The Game-Changer for UI Development
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6">
            A deep dive into the library that revolutionized front-end development, from my personal journey to its core concepts.
          </p>
          <Link to="/blog/post-1">
            <Button
              className="border rounded-[0.75rem] text-sm"
            >
              Read More
            </Button>
          </Link>
        </Card>

        <Card>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
            My Secret Weapon for Staying Ahead in Web Development
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6">
            Discover the resources I use to keep my skills sharp and stay on top of the ever-changing world of web development.
          </p>
          <Link to="/blog/post-2">
            <Button
              className="border rounded-[0.75rem] text-sm"
            >
              Explore Journey
            </Button>
          </Link>
        </Card>

        <Card>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
            CSS-Tricks: More Than Just CSS
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6">
            An ode to one of the most valuable resources for front-end developers, and how it has helped me throughout my career.
          </p>
          <Link to="/blog/post-3">
            <Button
              className="border rounded-[0.75rem] text-sm"
            >
              Discover Trends
            </Button>
          </Link>
        </Card>

        <Card>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
            SitePoint: A Developer's Learning Playground
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6">
            A look at the platform that has been my companion in the journey of continuous learning as a software developer.
          </p>
          <Link to="/blog/post-4">
            <Button
              className="border rounded-[0.75rem] text-sm"
            >
              Learn UI/UX
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default BlogArticles;