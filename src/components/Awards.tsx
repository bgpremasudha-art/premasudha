import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star } from "lucide-react";

export const Awards = () => {
  const awards = [
    {
      title: "Women Achiever Award 2023",
      organization: "Institute of Engineers (IEI) – Tumkur Local Centre",
      year: "2023",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-yellow-500"
    },
    {
      title: "Best PhD Thesis Supervisor Award 2021",
      organization: "Board for IT Education Standards (BITES)",
      description: "For the thesis titled 'Online Fertilizer Recommendation for Different Crops of Tumkur District through GPS-GIS based Fertility Maps'",
      year: "2021",
      icon: <Award className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Certificate of Recognition 2021",
      organization: "Shikshak Kalyan Foundation",
      description: "Outstanding performance in the field of Women Empowerment",
      year: "2021",
      icon: <Star className="h-6 w-6" />,
      color: "bg-purple-500"
    },
    {
      title: "Distinguished Educator Award 2015",
      organization: "National Foundation for Entrepreneurship Development (NFED)",
      year: "2015",
      icon: <Award className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      title: "3rd Best Paper Award 2007",
      organization: "International Conference and Indo-Canadian Satellite Symposium on Pharmaceutical Sciences",
      location: "Ooty, India",
      year: "2007",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-orange-500"
    },
    {
      title: "Travel Grant 2007",
      organization: "AICTE, New Delhi",
      description: "To present paper at International Conference, MAP MIDDLE EAST-2007",
      year: "2007",
      icon: <Star className="h-6 w-6" />,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="awards" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Awards & Honors
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {awards.map((award, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className={`p-3 rounded-lg text-white ${award.color}`}>
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {award.year}
                    </Badge>
                    <CardTitle className="text-lg text-primary leading-tight">
                      {award.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="font-medium text-sm text-muted-foreground mb-2">
                  {award.organization}
                </p>
                {award.location && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {award.location}
                  </p>
                )}
                {award.description && (
                  <p className="text-sm text-foreground">
                    {award.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};