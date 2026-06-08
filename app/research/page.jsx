'use client';

import Link from 'next/link';
import { TrendingUp, BookOpen, Code2, ExternalLink } from 'lucide-react';

const researchProjects = [
  {
    index: '01',
    title: 'SpaceX IPO Deep Dive',
    subtitle: 'Peer metrics, historical returns, correlation analysis',
    description:
      'Comprehensive IPO analysis framework with split-adjusted pricing, peer benchmarking, market impact modeling across space sector equities. Includes historical return analysis and correlation matrices.',
    href: 'https://github.com/preetx77',
    icon: TrendingUp,
    tags: ['ipo', 'peer comps', 'market impact'],
  },
  {
    index: '02',
    title: 'Narrative Momentum Score',
    subtitle: 'Multi-layer institutional signal framework',
    description:
      'Proprietary framework combining retail attention, institutional activity, options conviction, and corroborating signals. Designed for identifying narrative-driven market movements and institutional positioning.',
    href: 'https://github.com/preetx77',
    icon: BookOpen,
    tags: ['signals', 'sentiment', 'institutional flow'],
  },
  {
    index: '03',
    title: 'Volatility Systems',
    subtitle: 'GARCH modeling, VIX dynamics, sector volatility regimes',
    description:
      'Quantitative analysis of volatility regimes, GARCH modeling, VIX dynamics, and sector-level risk decomposition. Includes backtesting frameworks and risk metrics for portfolio construction.',
    href: 'https://github.com/preetx77',
    icon: Code2,
    tags: ['garch', 'risk', 'volatility'],
  },
];

export default function ResearchPage() {
  return (
    <main className="site-shell">
      <div className="interactive-backdrop" aria-hidden="true">
        <div className="cursor-aura" />
        <div className="cursor-aura secondary" />
        <div className="starfield starfield-near" />
        <div className="starfield starfield-far" />
      </div>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand-mark">
            Preet Sonar
          </Link>
          <nav className="site-nav">
            <Link href="/about" className="nav-link">about</Link>
            <Link href="/research" className="nav-link">research</Link>
            <Link href="/code" className="nav-link">code</Link>
            <Link href="/experience" className="nav-link">experience</Link>
          </nav>
        </div>
      </header>

      <section className="section-block" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">research</p>
            <h2>Systems work that reads like real conviction.</h2>
            <p className="section-copy">
              Instead of heavy cards, the projects live as clean rows with clearer spacing, lighter chrome, and better hierarchy.
            </p>
          </div>

          <div className="project-list">
            {researchProjects.map(({ index, title, subtitle, description, href, icon: Icon, tags }) => (
              <article key={title} className="project-row">
                <div className="row-index">{index}</div>
                <div className="row-main">
                  <div className="row-heading">
                    <div className="row-title-wrap">
                      <div className="row-icon">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3>{title}</h3>
                        <p className="row-subtitle">{subtitle}</p>
                      </div>
                    </div>
                    <a href={href} target="_blank" rel="noreferrer" className="row-action">
                      view project
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <p className="row-description">{description}</p>

                  <div className="tag-row">
                    {tags.map((tag) => (
                      <span key={tag} className="flat-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <p className="footer-line">building asymmetric outcomes from tier-3 | always executing</p>
            <p className="footer-copy">&copy; 2026 Preet Sonar</p>
          </div>
          <div className="footer-nav">
            <Link href="/about" className="nav-link">about</Link>
            <Link href="/research" className="nav-link">research</Link>
            <Link href="/code" className="nav-link">code</Link>
            <Link href="/experience" className="nav-link">experience</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
