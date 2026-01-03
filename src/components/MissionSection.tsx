import { motion } from "framer-motion";
import { Target } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-8 shadow-gold">
            <Target className="w-8 h-8 text-navy-deep" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">
            Our Mission
          </h2>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
            To remove barriers to travel by simplifying the visa process. We believe 
            everyone deserves to explore the world without the stress of paperwork 
            and bureaucratic hurdles. Our mission is to make international travel 
            accessible through expert guidance and unwavering support.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl lg:text-5xl font-serif font-bold text-gradient-gold">10K+</p>
              <p className="text-muted-foreground mt-2">Happy Travelers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl lg:text-5xl font-serif font-bold text-gradient-gold">98%</p>
              <p className="text-muted-foreground mt-2">Success Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <p className="text-4xl lg:text-5xl font-serif font-bold text-gradient-gold">50+</p>
              <p className="text-muted-foreground mt-2">Countries Covered</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
