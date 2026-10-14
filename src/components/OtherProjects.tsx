import React from 'react';
import { secondaryProjects } from '../data/portfolioData';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

export const OtherProjects: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col gap-1.5 mb-8">
        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
          Additional Verified Repositories
        </h2>
        <p className="font-sans text-xs sm:text-sm text-text-secondary">
          Open-source repositories and development projects from my GitHub profile.
        </p>
      </div>

      {/* 3-Column Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {secondaryProjects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border hover:border-accent-primary/50 transition-all flex flex-col justify-between group card-bevel"
          >
            <div>
              {/* Header with Icon and GitHub link */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-border text-accent-primary group-hover:border-accent-primary/40 transition-colors">
                  <FolderGit2 className="w-4 h-4" />
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-obsidian-surface transition-colors focus-ring"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-wider text-accent-secondary mb-1 block">
                {project.type}
              </span>

              <h3 className="font-display text-base font-bold text-text-primary mb-2 group-hover:text-accent-primaryLight transition-colors">
                {project.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-obsidian-borderSubtle flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-obsidian-surface border border-obsidian-borderSubtle text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
