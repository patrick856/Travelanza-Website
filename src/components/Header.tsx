import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If navigation included a scroll target in state, or a hash, scroll to it.
    const state = (location as any).state;
    const hash = location.hash;
    const scrollToId = state?.scrollTo || (hash ? hash.replace("#", "") : null);
    const scrollTop = state?.scrollTop;

    if (scrollTop) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }

    if (scrollToId) {
      // Wait a tick for the DOM to render
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }

    // Clear the history state so this only runs once
    if (scrollTop || scrollToId) {
      try {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (window.location.hash || ""));
      } catch (e) {
        /* noop */
      }
    }
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.hash === href.replace("/", "");
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href.includes("#")) {
      const elementId = href.split("#")[1];
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home and pass desired scroll target in state
        navigate("/", { state: { scrollTo: elementId } });
      }
      return;
    }

    if (href === "/contact") {
      if (location.pathname === "/contact") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/contact", { state: { scrollTop: true } });
      }
      return;
    }

    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTop: true } });
      }
      return;
    }

    // Fallback navigation for other routes
    navigate(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/");
            }}
          >
            <div className="w-11 h-11 rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
              <img src="/logo.png" alt="Travelanza logo" className="w-full h-full" />
            </div>
            <span className="text-xl font-serif font-bold text-foreground">
              Travelanza
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="gold" size="lg" asChild>
              <Link
                to="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("/contact");
                }}
              >
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-base font-medium py-2 ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="gold" size="lg" className="mt-2" asChild>
                <Link
                  to="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("/contact");
                  }}
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
