import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    country: "USA → France",
    text: "Travelanza made my Schengen visa process incredibly smooth. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    country: "Canada → Japan",
    text: "Professional service and constant updates kept me informed throughout the entire process.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    country: "UK → Australia",
    text: "Got my Australian visa approved on the first try thanks to their expert guidance.",
    rating: 5,
  },
  {
    name: "David Kim",
    country: "India → Germany",
    text: "The team went above and beyond to ensure all my documents were perfect.",
    rating: 5,
  },
  {
    name: "Anna Petrova",
    country: "Russia → UAE",
    text: "Fast, reliable, and stress-free. Exactly what I needed for my business visa.",
    rating: 5,
  },
  {
    name: "James Wilson",
    country: "Australia → UK",
    text: "Outstanding support! They answered all my questions promptly and professionally.",
    rating: 5,
  },
];

// Duplicate for seamless scroll
const allReviews = [...reviews, ...reviews];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-navy-deep overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium text-sm uppercase tracking-wider"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mt-4 mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/70"
          >
            Thousands of travelers have trusted us with their visa applications. 
            Here's what they have to say.
          </motion.p>
        </div>
      </div>

      {/* Scrolling Reviews */}
      <div className="relative">
        <div className="flex animate-scroll-left gap-6 py-4">
          {allReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/90 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-primary-foreground">{review.name}</p>
                <p className="text-sm text-gold">{review.country}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-deep to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-deep to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default ReviewsSection;
