import React from 'react';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedInProfileCard } from './LinkedInProfileCard';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-obsidian-surfaceHigh border border-obsidian-border text-xs text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.7)] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              Full Stack Developer · HostLelo Intern
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.12]">
            I build web experiences with{' '}
            <span className="text-accent-primary underline decoration-accent-primary/40 underline-offset-8">
              thoughtful engineering
            </span>
            .
          </h1>

          {/* Bio / Subtext */}
          <p className="font-sans text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            I’m <strong className="text-text-primary font-semibold">Fareed Khan</strong>, a Computer Science graduate and Full Stack Developer working with React, Node.js, Express, and MongoDB. I focus on developing clean RESTful APIs, securing backend services with HTTP-only cookies, and solving practical engineering problems.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-primary hover:bg-[#4F46E5] text-white font-sans text-sm font-semibold transition-all shadow-[0_0_0_1px_rgba(192,193,255,0.3),0_8px_24px_-4px_rgba(99,102,241,0.4)] focus-ring"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-obsidian-surfaceLow border border-obsidian-border hover:border-accent-primary/60 hover:bg-obsidian-surfaceHigh text-text-primary font-sans text-sm font-medium transition-colors focus-ring card-bevel"
            >
              <Mail className="w-4 h-4 text-accent-primary" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Direct Telemetry Links */}
          <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-obsidian-border/60 text-xs">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
              Telemetry:
            </span>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-text-secondary hover:text-accent-primaryLight transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/fareedfk47</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-text-secondary hover:text-accent-primaryLight transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

        </div>

        {/* Right Column: Verified LinkedIn Profile Card */}
        <div className="lg:col-span-5 w-full">
          <LinkedInProfileCard onOpenResume={onOpenResume} />
        </div>

      </div>
    </section>
  );
};
