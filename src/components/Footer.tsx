import { Plane, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTop: true } });
      }
      return;
    }
  }

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-3 group mb-6"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("/");
              }}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform bg-white flex items-center justify-center" style={{ boxShadow: "0 0 8px 1px rgba(212, 175, 55, 0.5)" }}>
                <img src="/logo.png" alt="Travelanza logo" className="w-7 h-7" />
              </div>
              <span className="text-xl font-serif font-bold ">
                Travelanza
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Your trusted partner in visa assistance. We simplify the visa process
              so you can focus on planning your journey.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-deep transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/travel_anza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-deep transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#reviews" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold" />
                <span>hello@travelanza.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} Travelanza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
