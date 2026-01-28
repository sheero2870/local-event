import { Zap, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-secondary-foreground">
                Local Event Blitz
              </span>
            </a>
            <p className="text-secondary-foreground/70 mb-4">
              Connecting communities through amazing local events. Discover, attend, and create memorable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#events" className="text-secondary-foreground/70 hover:text-primary transition-colors">Browse Events</a></li>
              <li><a href="#categories" className="text-secondary-foreground/70 hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#how-it-works" className="text-secondary-foreground/70 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#organizers" className="text-secondary-foreground/70 hover:text-primary transition-colors">For Organizers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-secondary-foreground/70">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@localeventblitz.com</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/70">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-foreground/70">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>123 Event Street, Community City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © 2025 Local Event Blitz. All rights reserved.
            </p>
            <p className="text-secondary-foreground/50 text-sm">
              Building stronger communities, one event at a time ⚡
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
