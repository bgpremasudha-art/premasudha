import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import { Education } from "@/components/Education";
import { Awards } from "@/components/Awards";
import { ResearchExpertise } from "@/components/ResearchExpertise";
import { FundedProjects } from "@/components/FundedProjects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />
      <Education />
      <Awards />
      <ResearchExpertise />
      <FundedProjects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm opacity-90">
            © 2024 Dr. Premasudha B G. Distinguished Educator & Researcher in Computer Science.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;