'use client';

import Link from 'next/link';

const aboutColumns = [
  {
    heading: 'background',
    text: 'CS undergraduate at tier-3 institution pursuing asymmetric outcomes in quantitative finance. Interning at Calchas Research building equity research systems.',
  },
  {
    heading: 'focus',
    text: 'Volatility modeling, behavioral finance, sentiment analysis, IPO research, institutional signals, market data systems, financial architecture.',
  },
  {
    heading: 'stack',
    text: 'Python, JavaScript/React, Next.js, SQL, data pipelines, financial modeling, research analysis. DSA + competitive programming (Codeforces, LeetCode).',
  },
];

export default function AboutPage() {
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
            <p className="eyebrow">about</p>
            <h2>Minimal story. Strong signal.</h2>
            <p className="section-copy">
              The site should feel like a sharp technical surface, not a boxed template. This section keeps the context lean and readable.
            </p>
          </div>

          <div className="about-columns">
            {aboutColumns.map((item) => (
              <article key={item.heading} className="about-column">
                <p className="eyebrow">{item.heading}</p>
                <p>{item.text}</p>
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
