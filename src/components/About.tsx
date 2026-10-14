import React from 'react';
import { GraduationCap, Building2, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-obsidian-border/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Narrative Left Column */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
            <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
              02 // Background
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
            A little about me
          </h2>

          <div className="flex flex-col gap-4 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
            <p>
              I’m a Full Stack Developer interested in building useful web applications and understanding how systems work beyond the user interface.
            </p>
            <p>
              I work primarily with <strong className="text-text-primary font-semibold">React</strong> on the client and <strong className="text-text-primary font-semibold">Node.js, Express.js, and MongoDB</strong> on the server. I focus on developing modular, legible codebases, predictable REST API contracts, and performant state synchronization.
            </p>
            <p>
              Continuously advancing my skills through hands-on project architecture and engineering problem solving, I enjoy dissecting complex requirements and transforming them into clean, dependable software.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-text-muted">
            <span className="px-3 py-1 rounded bg-obsidian-surface border border-obsidian-borderSubtle">
              📍 Sikar, Rajasthan, India
            </span>
            <span className="px-3 py-1 rounded bg-obsidian-surface border border-obsidian-borderSubtle">
              🎓 CS Graduate (2025)
            </span>
            <span className="px-3 py-1 rounded bg-obsidian-surface border border-obsidian-borderSubtle">
              💼 Open to Full-Time Roles
            </span>
          </div>
        </div>

        {/* Highlights Right Column */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          
          <div className="p-6 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border flex items-start gap-4 hover:border-obsidian-borderInteractive transition-colors card-bevel">
            <div className="w-10 h-10 rounded-lg bg-obsidian-surface flex items-center justify-center shrink-0 border border-obsidian-border text-accent-primary">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-base font-bold text-text-primary">
                Computer Science &amp; Engineering Graduate
              </h3>
              <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                Solid foundational training in data structures, algorithms, operating system basics, and object-oriented paradigms from Sobhasaria Group of Institutions (BTU).
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border flex items-start gap-4 hover:border-obsidian-borderInteractive transition-colors card-bevel">
            <div className="w-10 h-10 rounded-lg bg-obsidian-surface flex items-center justify-center shrink-0 border border-obsidian-border text-accent-secondary">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-base font-bold text-text-primary">
                Full Stack Developer Intern at HostLelo
              </h3>
              <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                Practical experience building production React UI component systems, Redux store wiring, and REST endpoint integrations.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border flex items-start gap-4 hover:border-obsidian-borderInteractive transition-colors card-bevel">
            <div className="w-10 h-10 rounded-lg bg-obsidian-surface flex items-center justify-center shrink-0 border border-obsidian-border text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-base font-bold text-text-primary">
                Core Technical Competencies
              </h3>
              <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                Reliable web API contracts, responsive frontends, modular database schema design, and clean Git/GitHub collaboration workflows.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
