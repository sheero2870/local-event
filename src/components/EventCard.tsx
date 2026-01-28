import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image: string;
  featured?: boolean;
}

const EventCard = ({ title, category, date, time, location, attendees, image, featured = false }: EventCardProps) => {
  return (
    <div className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className={`font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
            <span className="text-border">•</span>
            <Clock className="w-4 h-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4 text-accent" />
            <span>{attendees} attending</span>
          </div>
        </div>
        
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
