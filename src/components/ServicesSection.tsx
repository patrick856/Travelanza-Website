import { motion } from "framer-motion";
import { MessageSquare, FileText, Calendar, Bell } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Visa Consultation",
    description:
      "Expert guidance on visa types, requirements, and timelines tailored to your specific travel needs.",
  },
  {
    icon: FileText,
    title: "Document Preparation",
    description:
      "Comprehensive review and organization of all required documents to ensure a complete application.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "We handle embassy appointments and provide interview preparation to maximize your success.",
  },
  {
    icon: Bell,
    title: "Application Tracking",
    description:
      "Real-time status updates and follow-ups with embassies to keep you informed every step of the way.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium text-sm uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6"
          >
            Comprehensive Visa Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            From initial consultation to final approval, we support you through 
            every stage of the visa application process.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-navy-deep flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
