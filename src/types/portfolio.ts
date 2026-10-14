export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    isKey?: boolean;
    note?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  statusText?: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface ArchitectureBlock {
  title: string;
  items: string[];
  whyItMatters: string;
}

export interface ProjectData {
  title: string;
  tagline: string;
  summary: string;
  status: string;
  statusType: 'in-development' | 'deployed' | 'active';
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  architectureBlocks: ArchitectureBlock[];
  keyCapabilities: {
    category: string;
    items: string[];
  }[];
}

export interface SecondaryProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  type: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  period: string;
  graduationYear: string;
  cgpa: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}
