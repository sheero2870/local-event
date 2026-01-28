import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Reach thousands of local event seekers",
  "Easy event creation and management",
  "Real-time analytics and insights",
  "Direct communication with attendees",
];

const OrganizerCTA = () => {
  return (
    <section id="organizers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Host Your Event?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8">
                Join hundreds of organizers who trust Local Event Blitz to promote their events and connect with passionate attendees.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="xl" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Start Creating Events
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex flex-col justify-center items-center">
                  <div className="text-center">
                    <div className="font-display text-6xl font-bold text-primary-foreground mb-2">1,500+</div>
                    <div className="text-primary-foreground/80 text-lg">Events Created</div>
                  </div>
                  <div className="w-full h-px bg-white/20 my-6" />
                  <div className="text-center">
                    <div className="font-display text-6xl font-bold text-primary-foreground mb-2">50K+</div>
                    <div className="text-primary-foreground/80 text-lg">Tickets Registered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerCTA;
