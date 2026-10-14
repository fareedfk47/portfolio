import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Copy, Check, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-obsidian-border/50 relative">
      
      {/* Outer Bento Container */}
      <div className="rounded-2xl bg-obsidian-surfaceLow border border-obsidian-border p-6 sm:p-10 md:p-12 flex flex-col gap-10 shadow-2xl card-bevel">
        
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
            <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
              06 // Communication
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
            Have a project or opportunity in mind?
          </h2>

          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
            I’m open to discussing software development opportunities, entry-level engineering roles, and ways to build high-quality web applications. Reach out directly below:
          </p>
        </div>

        {/* 3 Contact Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Email Hub */}
          <div className="p-6 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col justify-between gap-6 hover:border-accent-primary/50 transition-colors">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                Direct Inbox
              </span>
              <span className="font-mono text-sm sm:text-base font-semibold text-text-primary select-all">
                {personalInfo.email}
              </span>
              <p className="font-sans text-xs text-text-secondary mt-1">
                Best channel for job opportunities, interviews, and direct contact.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 py-2 px-3 rounded-lg bg-accent-primary hover:bg-[#4F46E5] text-white font-sans text-xs font-semibold text-center transition-colors shadow-sm focus-ring"
              >
                Send Email
              </a>

              <button
                onClick={handleCopyEmail}
                className="py-2 px-3 rounded-lg bg-obsidian-surfaceHigh border border-obsidian-border hover:bg-obsidian-surfaceHighest text-text-secondary hover:text-text-primary transition-colors focus-ring"
                title="Copy email to clipboard"
                aria-label="Copy email address"
                type="button"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* GitHub Hub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col justify-between gap-6 hover:border-accent-secondary/50 transition-colors group"
          >
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                Code &amp; Repositories
              </span>
              <span className="font-mono text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent-primaryLight transition-colors">
                github.com/fareedfk47
              </span>
              <p className="font-sans text-xs text-text-secondary mt-1">
                Explore open-source repositories, projects, and recent activity.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-accent-primaryLight font-medium pt-2 border-t border-obsidian-borderSubtle">
              <span>Explore profile</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Hub */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col justify-between gap-6 hover:border-accent-primary/50 transition-colors group"
          >
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                Professional Network
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-text-primary group-hover:text-accent-primaryLight transition-colors">
                Fareed Khan
              </span>
              <p className="font-sans text-xs text-text-secondary mt-1">
                Connect for career updates, role discussions, and networking.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-accent-primaryLight font-medium pt-2 border-t border-obsidian-borderSubtle">
              <span>View LinkedIn</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

        </div>

      </div>

      {/* Floating Clipboard Toast */}
      {copiedEmail && (
        <div className="fixed bottom-6 right-6 z-50 bg-obsidian-surfaceHighest border border-accent-primary/50 text-text-primary px-4 py-2.5 rounded-lg shadow-2xl flex items-center gap-2 font-mono text-xs animate-in fade-in-50">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Email copied: {personalInfo.email}</span>
        </div>
      )}

    </section>
  );
};
