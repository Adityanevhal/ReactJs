import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Build a{" "}
            <span className="text-primary text-glow">Smarter City</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Join urban planners, architects, and visionaries using AI to design 
            sustainable cities. No account required — start planning now.
          </p>
          <a
            href="https://smart-city-planner-gen-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-lg bg-primary font-display text-lg font-semibold text-primary-foreground hover:brightness-110 transition-all box-glow"
          >
            Start Planning Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
