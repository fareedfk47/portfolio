import React, { useState, useEffect } from 'react';
import { Menu, X, Github, FileText, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'overview', 'projects', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-obsidian-bg/85 backdrop-blur-xl border-b border-obsidian-border shadow-[0_1px_8px_rgba(0,0,0,0.35)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus-ring rounded-lg py-1"
          aria-label="Fareed Khan - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-obsidian-surfaceHigh border border-obsidian-border flex items-center justify-center font-display font-bold text-xs text-accent-primaryLight transition-all group-hover:bg-obsidian-surfaceHighest group-hover:border-accent-primary/40 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.25)]">
            FK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm tracking-tight text-text-primary group-hover:text-accent-primaryLight transition-colors">
              Fareed Khan
            </span>
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider leading-none">
              Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all focus-ring ${
                  isActive
                    ? 'text-text-primary bg-obsidian-surfaceHigh border border-obsidian-border/80'
                    : 'text-text-secondary hover:text-text-primary hover:bg-obsidian-surfaceHigh/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-obsidian-surfaceHigh border border-transparent hover:border-obsidian-border transition-all focus-ring"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-text-secondary hover:text-text-primary bg-obsidian-surfaceLow hover:bg-obsidian-surfaceHigh border border-obsidian-border hover:border-accent-primary/40 transition-all focus-ring card-bevel"
          >
            <FileText className="w-3.5 h-3.5 text-accent-primary" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent-container/60 hover:bg-accent-primary text-accent-secondary hover:text-white transition-all text-xs font-medium border border-accent-primary/30 shadow-[0_0_0_1px_rgba(99,102,241,0.2)] hover:shadow-[0_0_16px_rgba(99,102,241,0.35)] focus-ring"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenResume}
            className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary bg-obsidian-surfaceLow border border-obsidian-border text-xs flex items-center gap-1"
            aria-label="View Resume"
          >
            <FileText className="w-3.5 h-3.5 text-accent-primary" />
            <span className="text-[11px]">Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary bg-obsidian-surfaceLow border border-obsidian-border focus-ring"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-obsidian-border bg-obsidian-surface/95 backdrop-blur-xl px-5 py-4 space-y-1 shadow-2xl transition-all duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-obsidian-surfaceLow transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 mt-2 border-t border-obsidian-border flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-sm text-accent-primaryLight bg-accent-subtle rounded-lg border border-accent-primary/20"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-obsidian-surfaceLow rounded-lg"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </span>
              <span className="text-xs font-mono text-text-muted">fareedfk47</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
