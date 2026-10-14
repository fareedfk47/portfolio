import React, { useState } from 'react';
import { featuredProject } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  KeyRound, 
  Lock, 
  Activity, 
  ArrowRight, 
  CreditCard, 
  PiggyBank, 
  Zap, 
  Info
} from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'console' | 'architecture'>('console');

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-obsidian-border/50">
      
      {/* Container Card */}
      <div className="rounded-2xl bg-obsidian-surfaceLow border border-obsidian-border p-6 sm:p-10 md:p-12 flex flex-col gap-10 shadow-2xl relative card-bevel">
        
        {/* Project Meta & Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-obsidian-border">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-accent-container/40 text-accent-secondary border border-accent-secondary/30 uppercase tracking-wider">
                FEATURED PROJECT
              </span>
              <span className="font-mono text-xs uppercase text-text-muted tracking-wider">
                Full Stack Banking System
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
              FinLedger
            </h2>

            <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
              A full-stack banking application built to explore secure state transitions, double-entry audit logging, role-based session authorization, and idempotent transactional APIs.
            </p>

            {/* Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-obsidian-surface font-mono text-xs text-text-primary border border-obsidian-borderSubtle"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Direct Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent-primary hover:bg-[#4F46E5] text-white font-sans text-xs sm:text-sm font-semibold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] focus-ring"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={featuredProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-obsidian-surface border border-obsidian-border hover:border-accent-primary/50 text-text-primary font-sans text-xs sm:text-sm font-medium transition-colors focus-ring"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* 6 Architectural Capabilities Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col gap-2">
            <div className="flex items-center gap-2 text-accent-primaryLight font-sans text-sm font-semibold">
              <CreditCard className="w-4 h-4 text-accent-primary" />
              <span>Multi-Account Management</span>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Support for Checking and Savings accounts with real-time balance calculations and account masking.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col gap-2">
            <div className="flex items-center gap-2 text-accent-primaryLight font-sans text-sm font-semibold">
              <Zap className="w-4 h-4 text-accent-primary" />
              <span>Deposits, Withdrawals & Transfers</span>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Validated balance transitions with overdraft checks and balance consistency guards on transfers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col gap-2">
            <div className="flex items-center gap-2 text-accent-primaryLight font-sans text-sm font-semibold">
              <Lock className="w-4 h-4 text-accent-primary" />
              <span>JWT & HTTP-Only Storage</span>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Protects against XSS and token harvesting by transmitting JWT credentials in strict HTTP-only cookies.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col gap-2">
            <div className="flex items-center gap-2 text-accent-primaryLight font-sans text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-accent-primary" />
              <span>Protected Routes & RBAC</span>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Fine-grained role checks across Express middleware and React conditional route guards.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col gap-2">
            <div className="flex items-center gap-2 text-accent-primaryLight font-sans text-sm font-semibold">
              <KeyRound className="w-4 h-4 text-accent-primary" />
              <span>Idempotency Verification</span>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              UUID <code className="font-mono text-text-primary">Idempotency-Key</code> headers prevent accidental duplicate transfers on network retries.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-obsidian-surface border border-obsidian-borderSubtle flex flex-col gap-2">
            <div className="flex items-center gap-2 text-accent-primaryLight font-sans text-sm font-semibold">
              <Activity className="w-4 h-4 text-accent-primary" />
              <span>Double-Entry Audit Stream</span>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Every credit is ledger-balanced with an immutable debit entry, tracking critical state transitions.
            </p>
          </div>
        </div>

        {/* View Switcher: Interactive Console vs Architecture Pillars */}
        <div className="flex items-center gap-2 border-b border-obsidian-border pb-3">
          <button
            role="tab"
            aria-selected={activeTab === 'console'}
            onClick={() => setActiveTab('console')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'console'
                ? 'bg-obsidian-surfaceHigh text-text-primary border border-obsidian-border'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            Live Banking Console Demo
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'architecture'}
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === 'architecture'
                ? 'bg-obsidian-surfaceHigh text-text-primary border border-obsidian-border'
                : 'text-text-muted hover:text-text-primary'
            }`}
          >
            Engineering Pillars &amp; Rationale
          </button>
        </div>

        {/* Tab A: High-Fidelity Banking Interface Simulation */}
        {activeTab === 'console' ? (
          <div className="w-full rounded-xl bg-obsidian-surface border border-obsidian-border shadow-inner overflow-hidden flex flex-col card-bevel">
            {/* Mockup Sub-header Bar */}
            <div className="p-3 sm:px-4 bg-obsidian-surfaceContainer flex flex-wrap items-center justify-between gap-2 border-b border-obsidian-borderSubtle">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-text-primary">
                  FinLedger Core Console // TLS 1.3 Active
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-text-muted">SESSION ID: 7fa9-002f</span>
                <span className="px-2 py-0.5 rounded bg-obsidian-surfaceHigh text-text-secondary text-[11px] font-mono border border-obsidian-border">
                  Simulation View
                </span>
              </div>
            </div>

            {/* Inside Console Viewport */}
            <div className="p-4 sm:p-6 flex flex-col gap-6">
              
              {/* Balance Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Checking Card */}
                <div className="p-4 rounded-lg bg-obsidian-surfaceLow border border-obsidian-borderSubtle flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase text-text-muted tracking-wider">Operating Checking</span>
                    <CreditCard className="w-4 h-4 text-text-muted" />
                  </div>
                  <div className="py-2.5">
                    <div className="font-display text-2xl font-bold text-text-primary">₹2,45,800.00</div>
                    <div className="font-mono text-[11px] text-accent-secondary mt-0.5">Acc: •••• 8492 · Active Routing</div>
                  </div>
                  <div className="text-[11px] font-sans text-text-secondary flex items-center justify-between pt-2 border-t border-obsidian-borderSubtle">
                    <span>Available to transfer</span>
                    <span className="text-text-primary font-medium">100% Liquidity</span>
                  </div>
                </div>

                {/* Savings Card */}
                <div className="p-4 rounded-lg bg-obsidian-surfaceLow border border-obsidian-borderSubtle flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase text-text-muted tracking-wider">Treasury Savings</span>
                    <PiggyBank className="w-4 h-4 text-text-muted" />
                  </div>
                  <div className="py-2.5">
                    <div className="font-display text-2xl font-bold text-text-primary">₹8,54,200.50</div>
                    <div className="font-mono text-[11px] text-accent-secondary mt-0.5">Acc: •••• 3108 · Active</div>
                  </div>
                  <div className="text-[11px] font-sans text-text-secondary flex items-center justify-between pt-2 border-t border-obsidian-borderSubtle">
                    <span>Interest Accrued</span>
                    <span className="text-accent-primaryLight font-medium">+₹3,420.00 MTD</span>
                  </div>
                </div>

                {/* Instant Actions Card */}
                <div className="p-4 rounded-lg bg-obsidian-surfaceLow border border-obsidian-borderSubtle flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase text-text-muted tracking-wider">Instant Execution</span>
                    <Zap className="w-4 h-4 text-text-muted" />
                  </div>
                  <div className="flex flex-col gap-2 py-1">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1.5 px-3 rounded bg-accent-container text-white font-sans text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-accent-primary transition-colors text-center"
                    >
                      <span>Launch App Transfer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <div className="grid grid-cols-2 gap-2 text-center text-xs font-medium">
                      <span className="py-1 px-2 rounded bg-obsidian-surfaceHigh text-text-secondary border border-obsidian-borderSubtle">Deposit</span>
                      <span className="py-1 px-2 rounded bg-obsidian-surfaceHigh text-text-secondary border border-obsidian-borderSubtle">Audit Log</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 truncate pt-1">
                    ✓ Idempotency Key Guard Armed
                  </div>
                </div>

              </div>

              {/* Real-Time Double-Entry Audit Ledger Table */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-text-primary">
                    Double-Entry Immutable Audit Log
                  </span>
                  <span className="font-mono text-[11px] text-text-muted">Real-time ledger stream</span>
                </div>

                <div className="overflow-x-auto rounded-lg border border-obsidian-borderSubtle bg-obsidian-surfaceLow">
                  <table className="w-full text-left font-sans text-xs">
                    <thead className="bg-obsidian-surfaceContainer font-mono text-[11px] text-text-muted uppercase border-b border-obsidian-borderSubtle">
                      <tr>
                        <th className="py-2.5 px-3">Tx ID</th>
                        <th className="py-2.5 px-3">Timestamp</th>
                        <th className="py-2.5 px-3">Description</th>
                        <th className="py-2.5 px-3">Ledger Hash</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-obsidian-borderSubtle font-mono text-[11.5px] text-text-secondary">
                      <tr className="hover:bg-obsidian-surfaceHigh/40 transition-colors">
                        <td className="py-2.5 px-3 text-text-primary font-medium">TXN_98214</td>
                        <td className="py-2.5 px-3 text-text-muted">2026-04-14 14:22</td>
                        <td className="py-2.5 px-3 text-text-primary font-sans">Account Balance Deposit</td>
                        <td className="py-2.5 px-3 text-text-muted">8f3b...19a2</td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">Completed</span>
                        </td>
                        <td className="py-2.5 px-3 text-right text-emerald-400 font-semibold">+₹42,000.00</td>
                      </tr>
                      <tr className="hover:bg-obsidian-surfaceHigh/40 transition-colors">
                        <td className="py-2.5 px-3 text-text-primary font-medium">TXN_98213</td>
                        <td className="py-2.5 px-3 text-text-muted">2026-04-13 18:05</td>
                        <td className="py-2.5 px-3 text-text-primary font-sans">Withdrawal Transfer</td>
                        <td className="py-2.5 px-3 text-text-muted">4b1a...92cc</td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">Completed</span>
                        </td>
                        <td className="py-2.5 px-3 text-right text-text-primary">-₹8,500.00</td>
                      </tr>
                      <tr className="hover:bg-obsidian-surfaceHigh/40 transition-colors">
                        <td className="py-2.5 px-3 text-text-primary font-medium">TXN_98212</td>
                        <td className="py-2.5 px-3 text-text-muted">2026-04-12 09:12</td>
                        <td className="py-2.5 px-3 text-text-primary font-sans">Internal Transfer to Savings</td>
                        <td className="py-2.5 px-3 text-text-muted">10ef...8831</td>
                        <td className="py-2.5 px-3">
                          <span className="px-2 py-0.5 rounded text-[10px] bg-accent-container/30 text-accent-secondary border border-accent-secondary/20">Settled</span>
                        </td>
                        <td className="py-2.5 px-3 text-right text-text-muted">-₹50,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* Tab B: Architectural Blocks */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 transition-opacity duration-200">
            {featuredProject.architectureBlocks.map((block, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-obsidian-surface border border-obsidian-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display text-base font-bold text-text-primary">
                      {block.title}
                    </h4>
                    <span className="font-mono text-[10px] text-text-muted">Pillar 0{idx + 1}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {block.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-obsidian-borderSubtle text-xs">
                  <span className="font-mono text-accent-primaryLight font-medium block mb-1">
                    Engineering Rationale:
                  </span>
                  <p className="text-text-muted leading-relaxed">
                    {block.whyItMatters}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Context & Health Endpoint Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-lg bg-obsidian-surface border border-obsidian-border text-xs">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-accent-primary shrink-0" />
            <span className="text-text-secondary">
              <strong className="text-text-primary">Engineering Status:</strong> Portfolio implementation showcasing backend security, double-entry ledger bookkeeping, and responsive React UI.
            </span>
          </div>

          <a
            href="https://finledger-1-6qag.onrender.com/api/health"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent-primaryLight hover:underline whitespace-nowrap flex items-center gap-1"
          >
            <span>Live API Health Check</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

    </section>
  );
};
