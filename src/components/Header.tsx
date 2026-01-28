import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Local Event <span className="text-gradient">Blitz</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Events
          </a>
          <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Categories
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            How It Works
          </a>
          <a href="#organizers" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            For Organizers
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost">Log In</Button>
          <Button variant="hero">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              Events
            </a>
            <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              Categories
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              How It Works
            </a>
            <a href="#organizers" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              For Organizers
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full">Log In</Button>
              <Button variant="hero" className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
