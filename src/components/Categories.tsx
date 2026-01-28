import { Palette, Users, Music, GraduationCap, Heart, Briefcase } from "lucide-react";

const categories = [
  {
    name: "Workshops",
    description: "Learn new skills and grow",
    icon: GraduationCap,
    count: 124,
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Meetups",
    description: "Connect with like-minded people",
    icon: Users,
    count: 89,
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Cultural",
    description: "Art, heritage & traditions",
    icon: Palette,
    count: 67,
    color: "bg-secondary/10 text-secondary",
  },
  {
    name: "Festivals",
    description: "Music, food & celebration",
    icon: Music,
    count: 45,
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Community",
    description: "Local activities & volunteering",
    icon: Heart,
    count: 156,
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Professional",
    description: "Networking & career growth",
    icon: Briefcase,
    count: 78,
    color: "bg-secondary/10 text-secondary",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Find events that match your interests and passions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
              <span className="text-xs font-medium text-primary">{category.count} events</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
