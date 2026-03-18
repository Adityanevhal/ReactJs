import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Describe Your Vision", description: "Enter population targets, green space goals, and city priorities in natural language." },
  { number: "02", title: "AI Generates Layout", description: "Our AI engine creates an optimized city grid with zoning, transit, and infrastructure." },
  { number: "03", title: "Simulate & Refine", description: "Run traffic simulations, compare layouts, and fine-tune parameters until it's perfect." },
  { number: "04", title: "Export & Share", description: "Download PDF reports, export your design, and share your vision with stakeholders." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-32 bg-surface-elevated/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From idea to sustainable city plan in minutes, not months.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              <span className="font-display text-6xl font-bold text-primary/10">{step.number}</span>
              <h3 className="font-display text-xl font-semibold mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-px bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
