
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "@/components/motion-components";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Director",
      content: "Working with Maaz was an excellent experience. The AI solution delivered exceeded our expectations and significantly improved our content strategy efficiency.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Michael Chen",
      title: "Startup Founder",
      content: "Maaz built our company website and integrated a custom dashboard. The attention to detail and technical knowledge helped us launch faster than expected.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Lisa Rodriguez",
      title: "Data Analyst",
      content: "The data visualization dashboard created by Maaz transformed how we interpret our metrics. Clean code, intuitive design, and excellent communication throughout.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Discover what clients have to say about working with Maaz.AI.
            </p>
          </div>
        </FadeInWhenVisible>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full border-border hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.content}"</p>
                    
                    <div className="flex items-center mt-auto">
                      <div className="mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
