import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Photos = () => {
  const photoCategories = [
    { title: "Our First Date", emoji: "💜", count: 5 },
    { title: "Adventures Together", emoji: "🌍", count: 8 },
    { title: "Cozy Moments", emoji: "🏠", count: 12 },
    { title: "Celebrations", emoji: "🎉", count: 6 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-calligraphy text-gradient mb-4">
              Our Memories 📸
            </h1>
            <p className="text-xl text-muted-foreground font-calligraphy">
              Every picture tells our story
            </p>
          </div>

          {/* Photo Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {photoCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 hover:border-accent/40 transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{category.emoji}</div>
                <h3 className="text-2xl font-calligraphy text-gradient mb-2">{category.title}</h3>
                <p className="text-muted-foreground font-calligraphy">{category.count} photos</p>
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div 
                key={index}
                className="aspect-square bg-card rounded-lg border border-border hover:border-primary transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src="/placeholder.svg"
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground font-calligraphy mt-12">
            Upload your photos here to fill this gallery with our beautiful memories 💜
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Photos;