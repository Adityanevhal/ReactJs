import { motion } from "framer-motion";
import { Brain, Play, BarChart3, Layers, TreePine, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI City Generator",
    description: "Describe your ideal city and let AI generate a complete sustainable urban layout with zoning, roads, and green spaces.",
  },
  {
    icon: Play,
    title: "Traffic Simulation",
    description: "Run real-time simulations to test traffic flow, identify bottlenecks, and optimize transit networks before breaking ground.",
  },
  {
    icon: Layers,
    title: "3D Visualization",
    description: "Switch between 2D grid and immersive 3D views to explore your city design from every angle.",
  },
  {
    icon: BarChart3,
    title: "Urban Metrics",
    description: "Track sustainability scores, population density, walkability, and dozens of other urban planning metrics.",
  },
  {
    icon: TreePine,
    title: "Green Space Optimization",
    description: "Set green space targets and let the AI balance parks, urban forests, and recreational areas across your layout.",
  },
  {
    icon: Zap,
    title: "Quick Presets",
    description: "Start from pre-built templates like Eco City, Tech Hub, or Transit-First and customize to your needs.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to plan, simulate, and visualize the cities of the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:box-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
