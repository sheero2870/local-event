import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedEvents from "@/components/FeaturedEvents";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import OrganizerCTA from "@/components/OrganizerCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedEvents />
        <Categories />
        <HowItWorks />
        <OrganizerCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
