import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <section className="relative bg-gradient-primary text-primary-foreground py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary opacity-90"></div>
      <div className="relative container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Dr. Premasudha B G
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Ph.D in Computer Science | Research Guide | Academic Leader
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Fellow of Institute of Engineers
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              VTU Research Guide
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              72 Publications
            </Badge>
          </div>
          <Card className="max-w-4xl mx-auto p-6 bg-card/90 backdrop-blur-sm">
            <p className="text-card-foreground leading-relaxed">
              Distinguished educator and researcher specializing in Computer Science with expertise in 
              Cloud Computing, Data Analytics, Artificial Intelligence, GIS, and Healthcare Systems. 
              Recognized with multiple awards including the Women Achiever Award 2023 and Best PhD 
              Thesis Supervisor Award 2021.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};