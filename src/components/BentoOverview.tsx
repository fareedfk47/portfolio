import React from 'react';
import { Layers, Terminal, ArrowRight, ExternalLink, MessageSquare, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const BentoOverview: React.FC = () => {
  return (
    <section id="overview" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-obsidian-border/50">
      
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
          <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
            01 // Overview
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Core Skills &amp; Focus
        </h2>
      </div>

      {/* 12-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">
        
        {/* Card A: Personal Engineering Approach (Spans 7 cols) */}
        <div className="md:col-span-6 lg:col-span-7 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border p-6 sm:p-7 flex flex-col justify-between hover:border-obsidian-borderInteractive transition-all group card-bevel">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-accent-primary uppercase tracking-wider font-medium">
                Approach
              </span>
              <Layers className="w-5 h-5 text-text-muted group-hover:text-accent-primary transition-colors" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary">
              How I Build Web Applications
            </h3>
            <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
              I build web applications with clean, intuitive user interfaces and reliable backend APIs. My focus is on modular component structure, well-defined REST endpoints, and practical software engineering without unnecessary complexity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-obsidian-border/60 mt-6 text-xs font-mono text-text-muted">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
              <span>Clean REST Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              <span>Predictable State</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Component Reusability</span>
            </div>
          </div>
        </div>

        {/* Card B: Core Stack At A Glance (Spans 5 cols) */}
        <div className="md:col-span-6 lg:col-span-5 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border p-6 sm:p-7 flex flex-col justify-between hover:border-obsidian-borderInteractive transition-all card-bevel">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-accent-secondary uppercase tracking-wider font-medium">
                Primary Toolset
              </span>
              <Cpu className="w-5 h-5 text-text-muted" />
            </div>
            <h3 className="font-display text-lg font-bold text-text-primary">
              Core Stack
            </h3>
            <p className="font-sans text-xs text-text-muted mb-3">
              Technologies leveraged daily in internship and project work.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col items-center justify-center text-center">
                <span className="font-sans text-xs font-semibold text-text-primary">React</span>
                <span className="font-mono text-[10px] text-text-muted">Frontend</span>
              </div>
              <div className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col items-center justify-center text-center">
                <span className="font-sans text-xs font-semibold text-text-primary">Node.js</span>
                <span className="font-mono text-[10px] text-text-muted">Runtime</span>
              </div>
              <div className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col items-center justify-center text-center">
                <span className="font-sans text-xs font-semibold text-text-primary">Express</span>
                <span className="font-mono text-[10px] text-text-muted">REST API</span>
              </div>
              <div className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col items-center justify-center text-center">
                <span className="font-sans text-xs font-semibold text-text-primary">MongoDB</span>
                <span className="font-mono text-[10px] text-text-muted">NoSQL DB</span>
              </div>
              <div className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col items-center justify-center text-center">
                <span className="font-sans text-xs font-semibold text-text-primary">Redux</span>
                <span className="font-mono text-[10px] text-text-muted">Global Store</span>
              </div>
              <div className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col items-center justify-center text-center">
                <span className="font-sans text-xs font-semibold text-text-primary">Java</span>
                <span className="font-mono text-[10px] text-text-muted">OOP Core</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card C: GitHub & Engineering Velocity (Spans 4 cols) */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-3 lg:col-span-4 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border p-5 sm:p-6 flex flex-col justify-between hover:border-accent-primary/60 transition-all group card-bevel"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                Repositories
              </span>
              <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-primaryLight transition-colors" />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <Terminal className="w-5 h-5 text-accent-primary" />
              <span className="font-display text-sm sm:text-base font-bold text-text-primary">
                github.com/fareedfk47
              </span>
            </div>
            <p className="font-sans text-xs text-text-secondary">
              Open source prototypes, architectural experiments, and full-stack repositories.
            </p>
          </div>

          {/* GitHub Activity Graphic */}
          <div className="pt-5 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-text-muted">
              <span>GitHub Activity</span>
              <span className="text-accent-secondary">Consistent Commits</span>
            </div>
            <div className="grid grid-cols-12 gap-1">
              <div className="h-2 rounded-[2px] bg-obsidian-borderHighlight/40" />
              <div className="h-2 rounded-[2px] bg-accent-primary/30" />
              <div className="h-2 rounded-[2px] bg-accent-primary" />
              <div className="h-2 rounded-[2px] bg-accent-primary/70" />
              <div className="h-2 rounded-[2px] bg-accent-primary" />
              <div className="h-2 rounded-[2px] bg-obsidian-borderHighlight/40" />
              <div className="h-2 rounded-[2px] bg-accent-primary/40" />
              <div className="h-2 rounded-[2px] bg-accent-primary" />
              <div className="h-2 rounded-[2px] bg-accent-primary/80" />
              <div className="h-2 rounded-[2px] bg-accent-primary" />
              <div className="h-2 rounded-[2px] bg-accent-secondary" />
              <div className="h-2 rounded-[2px] bg-accent-primary" />
            </div>
          </div>
        </a>

        {/* Card D: Featured Project Teaser (Spans 4 cols) */}
        <a
          href="#projects"
          className="md:col-span-3 lg:col-span-4 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border p-5 sm:p-6 flex flex-col justify-between hover:border-accent-secondary/60 transition-all group card-bevel"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-accent-secondary uppercase tracking-wider font-medium">
                Featured Project
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent-container/30 text-accent-secondary border border-accent-secondary/30">
                Full-Stack App
              </span>
            </div>
            <h4 className="font-display text-base sm:text-lg font-bold text-text-primary group-hover:text-accent-secondary transition-colors">
              FinLedger
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Full-stack double-entry banking system with real-time transaction consistency and idempotency safeguards.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between text-text-muted text-xs font-mono">
            <span>React + Express + Mongo</span>
            <ArrowRight className="w-4 h-4 text-text-secondary group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* Card E: Status & Focus (Spans 4 cols) */}
        <div className="md:col-span-6 lg:col-span-4 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border p-5 sm:p-6 flex flex-col justify-between card-bevel">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                Current Status
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-accent-primary" />
            </div>
            <h4 className="font-display text-base sm:text-lg font-bold text-text-primary">
              Open to Opportunities
            </h4>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Seeking Software Engineer and Full Stack Developer positions where technical craft, clean APIs, and system reliability are valued.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-obsidian-surface border border-obsidian-border hover:bg-obsidian-surfaceHigh hover:border-accent-primary/40 text-text-primary text-xs font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-accent-primary" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};
