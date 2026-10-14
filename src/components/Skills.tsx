import React from 'react';
import { technicalSkills } from '../data/portfolioData';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-4 h-4 text-accent-secondary" />;
      case 1:
        return <Server className="w-4 h-4 text-accent-primary" />;
      case 2:
        return <Database className="w-4 h-4 text-accent-secondary" />;
      case 3:
        return <Code className="w-4 h-4 text-accent-primary" />;
      case 4:
      default:
        return <Wrench className="w-4 h-4 text-accent-secondary" />;
    }
  };

  const getTagForSkill = (name: string): string => {
    switch (name) {
      case 'React': return 'UI Library';
      case 'JavaScript (ES6+)':
      case 'JavaScript': return 'ES6+';
      case 'Java': return 'OOP Core';
      case 'Redux / Redux Toolkit':
      case 'Redux': return 'State Store';
      case 'HTML5': return 'Semantic';
      case 'CSS3': return 'Responsive';
      case 'Node.js': return 'Runtime';
      case 'Express.js': return 'Framework';
      case 'REST APIs': return 'Services';
      case 'JWT Authentication': return 'Auth / RBAC';
      case 'Mongoose': return 'ODM / Schema';
      case 'MongoDB': return 'NoSQL DB';
      case 'Git': return 'Version Control';
      case 'GitHub': return 'Collaboration';
      case 'Postman': return 'API Testing';
      case 'VS Code': return 'Primary IDE';
      default: return 'Core';
    }
  };

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-obsidian-border/50">
      
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
          <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
            03 // Technical Stack
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Proficiencies &amp; Tooling
        </h2>
        <p className="font-sans text-sm text-text-secondary">
          Strict, disciplined stack utilized in production internship and full-stack projects.
        </p>
      </div>

      {/* 5 Category Bento Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {technicalSkills.map((category, idx) => (
          <div
            key={category.title}
            className="p-5 rounded-xl bg-obsidian-surfaceLow border border-obsidian-border flex flex-col justify-between hover:border-obsidian-borderInteractive transition-all card-bevel"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-obsidian-borderSubtle mb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">
                  {category.title.replace(' Development', '')}
                </span>
                {getCategoryIcon(idx)}
              </div>

              {/* Skill Items */}
              <div className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-2 rounded-lg bg-obsidian-surface border border-obsidian-borderSubtle"
                  >
                    <span className="font-sans text-xs font-medium text-text-primary">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      {getTagForSkill(skill.name)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-obsidian-borderSubtle flex items-center justify-between text-[10px] font-mono text-text-muted">
              <span>Practical Experience</span>
              <span className="text-accent-primaryLight">● In Use</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
