import { Search, CalendarCheck, PartyPopper, Megaphone } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Events",
    description: "Browse local events by location, category, or date. Find exactly what you're looking for.",
  },
  {
    icon: CalendarCheck,
    title: "Get Details",
    description: "View event timing, venue, descriptions, and registration links—all in one place.",
  },
  {
    icon: PartyPopper,
    title: "Attend & Enjoy",
    description: "Register, show up, and make memories. Connect with your local community.",
  },
];

const organizerSteps = [
  {
    icon: Megaphone,
    title: "Create Your Event",
    description: "Set up your event with all the details—date, venue, description, and registration.",
  },
  {
    icon: Search,
    title: "Reach Your Audience",
    description: "Get discovered by users actively searching for events like yours.",
  },
  {
    icon: PartyPopper,
    title: "Grow Participation",
    description: "Increase visibility and engagement with a dedicated audience ready to attend.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Simple, fast, and effective—for both attendees and organizers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* For Attendees */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center md:text-left">
              For Attendees
            </h3>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Organizers */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center md:text-left">
              For Organizers
            </h3>
            <div className="space-y-8">
              {organizerSteps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <step.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-accent">Step {index + 1}</span>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
