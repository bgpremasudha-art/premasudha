import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Users, Calendar, CheckCircle } from "lucide-react";

export const FundedProjects = () => {
  const projects = [
    {
      title: "Krishi Ganaka – A Kiosk aided soil fertilizer recommendation system for different crops of Tumkur District, Karnataka",
      fundingAgency: "VGST – RFTT Programme",
      amount: "Rs. 5 Lakh",
      year: "2017",
      status: "Completed",
      role: "Principal Investigator"
    },
    {
      title: "Online Fertilizer Recommendation Through STCR approach for Tumkur District of Karnataka",
      fundingAgency: "Director of Research (DR) GRANTS, University of Agricultural Sciences, GKVK, Bangalore",
      amount: "Rs. 5 Lakh",
      year: "2018-19",
      status: "Completed",
      role: "Co-Principal Investigator"
    },
    {
      title: "Pineapple ethrelu applicator",
      fundingAgency: "University of Agricultural and Horticultural Sciences (UAHS), Shivamoga",
      year: "2016",
      status: "Completed",
      role: "Guide & Executor",
      description: "Collaborative work with MOU to help farmers deliver calibrated amount of nutrients to pineapple flowers"
    },
    {
      title: "Mobile Value Added Services to Citizens",
      fundingAgency: "ICT Skill Development Society, Department of IT,BT and S & T, Govt. of Karnataka, NAIN",
      amount: "Rs. 3 Lakh",
      year: "2015",
      status: "Completed",
      role: "Mentor"
    },
    {
      title: "IFRT- Innovative fertilizer recommendation for Tumkur district using computerized kiosk system",
      fundingAgency: "ICT Skill Development Society, Department of IT,BT and S & T, Govt. of Karnataka, NAIN",
      amount: "Rs. 3 Lakh",
      year: "2016",
      status: "Completed",
      role: "Mentor"
    },
    {
      title: "Automatic medication dispenser",
      fundingAgency: "ICT Skill Development Society, Department of IT,BT and S & T, Govt. of Karnataka, NAIN",
      amount: "Rs. 3 Lakh",
      year: "2016",
      status: "Completed",
      role: "Mentor"
    },
    {
      title: "Value added products of Ragi",
      fundingAgency: "ICT Skill Development Society, Department of IT,BT and S & T, Govt. of Karnataka, NAIN",
      amount: "Rs. 3 Lakh",
      year: "2016",
      status: "Completed",
      role: "Mentor"
    },
    {
      title: "Detection of bread spoilage using sensors",
      fundingAgency: "VGST- SPICE",
      year: "2013-14",
      status: "Completed",
      role: "Mentor",
      description: "Student project in collaboration with Bapujee First Grade College, Tumkur"
    }
  ];

  const totalFunding = projects
    .filter(p => p.amount)
    .reduce((sum, p) => {
      const amount = parseFloat(p.amount.replace(/[^\d.]/g, ''));
      return sum + amount;
    }, 0);

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Funded Research Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <Card className="shadow-card">
              <CardContent className="text-center py-6">
                <div className="flex items-center justify-center mb-2">
                  <IndianRupee className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{totalFunding}</div>
                <div className="text-sm text-muted-foreground">Total Funding (Lakhs)</div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="text-center py-6">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{projects.length}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="text-center py-6">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
                <div className="text-2xl font-bold text-success">
                  {projects.filter(p => p.status === "Completed").length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg text-primary leading-tight flex-1">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="shrink-0"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Funding Agency:</p>
                  <p className="text-sm text-foreground">{project.fundingAgency}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.amount && (
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Amount:</p>
                      <p className="text-sm font-semibold text-primary">{project.amount}</p>
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Year:</p>
                    <p className="text-sm text-foreground">{project.year}</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Role:</p>
                    <p className="text-sm text-foreground">{project.role}</p>
                  </div>
                </div>

                {project.description && (
                  <div>
                    <p className="font-medium text-sm text-muted-foreground">Description:</p>
                    <p className="text-sm text-foreground">{project.description}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};