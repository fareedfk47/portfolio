import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Building2, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-obsidian-border/50">
      
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
          <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
            04 // Practical Experience
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Work &amp; Internships
        </h2>
      </div>

      {/* Experience Timeline Card */}
      {workExperience.map((exp, index) => (
        <div
          key={index}
          className="rounded-xl bg-obsidian-surfaceLow border border-obsidian-border p-6 sm:p-8 md:p-10 flex flex-col gap-6 shadow-xl card-bevel"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-obsidian-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-obsidian-surface flex items-center justify-center border border-obsidian-border text-accent-primary shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary">
                  {exp.role}
                </h3>
                <span className="font-sans text-sm font-semibold text-accent-primaryLight">
                  {exp.company}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-obsidian-surface text-text-primary border border-obsidian-border">
                {exp.period}
              </span>
            </div>
          </div>

          {/* Core Contributions */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
              Core Contributions:
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.contributions.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5 text-text-secondary font-sans text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-accent-secondary shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applied Stack Chips */}
          <div className="pt-5 border-t border-obsidian-border flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider mr-2">
              Technologies Applied:
            </span>
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded bg-obsidian-surface font-mono text-xs text-text-primary border border-obsidian-borderSubtle"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      ))}

    </section>
  );
};
