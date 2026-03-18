import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroCity from "@/assets/hero-city.jpg";
import appScreenshot from "@/assets/app-screenshot.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroCity} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Urban Planning</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Design the{" "}
              <span className="text-primary text-glow">Cities</span>{" "}
              of Tomorrow
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Generate sustainable city layouts with AI. Simulate traffic, optimize green spaces, 
              and visualize urban plans in stunning 3D — all in your browser.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://smart-city-planner-gen-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary font-display font-semibold text-primary-foreground hover:brightness-110 transition-all box-glow"
              >
                Launch Planner
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border font-display font-medium text-foreground hover:bg-secondary transition-all"
              >
                Explore Features
              </a>
            </div>
          </motion.div>

          {/* Right - App screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-xl overflow-hidden border border-border box-glow animate-float">
              <img
                src={appScreenshot}
                alt="Smart City Planner application interface showing AI-generated city layout"
                className="w-full rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
