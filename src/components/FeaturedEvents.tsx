import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const events = [
  {
    title: "Tech Startup Weekend",
    category: "Workshop",
    date: "Feb 15, 2025",
    time: "9:00 AM",
    location: "Innovation Hub, Downtown",
    attendees: 156,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    title: "Community Art Fair",
    category: "Cultural",
    date: "Feb 18, 2025",
    time: "10:00 AM",
    location: "Central Park Pavilion",
    attendees: 89,
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "JavaScript Meetup",
    category: "Meetup",
    date: "Feb 20, 2025",
    time: "6:30 PM",
    location: "Code Cafe",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Spring Music Festival",
    category: "Festival",
    date: "Feb 22, 2025",
    time: "4:00 PM",
    location: "Riverside Amphitheater",
    attendees: 312,
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Yoga in the Park",
    category: "Community",
    date: "Feb 23, 2025",
    time: "7:00 AM",
    location: "Green Valley Park",
    attendees: 67,
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&auto=format&fit=crop&q=80",
  },
];

const FeaturedEvents = () => {
  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Discover the hottest events happening near you this week
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            View All Events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
