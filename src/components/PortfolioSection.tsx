import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stores = [
  {
    name: "BIXTORE Arts & Living",
    description: "Premium Lifestyle Goods",
    image: "/lovable-uploads/8554aa2d-e64a-438f-8bcb-072be04cda29.png",
    logo: "/lovable-uploads/17644bb9-3a27-4dec-815a-a688892dbb11.png",
    link: "https://bixports.com"
  },
  {
    name: "The Big Sports",
    description: "Affordable Sporting Gears",
    image: "/lovable-uploads/f6dfee09-e03e-41d2-9a50-6f5fd5547289.png",
    logo: "/lovable-uploads/c246f473-4905-48d0-b2ac-7d64d13d3ca8.png",
    link: "https://bixtore.com"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio-section" className="py-20 bg-gradient-to-b from-purple-50/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Discover Our Brands</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stores.map((store, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0 relative">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2">
                  {store.logo && (
                    <img
                      src={store.logo}
                      alt={`${store.name} Logo`}
                      className="w-16 h-auto mb-0"
                    />
                  )}
                  <h3 className="text-2xl font-bold text-white mb-0.5">{store.name}</h3>
                  <p className="text-white/90 mb-2">{store.description}</p>
                  <a href={store.link} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      className="hover:bg-[#9b87f5] hover:text-white transition-colors"
                    >
                      Visit Store
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;