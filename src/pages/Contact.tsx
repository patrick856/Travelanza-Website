import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+1 (555) 123-4567",
    href: "https://wa.me/15551234567",
    color: "bg-green-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "bg-navy-deep",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@travelanza.com",
    href: "mailto:hello@travelanza.com",
    color: "bg-gold",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "@travelanza",
    href: "https://facebook.com/travelanza",
    color: "bg-blue-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@travelanza",
    href: "https://instagram.com/travelanza",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 lg:pt-24">
        {/* Hero */}
        <section className="bg-gradient-hero py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-medium text-sm uppercase tracking-wider"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mt-4 mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            >
              Ready to start your visa journey? Reach out through any of our 
              channels and our team will get back to you within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 flex items-center gap-4"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-gold transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours & Location */}
        <section className="py-16 lg:py-24 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    Business Hours
                  </h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  * WhatsApp support available 24/7 for urgent inquiries
                </p>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground">
                    Our Location
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    <strong>Travelanza Visa Services</strong>
                    <br />
                    123 Travel Plaza, Suite 500
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                  <div className="h-48 bg-muted rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">
                      Interactive map available on Google Maps
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:underline font-medium"
                  >
                    Get Directions
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
