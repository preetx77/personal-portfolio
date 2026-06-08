'use client';

import Link from 'next/link';

const experienceItems = [
  {
    index: '01',
    title: 'Calchas Research',
    role: 'Data Pipeline & Research Engineering',
    description:
      'Building equity research infrastructure, financial analysis systems, market data pipelines. Working on institutional-grade research workflows and data architecture.',
  },
  {
    index: '02',
    title: 'Competitive Programming & DSA',
    role: 'Active grind - LeetCode & Codeforces',
    description:
      'Daily practice focusing on algorithm design, systems thinking, and problem-solving rigor. Applying competitive programming patterns to financial systems.',
  },
];

export default function ExperiencePage() {
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
            <p className="eyebrow">experience</p>
            <h2>Execution over credentials.</h2>
            <p className="section-copy">
              The work trail is framed as capability accumulation: cleaner, calmer, and less boxed-in.
            </p>
          </div>

          <div className="experience-list">
            {experienceItems.map((item) => (
              <article key={item.title} className="experience-row">
                <div className="row-index">{item.index}</div>
                <div className="row-main">
                  <div className="row-heading">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="row-subtitle">{item.role}</p>
                    </div>
                  </div>
                  <p className="row-description">{item.description}</p>
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
