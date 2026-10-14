import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-obsidian-border/50">
      
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
          <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
            05 // Qualifications
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Education &amp; Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Education Card */}
        <div className="rounded-xl bg-obsidian-surfaceLow border border-obsidian-border p-6 sm:p-8 flex flex-col justify-between hover:border-obsidian-borderInteractive transition-colors card-bevel">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-obsidian-borderSubtle">
              <span className="font-mono text-[11px] text-accent-primary uppercase tracking-wider font-medium">
                Formal Degree
              </span>
              <GraduationCap className="w-5 h-5 text-text-muted" />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary">
                {educationData.degree}
              </h3>
              <p className="font-sans text-sm font-semibold text-accent-primaryLight">
                {educationData.institution}
              </p>
              <p className="font-mono text-xs text-text-muted">
                {educationData.university}
              </p>
            </div>

            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed pt-1">
              Coursework in core computing fundamentals: Data Structures, Analysis of Algorithms, Database Management Systems, Object-Oriented Software Engineering, and Operating Systems.
            </p>
          </div>

          <div className="pt-5 border-t border-obsidian-borderSubtle flex items-center justify-between text-xs font-mono">
            <span className="text-text-primary font-medium">Graduated: {educationData.graduationYear}</span>
            <span className="px-2.5 py-1 rounded bg-obsidian-surface text-accent-secondary border border-obsidian-border font-semibold">
              CGPA: {educationData.cgpa} / 10
            </span>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="rounded-xl bg-obsidian-surfaceLow border border-obsidian-border p-6 sm:p-8 flex flex-col justify-between hover:border-obsidian-borderInteractive transition-colors card-bevel">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-obsidian-borderSubtle">
              <span className="font-mono text-[11px] text-accent-secondary uppercase tracking-wider font-medium">
                Accreditations
              </span>
              <Award className="w-5 h-5 text-text-muted" />
            </div>

            <div className="flex flex-col gap-3">
              {certificationsData.map((cert, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <h4 className="font-display text-xs sm:text-sm font-bold text-text-primary">
                      {cert.title}
                    </h4>
                    <span className="font-mono text-[11px] text-text-muted">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-accent-primaryLight bg-accent-container/20 px-2 py-0.5 rounded border border-accent-secondary/30">
                    <CheckCircle className="w-3 h-3 text-accent-primary" />
                    <span>Certified</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 border-t border-obsidian-borderSubtle flex items-center justify-between text-xs font-mono text-text-muted">
            <span>Continuous Learning</span>
            <span className="text-text-secondary">Hands-on Focus</span>
          </div>
        </div>

      </div>

    </section>
  );
};
