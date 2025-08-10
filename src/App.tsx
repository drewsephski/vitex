import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedHero from "@/components/ui/animated-hero";
import { Features } from "@/components/blocks/features-8";
import { Projects } from "@/components/blocks/projects";
import { ContactForm } from "@/components/blocks/contact-form";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./lib/blobity.config";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import BlogArticles from "@/components/blocks/blog-articles";
import BlogPost1 from "@/pages/blog/blog-post-1";
import BlogPost2 from "@/pages/blog/blog-post-2";
import BlogPost3 from "@/pages/blog/blog-post-3";
import BlogPost4 from "@/pages/blog/blog-post-4";
import About from "@/pages/About";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Custom hook for scroll animations
const useScrollAnimations = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true
          }
        }
      );
    });

    // Smooth background gradient shift on scroll
    gsap.to(document.body, {
      backgroundPosition: '0% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = e.target as HTMLAnchorElement;
      if (!anchor.matches('a[href^="#"]')) return;
      
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Add event listener for anchor clicks
    document.body.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return scrollContainerRef;
};

// Home component that handles scroll behavior
const Home = () => {
  const scrollContainerRef = useScrollAnimations();
  const location = useLocation();

  useEffect(() => {
    // Handle scroll-to behavior for hash links
    const handleHashNavigation = () => {
      const { hash } = window.location;
      if (hash) {
        const targetId = hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          // Small timeout to ensure the page has rendered
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      } else if (location.state?.scrollToTop) {
        // Scroll to top when navigating to a new page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Initial check on mount
    handleHashNavigation();

    // Listen to popstate for browser back/forward navigation
    window.addEventListener('popstate', handleHashNavigation);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleHashNavigation);
    };
  }, [location]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex min-h-dvh flex-col items-center justify-start"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background)/.8) 100%)',
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%',
        overflow: 'auto'
      }}
    >
      <AnimatedHero />
      <section id="services" className="w-full">
        <Features />
      </section>
      <section id="projects" className="w-full">
        <Projects />
      </section>
      <section id="blog" className="w-full">
        <BlogArticles />
      </section>
      <section id="contact" className="w-full">
        <ContactForm />
      </section>
    </div>
  );
};

// Main App component
function App() {
  const blobity = useBlobity(initialBlobityOptions);

  useEffect(() => {
    // Blobity initialization
    if (blobity) {
      // Blobity is already initialized by the useBlobity hook
    }
  }, [blobity]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/post-1" element={<BlogPost1 />} />
          <Route path="/blog/post-2" element={<BlogPost2 />} />
          <Route path="/blog/post-3" element={<BlogPost3 />} />
          <Route path="/blog/post-4" element={<BlogPost4 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
