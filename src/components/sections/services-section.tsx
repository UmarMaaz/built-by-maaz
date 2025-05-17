
import { FadeInWhenVisible, StaggerChildren, StaggerItem } from "@/components/motion-components";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Code, Database, BarChart } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: "AI Driven Tools",
      description: "Custom solutions powered by Large Language Models to automate tasks, generate content, analyze data, and more.",
      features: ["Chatbots & Virtual Assistants", "Content Generation", "Data Analysis", "Workflow Automation"]
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web & Mobile Apps",
      description: "Beautiful, responsive websites and mobile applications built with modern frameworks and clean code.",
      features: ["Static Websites", "CRUD Applications", "Portfolio Sites", "E-commerce Solutions"]
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Engineering",
      description: "Efficiently manage your data with ETL pipelines, data cleaning, and transformation services.",
      features: ["ETL Pipeline Setup", "Data Cleaning", "Data Migration", "Schema Design"]
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Data Visualization",
      description: "Turn your data into actionable insights with custom dashboards and visualization tools.",
      features: ["Interactive Dashboards", "Chart Creation", "Real-time Analytics", "Report Generation"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions tailored to your specific needs, powered by modern technology and AI.
            </p>
          </div>
        </FadeInWhenVisible>

        <StaggerChildren>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-background rounded-xl shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="ghost" className="group" asChild>
                      <a href="#contact">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
