import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import type { MouseEvent } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/navigation-menu";

interface AnimatedHeroProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  badge?: React.ReactNode;
  background?: React.ReactNode;
}

// Mobile breakpoint for animations
const MOBILE_BREAKPOINT = 768;

export default function AnimatedHero({
  title: staticTitle,
  description: staticDescription,
  actions: staticActions,
  badge: staticBadge,
  background,
}: AnimatedHeroProps) {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };
      
      // Initial check
      checkMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkMobile);
      
      // Set mounted to true after initial render
      setIsMounted(true);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, []);

  const navItems = useMemo(
    () => [
      {
        name: "About",
        link: "/about",
        isAnchor: false
      },
      {
        name: "Services",
        link: "#services",
        isAnchor: true
      },
      {
        name: "Projects",
        link: "#projects",
        isAnchor: true
      },
      {
        name: "Contact",
        link: "#contact",
        isAnchor: true
      },
    ],
    [],
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Intelligent", "Automated", "Scalable", "Efficient", "Secure"],
    [],
  );

  // Only run title animation if not on mobile and no static title
  useEffect(() => {
    if (staticTitle || isMobile) return;
    
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles, staticTitle, isMobile]);

  // Register GSAP plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  function handleSmoothScroll(
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void {
    if (!href) return;

    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector<HTMLElement>(href);
      const offset = isMobile ? 100 : 80; // Larger offset for mobile to account for fixed header
      
      gsap.to(window, {
        duration: 0.8,
        ease: "power2.out",
        scrollTo: { y: target ?? 0, offsetY: offset },
      });
      
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    } else {
      // For absolute paths, use useNavigate for proper React Router handling
      e.preventDefault(); // Prevent default link behavior
      navigate(href);
    }
  }

  function handleScrollTo(targetHash: string): void {
    const target = document.querySelector<HTMLElement>(targetHash);
    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out",
      scrollTo: { y: target ?? 0, offsetY: 80 },
    });
  }

  const titleContent = staticTitle ? (
    staticTitle
  ) : (
    <>
      <span className="text-spektr-cyan-50">Building AI-Powered Web Experiences</span>
      <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
        &nbsp;
        {titles.map((title, index) => (
          <motion.span
            key={index}
            className="absolute font-semibold"
            initial={{ opacity: 0, y: "-100" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              titleNumber === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: titleNumber > index ? -150 : 150,
                    opacity: 0,
                  }
            }
          >
            {title}
          </motion.span>
        ))}
      </span>
    </>
  );

  const descriptionContent = staticDescription ? (
    <div className="text-base xs:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4">
      {staticDescription}
    </div>
  ) : (
    <p className="text-base xs:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4">
      I specialize in developing intelligent AI agents and modern, responsive web applications. Let's build something incredible together.
    </p>
  );

  const actionsContent = staticActions ? (
    <div className="flex flex-row gap-3">{staticActions}</div>
  ) : (
    <div className="flex flex-row gap-3">
      <Button size="lg" className="gap-4" variant="outline">
        Schedule a Consultation <PhoneCall className="w-4 h-4" />
      </Button>
      <Button
        size="lg"
        className="gap-4"
        onClick={() => handleScrollTo("#projects")}
      >
        View My Projects <MoveRight className="w-4 h-4" />
      </Button>
    </div>
  );

  const badgeContent = staticBadge ? (
    <div>{staticBadge}</div>
  ) : (
    <div>
      <Button
        variant="secondary"
        size="sm"
        className="gap-4"
        onClick={() => handleScrollTo("#services")}
      >
        Explore my work <MoveRight className="w-4 h-4" />
      </Button>
    </div>
  );

  // Skip rendering on server-side to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-background">
      {/* Background */}
      {background || (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,hsl(var(--background))_100%)]"></div>
        </div>
      )}

      {/* Navigation */}
      <Navbar className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border-/50">
        <NavBody className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavbarLogo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavItems 
                items={navItems} 
                onItemClick={handleSmoothScroll} 
                className="space-x-4 lg:space-x-6 px-3 py-2 text-sm sm:text-[15px] font-medium hover:text-primary transition-colors"
              />
            </div>
            
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-2 text-foreground/80 hover:text-foreground focus:outline-none"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div 
            className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              top: '4rem',
              height: 'calc(100vh - 4rem)',
              opacity: isMobileMenuOpen ? 1 : 0,
              pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
            }}
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    onClick={(e) => {
                      handleSmoothScroll(e, item.link);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xl font-medium text-foreground/90 hover:text-primary transition-colors py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              
              {staticActions || (
                <div className="mt-12 space-y-4">
                  <Button 
                    onClick={() => navigate("#contact")} 
                    className="w-full py-6 text-base font-medium"
                  >
                    Get in Touch
                    <MoveRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      window.location.href = 'tel:+1234567890';
                    }}
                    className="w-full py-6 text-base font-medium"
                  >
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                </div>
              )}
            </div>
          </div>
        </NavBody>
      </Navbar>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center pt-24 pb-16 px-4 sm:pt-32 sm:pb-24">
        <div className="container mx-auto max-w-4xl text-center">
          {badgeContent}
          <div className="flex flex-col items-center gap-6 mt-8">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              {titleContent}
            </h1>
            {descriptionContent}
            <div className="mt-8">
              {actionsContent}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}