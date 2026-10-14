import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData, workExperience, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-obsidian-surfaceLow border border-obsidian-border shadow-2xl overflow-hidden card-bevel"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-obsidian-border bg-obsidian-surface">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-obsidian-surfaceContainer border border-obsidian-border text-accent-primary">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-title" className="font-display text-base font-bold text-text-primary">
                Fareed Khan — Developer Resume
              </h3>
              <p className="font-mono text-xs text-text-muted">
                Full Stack Developer • HostLelo Intern • B.Tech CSE (2025)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-obsidian-surfaceContainer transition-colors focus-ring"
            aria-label="Close resume preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Preview */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-text-secondary">
          
          {/* Quick Download Banner */}
          <div className="p-4 rounded-xl bg-accent-subtle border border-accent-primary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-display font-bold text-text-primary text-sm">
                Official PDF Document Available
              </p>
              <p className="font-sans text-xs text-text-secondary mt-0.5">
                Download the verified one-page developer resume PDF.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                download="Fareed_Khan_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-primary hover:bg-[#4F46E5] text-white text-xs font-semibold transition-colors focus-ring shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-obsidian-surface border border-obsidian-border hover:border-accent-primary/40 text-text-secondary hover:text-text-primary transition-colors focus-ring"
                title="Open in new tab"
                aria-label="Open PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Structured Resume Summary */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-primary mb-2">
                Professional Profile
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed bg-obsidian-surface p-3.5 rounded-lg border border-obsidian-borderSubtle">
                {personalInfo.heroIntro}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-accent-primary mb-2">
                Experience
              </h4>
              <div className="bg-obsidian-surface p-3.5 rounded-lg border border-obsidian-borderSubtle">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <strong className="text-text-primary font-semibold block text-sm">
                      {workExperience[0].role} — {workExperience[0].company}
                    </strong>
                    <span className="text-xs text-text-muted font-mono">{workExperience[0].period}</span>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs text-text-secondary">
                  {workExperience[0].contributions.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-obsidian-surface p-3.5 rounded-lg border border-obsidian-borderSubtle">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-primary mb-1">
                  Education
                </h4>
                <p className="text-xs font-semibold text-text-primary">{educationData.degree}</p>
                <p className="text-[11px] text-text-muted">{educationData.institution}</p>
                <p className="text-xs text-accent-secondary mt-1 font-mono">Graduation: {educationData.graduationYear} • CGPA: {educationData.cgpa}</p>
              </div>

              <div className="bg-obsidian-surface p-3.5 rounded-lg border border-obsidian-borderSubtle">
                <h4 className="text-xs font-mono uppercase tracking-wider text-accent-primary mb-1">
                  Certifications
                </h4>
                {certificationsData.map((c, i) => (
                  <div key={i} className="text-xs text-text-secondary mb-1">
                    • <strong className="text-text-primary font-medium">{c.title}</strong> ({c.issuer})
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-obsidian-border bg-obsidian-surface text-xs font-mono">
          <span className="text-text-muted">Fareed_Khan_Resume.pdf</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-obsidian-surfaceContainer transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
