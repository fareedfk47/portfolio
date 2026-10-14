import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-obsidian-surface border-t border-obsidian-border mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Column: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold text-text-primary">
              {personalInfo.name}
            </span>
            <span className="text-text-muted">—</span>
            <span className="font-sans text-xs text-text-secondary">
              {personalInfo.role}
            </span>
          </div>
          <p className="font-mono text-[11px] text-text-muted">
            © {new Date().getFullYear()} Fareed Khan. Engineered with precision.
          </p>
        </div>

        {/* Right Column: Telemetry Links & Back to Top */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-primaryLight transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-primaryLight transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-secondary hover:text-accent-primaryLight transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-obsidian-surfaceLow border border-obsidian-border hover:border-accent-primary/40 text-text-secondary hover:text-text-primary transition-colors focus-ring"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
