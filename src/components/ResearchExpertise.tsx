import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Database, 
  Brain, 
  MapPin, 
  Heart, 
  Cpu, 
  Wifi, 
  BarChart3 
} from "lucide-react";

export const ResearchExpertise = () => {
  const expertiseAreas = [
    {
      area: "Cloud Computing",
      description: "Specializing in cloud-based systems, particularly in healthcare and agriculture applications",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      area: "Data Analytics", 
      description: "Analyzing large datasets including health records and soil fertility data for meaningful insights",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      area: "Artificial Intelligence & Machine Learning",
      description: "Applying AI and ML techniques in medical diagnosis and precision agriculture",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-purple-500"
    },
    {
      area: "Geographical Information Systems (GIS)",
      description: "Leveraging GIS for precision agriculture, soil testing and crop yield recommendations",
      icon: <MapPin className="h-6 w-6" />,
      color: "bg-orange-500"
    },
    {
      area: "Healthcare Systems",
      description: "Development of cloud-based electronic health records and AI diagnostic tools",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-500"
    },
    {
      area: "Agricultural Informatics",
      description: "Developing apps and systems for soil health data, fertilizer recommendations, and yield optimization",
      icon: <Cpu className="h-6 w-6" />,
      color: "bg-amber-500"
    }
  ];

  const researchAreas = [
    "Wireless Sensor Networks",
    "MANET and VANET", 
    "Location Based Services",
    "Spatial Data Analysis",
    "Geographic Information Systems",
    "Artificial Intelligence",
    "Data Analytics",
    "Cloud Computing",
    "IoT",
    "Deep Learning"
  ];

  const publications = {
    total: 72,
    citations: 455,
    hIndex: 9,
    i10Index: 7,
    internationalJournals: 41,
    scopusIndexed: 18,
    nationalJournals: 1,
    internationalConferences: 26,
    nationalConferences: 4
  };

  return (
    <section id="research" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Research & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Publication Metrics */}
        <Card className="max-w-4xl mx-auto mb-12 shadow-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary">
              Research Impact Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">{publications.total}</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{publications.citations}</div>
                <div className="text-sm text-muted-foreground">Citations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{publications.hIndex}</div>
                <div className="text-sm text-muted-foreground">H-Index</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{publications.scopusIndexed}</div>
                <div className="text-sm text-muted-foreground">Scopus Indexed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Areas of Expertise */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertiseAreas.map((expertise, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg text-white ${expertise.color}`}>
                      {expertise.icon}
                    </div>
                    <CardTitle className="text-lg text-primary">
                      {expertise.area}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {expertise.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Research Interest Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {researchAreas.map((area, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};