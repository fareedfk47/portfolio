import React, { useState } from 'react';
import { Linkedin, ExternalLink, Building2, GraduationCap, MapPin, Award, Mail, FileText } from 'lucide-react';
import { personalInfo, educationData, certificationsData } from '../data/portfolioData';

interface LinkedInProfileCardProps {
  onOpenResume?: () => void;
}

export const LinkedInProfileCard: React.FC<LinkedInProfileCardProps> = ({ onOpenResume }) => {
  const [imgError, setImgError] = useState(false);
  const avatarUrl = personalInfo.avatarUrl;

  return (
    <div className="w-full rounded-2xl bg-obsidian-surfaceLow border border-obsidian-border shadow-2xl overflow-hidden flex flex-col card-bevel transition-all duration-300 hover:border-obsidian-borderHighlight">
      
      {/* LinkedIn Cover Banner */}
      <div className="relative h-24 sm:h-28 w-full bg-gradient-to-r from-[#003366] via-[#0A66C2]/40 to-[#0B0E11] overflow-hidden border-b border-obsidian-border">
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />
        
        {/* Top Right LinkedIn Official Brand Tag */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white text-[11px] font-sans font-semibold shadow-md transition-all"
          >
            <Linkedin className="w-3.5 h-3.5 fill-current" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-5 sm:px-6 pb-6 pt-0 flex flex-col gap-4 relative">
        
        {/* Avatar overlapping banner */}
        <div className="flex items-end justify-between -mt-12 sm:-mt-14">
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-obsidian-surfaceLow ring-2 ring-obsidian-borderHighlight shadow-xl overflow-hidden">
              {!imgError ? (
                <img
                  src={avatarUrl}
                  alt="Fareed Khan LinkedIn Profile"
                  onError={() => setImgError(true)}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-[#0A66C2] flex items-center justify-center font-display font-bold text-xl sm:text-2xl text-white">
                  FK
                </div>
              )}
            </div>
          </div>

          <div className="px-2.5 py-1 rounded-md bg-obsidian-surface border border-obsidian-border text-text-muted text-[11px] font-mono mb-2">
            HostLelo Intern
          </div>
        </div>

        {/* Profile Name, Headline & Connections */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Fareed Khan
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm font-medium text-text-secondary leading-snug">
            Full Stack Developer | React • Node.js • Express • MongoDB | HostLelo Intern
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted mt-1 font-sans">
            <span className="flex items-center gap-1 text-text-secondary">
              <MapPin className="w-3.5 h-3.5 text-accent-primary" />
              <span>Sikar, Rajasthan, India</span>
            </span>
            <span className="text-text-muted">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#70B5F9] hover:underline font-semibold"
            >
              {personalInfo.linkedinConnections ? `${personalInfo.linkedinConnections} connections` : 'Connect on LinkedIn'}
            </a>
          </div>
        </div>

        {/* Current Experience & Education in LinkedIn layout */}
        <div className="grid grid-cols-1 gap-2.5 pt-1">
          
          {/* Experience Item: HostLelo */}
          <div className="p-3 rounded-xl bg-obsidian-surface border border-obsidian-border flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#70B5F9] shrink-0 mt-0.5">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-xs sm:text-sm font-semibold text-text-primary">
                  HostLelo
                </span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-accent-container/40 text-accent-secondary border border-accent-secondary/30">
                  Current
                </span>
              </div>
              <p className="font-sans text-xs text-text-secondary">
                Full Stack Developer Intern · March 2026 – Present
              </p>
              <p className="font-sans text-[11px] text-text-muted mt-0.5">
                Building responsive React interfaces, state pipelines & REST APIs.
              </p>
            </div>
          </div>

          {/* Education Item: Sobhasaria */}
          <div className="p-3 rounded-xl bg-obsidian-surface border border-obsidian-border flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-obsidian-surfaceContainer border border-obsidian-borderSubtle flex items-center justify-center text-accent-primary shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs sm:text-sm font-semibold text-text-primary">
                {educationData.institution}
              </span>
              <p className="font-sans text-xs text-text-secondary">
                {educationData.degree} · Class of {educationData.graduationYear} (CGPA {educationData.cgpa})
              </p>
              <p className="font-sans text-[11px] text-text-muted mt-0.5">
                {educationData.university}
              </p>
            </div>
          </div>

        </div>

        {/* Licenses & Certifications */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-accent-primary" />
              <span>Licenses &amp; Certifications</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {certificationsData.map((cert) => (
              <div
                key={cert.title}
                className="p-2.5 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col"
              >
                <span className="font-display text-xs font-medium text-text-primary truncate">
                  {cert.title}
                </span>
                <span className="font-sans text-[11px] text-[#70B5F9] mt-0.5 font-medium">
                  {cert.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-obsidian-border flex items-center gap-2.5">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold shadow-md transition-colors focus-ring"
          >
            <Linkedin className="w-4 h-4 fill-current" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a
            href={`mailto:${personalInfo.email}?subject=Job%20Opportunity`}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg bg-obsidian-surface border border-obsidian-border hover:bg-obsidian-surfaceHigh text-text-primary text-xs font-medium transition-colors focus-ring"
            title="Send Email"
          >
            <Mail className="w-3.5 h-3.5 text-accent-primary" />
            <span>Email</span>
          </a>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg bg-obsidian-surface border border-obsidian-border hover:bg-obsidian-surfaceHigh text-text-primary text-xs font-medium transition-colors focus-ring"
              title="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-text-secondary" />
              <span>Resume</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
