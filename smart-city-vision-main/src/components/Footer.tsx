import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" />
          <span className="font-display font-semibold">Smart City Planner</span>
        </div>
        <p className="text-sm text-muted-foreground">
          AI-Powered Urban Planning · Built for a sustainable future
        </p>
      </div>
    </footer>
  );
};

export default Footer;
