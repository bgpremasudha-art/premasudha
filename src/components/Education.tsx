import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Ph.D in Computer Science",
      institution: "Dr. MGR University, Chennai",
      thesis: "Visualization and Spatial Analysis of Healthcare Services of Tumkur City",
      year: "2010",
      guide: "Dr. B. Suryanarayana Adiga (Retd. Scientist from NAL, Bangalore)"
    },
    {
      degree: "M.Tech. (Computer Science and Engineering)",
      institution: "JNTU",
      year: "2006"
    },
    {
      degree: "B.E. (Electronics & Communication)",
      institution: "Bangalore University",
      year: "2002"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Educational Qualifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">{edu.institution} • {edu.year}</p>
                  </div>
                </div>
              </CardHeader>
              {(edu.thesis || edu.guide) && (
                <CardContent className="pt-0">
                  {edu.thesis && (
                    <div className="mb-2">
                      <p className="font-medium text-sm text-muted-foreground">Thesis:</p>
                      <p className="text-foreground">{edu.thesis}</p>
                    </div>
                  )}
                  {edu.guide && (
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Research Guide:</p>
                      <p className="text-foreground">{edu.guide}</p>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};