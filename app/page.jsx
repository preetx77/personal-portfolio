'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  TrendingUp,
  Code2,
  BookOpen,
} from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/preetx77', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/preet-sonar777/', icon: Linkedin },
  { label: 'Email', href: 'mailto:preetxyz@gmail.com', icon: Mail },
];

const navLinks = [
  { label: 'about', href: '/about' },
  { label: 'research', href: '/research' },
  { label: 'code', href: '/code' },
  { label: 'experience', href: '/experience' },
];

const heroMetrics = [
  { value: '03', label: 'core research systems' },
  { value: '04', label: 'featured code surfaces' },
  { value: '01', label: 'clear narrative' },
];

const featuredProjects = [
  {
    title: 'SpaceX IPO Analysis',
    description: 'Deep dive into peer metrics, historical returns, and correlation analysis for SpaceX IPO valuation',
    icon: TrendingUp,
    href: 'https://github.com/preetx77',
  },
  {
    title: 'Narrative Momentum Score',
    description: 'Multi-layer institutional signal framework combining retail attention and options conviction',
    icon: BookOpen,
    href: 'https://github.com/preetx77',
  },
  {
    title: 'Volatility Systems',
    description: 'GARCH modeling, VIX dynamics, and sector volatility regime analysis',
    icon: Code2,
    href: 'https://github.com/preetx77',
  },
];

const fallbackRepos = [
  {
    name: 'portfolio-manager',
    description: 'Quantitative portfolio analysis & backtesting framework',
    html_url: 'https://github.com/preetx77/portfolio-manager',
    language: 'Python',
    stargazers_count: 0,
  },
  {
    name: 'Vedyura-WebApp',
    description: 'Full-stack health & wellness platform with React & Next.js',
    html_url: 'https://github.com/preetx77/Vedyura-WebApp',
    language: 'JavaScript',
    stargazers_count: 0,
  },
  {
    name: 'arduino',
    description: 'Embedded systems & IoT implementations',
    html_url: 'https://github.com/preetx77/arduino',
    language: 'C++',
    stargazers_count: 0,
  },
  {
    name: 'book-record',
    description: 'Data-driven application for tracking & analytics',
    html_url: 'https://github.com/preetx77/book-record',
    language: 'Java',
    stargazers_count: 0,
  },
];

function MetaLine({ children }) {
  return <span className="meta-line">{children}</span>;
}

export default function Home() {
  const [pinnedRepos, setPinnedRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadRepos() {
      try {
        const response = await fetch('https://api.github.com/users/preetx77/repos?per_page=100&sort=updated', {
          headers: { Accept: 'application/vnd.github+json' },
        });

        if (!response.ok) {
          throw new Error('GitHub request failed');
        }

        const data = await response.json();
        if (!ignore) {
          // Get top 4 repos by stars or featured
          const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);
          setPinnedRepos(sorted.length > 0 ? sorted : fallbackRepos);
        }
      } catch {
        if (!ignore) {
          setPinnedRepos(fallbackRepos);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadRepos();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const root = document.documentElement;
    let frame = null;

    function updatePosition(clientX, clientY) {
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(() => {
        root.style.setProperty('--pointer-x', `${x}%`);
        root.style.setProperty('--pointer-y', `${y}%`);
        root.style.setProperty('--pointer-shift-x', `${(x - 50) / 18}px`);
        root.style.setProperty('--pointer-shift-y', `${(y - 50) / 18}px`);
      });
    }

    function handleMove(event) {
      updatePosition(event.clientX, event.clientY);
    }

    function handleTouchMove(event) {
      const touch = event.touches[0];
      if (touch) {
        updatePosition(touch.clientX, touch.clientY);
      }
    }

    updatePosition(window.innerWidth * 0.5, window.innerHeight * 0.35);
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

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
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-meta">
              <MetaLine>research-first portfolio</MetaLine>
              <MetaLine>markets x systems x execution</MetaLine>
            </div>

            <p className="eyebrow">quantitative systems engineer in build mode</p>
            <h1>Preet Sonar</h1>
            <p className="hero-tagline">decoding markets through systematic design</p>
            <p className="hero-description">
              CS undergrad building quantitative systems | finite markets, infinite edges
            </p>

            <div className="hero-links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" className="text-link">
                  <Icon size={15} />
                  <span>{label}</span>
                  <ArrowRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-aside">
            <div className="orbital-ring" />
            <div className="hero-statement">
              <p className="eyebrow">current thesis</p>
              <p>
                Building quant work with enough proof density that background becomes irrelevant and output speaks first.
              </p>
            </div>

            <div className="metric-strip">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="metric-item">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">featured research</p>
            <h2>Systems built with conviction</h2>
            <p className="section-copy">
              Core research work spanning volatility modeling, behavioral finance, and institutional signal analysis.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: '1.5rem',
                    border: '1px solid var(--line)',
                    borderRadius: '8px',
                    background: 'var(--surface)',
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--line-strong)';
                    e.currentTarget.style.background = 'var(--surface-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--line)';
                    e.currentTarget.style.background = 'var(--surface)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div className="row-icon">
                      <Icon size={16} />
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{project.title}</h3>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {project.description}
                  </p>
                </a>
              );
            })}
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/research" className="text-link" style={{ fontSize: '0.95rem' }}>
              View all research projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">pinned projects</p>
            <h2>Code that ships</h2>
            <p className="section-copy">
              A selection of repositories showcasing systems work, financial tooling, and algorithmic implementations.
            </p>
          </div>

          {loading ? (
            <p className="loading-copy">loading pinned repositories...</p>
          ) : (
            <>
              <div className="repo-list">
                {pinnedRepos.map((repo, index) => (
                  <a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer" className="repo-row">
                    <div className="row-index">0{index + 1}</div>
                    <div className="row-main">
                      <div className="row-heading">
                        <div>
                          <h3>{repo.name}</h3>
                          <p className="row-subtitle">{repo.language || 'code'}</p>
                        </div>
                        <span className="row-action">
                          view repo
                          <ExternalLink size={14} />
                        </span>
                      </div>
                      <p className="row-description">{repo.description || 'Project repository'}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link href="/code" className="text-link" style={{ fontSize: '0.95rem' }}>
                  View all repositories
                  <ArrowRight size={14} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div style={{ 
            padding: '3rem 2rem', 
            border: '1px solid var(--line)', 
            borderRadius: '12px',
            background: 'var(--surface)',
            textAlign: 'center',
          }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>get in touch</p>
            <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}>
              Let's build something together
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Open to collaborations, research discussions, and opportunities in quantitative finance and systematic trading.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a 
                  key={label} 
                  href={href} 
                  target={label === 'Email' ? undefined : '_blank'} 
                  rel="noreferrer" 
                  className="text-link"
                  style={{ 
                    padding: '0.75rem 1.5rem',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    background: 'var(--background)',
                  }}
                >
                  <Icon size={15} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
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
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
