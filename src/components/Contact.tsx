import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, Award, Users } from "lucide-react";

export const Contact = () => {
  const memberships = [
    "Fellow of Institute of Engineers (F-1206776)",
    "Member ISTE",
    "Member CSI"
  ];

  const certifications = [
    "NPTEL certificate on Developing soft skills and personality",
    "NPTEL certificate on Cloud Computing"
  ];

  const links = [
    {
      platform: "Scopus",
      url: "https://www.scopus.com/authid/detail.uri?authorId=55551860600",
      icon: <Globe className="h-4 w-4" />
    },
    {
      platform: "ORCID",
      url: "https://orcid.org/0000-0002-4167-2829",
      icon: <Globe className="h-4 w-4" />
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Profile & Contact
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Professional Memberships */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                Professional Memberships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {memberships.map((membership, index) => (
                <Badge key={index} variant="outline" className="w-full text-left justify-start p-2">
                  {membership}
                </Badge>
              ))}
            </CardContent>
          </Card>

          {/* Recent Certifications */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                Recent Certifications (2023-24)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="w-full text-left justify-start p-2">
                  {cert}
                </Badge>
              ))}
            </CardContent>
          </Card>

          {/* Research Profile Links */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Globe className="h-5 w-5" />
                Research Profiles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {links.map((link, index) => (
                <div key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                  >
                    {link.icon}
                    <span className="text-sm">{link.platform} Profile</span>
                  </a>
                </div>
              ))}
              
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground mb-2">Publications: 72</p>
                <p className="text-sm text-muted-foreground mb-2">Citations: 455</p>
                <p className="text-sm text-muted-foreground">H-Index: 9</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* VTU Research Guidance */}
        <Card className="max-w-4xl mx-auto mt-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-center">
              <Users className="h-5 w-5" />
              VTU Research Guidance (Ph.D)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              Approved as Research Guide at VTU, Belagavi, in Computer Science and Engineering & MCA
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Completed (5 Ph.D awarded)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Optimal Spatial Distribution of Sensor Nodes in WSN (2016)</li>
                  <li>• Secured Location Based Routing for MANETs (2018)</li>
                  <li>• Routing Protocols in VANET (2019)</li>
                  <li>• Online Fertilizer Recommendation System (2022)</li>
                  <li>• Computer Aided Epileptic Disease Detection (2023)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Ongoing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• IoT Based Smart Farming</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="max-w-2xl mx-auto mt-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-center text-primary">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              For research collaborations, academic consultations, or professional inquiries
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Mail className="h-5 w-5" />
                <span>Available for professional correspondence</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="h-5 w-5" />
                <span>Siddaganga Institute of Technology, Tumkur</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};