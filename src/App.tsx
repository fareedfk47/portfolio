import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoOverview } from './components/BentoOverview';
import { FeaturedProject } from './components/FeaturedProject';
import { OtherProjects } from './components/OtherProjects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian-bg text-text-primary flex flex-col font-sans selection:bg-accent-primary selection:text-white">
      {/* Fixed Header */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Stream */}
      <main className="flex-1 w-full relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <BentoOverview />
        <FeaturedProject />
        <OtherProjects />
        <About />
        <Skills />
        <Experience />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
