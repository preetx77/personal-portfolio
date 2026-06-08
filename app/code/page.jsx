'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const fallbackRepos = [
  {
    name: 'portfolio-manager',
    description: 'Quantitative portfolio analysis & backtesting framework',
    html_url: 'https://github.com/preetx77/portfolio-manager',
    language: 'Python',
  },
  {
    name: 'Vedyura-WebApp',
    description: 'Full-stack health & wellness platform with React & Next.js',
    html_url: 'https://github.com/preetx77/Vedyura-WebApp',
    language: 'JavaScript',
  },
  {
    name: 'arduino',
    description: 'Embedded systems & IoT implementations',
    html_url: 'https://github.com/preetx77/arduino',
    language: 'C++',
  },
  {
    name: 'book-record',
    description: 'Data-driven application for tracking & analytics',
    html_url: 'https://github.com/preetx77/book-record',
    language: 'Java',
  },
];

const preferredRepos = ['portfolio-manager', 'Vedyura-WebApp', 'arduino', 'book-record'];

function pickRepos(apiRepos) {
  if (!Array.isArray(apiRepos) || apiRepos.length === 0) {
    return fallbackRepos;
  }

  const chosen = preferredRepos
    .map((repoName) => apiRepos.find((repo) => repo.name === repoName))
    .filter(Boolean);

  if (chosen.length === preferredRepos.length) {
    return chosen;
  }

  const extras = apiRepos.filter((repo) => !preferredRepos.includes(repo.name));
  return [...chosen, ...extras].slice(0, 4);
}

export default function CodePage() {
  const [repos, setRepos] = useState(fallbackRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadRepos() {
      try {
        const response = await fetch('https://api.github.com/users/preetx77/repos?per_page=100', {
          headers: { Accept: 'application/vnd.github+json' },
        });

        if (!response.ok) {
          throw new Error('GitHub request failed');
        }

        const data = await response.json();
        if (!ignore) {
          setRepos(pickRepos(data));
        }
      } catch {
        if (!ignore) {
          setRepos(fallbackRepos);
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
            <p className="eyebrow">code</p>
            <h2>Code proof, kept clean.</h2>
            <p className="section-copy">
              Live GitHub repositories stay visible, but the presentation is flatter and more restrained.
            </p>
          </div>

          {loading ? (
            <p className="loading-copy">loading repositories...</p>
          ) : (
            <div className="repo-list">
              {repos.map((repo, index) => (
                <a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer" className="repo-row">
                  <div className="row-index">0{index + 1}</div>
                  <div className="row-main">
                    <div className="row-heading">
                      <div>
                        <h3>{repo.name}</h3>
                        <p className="row-subtitle">{repo.language || 'code'}</p>
                      </div>
                      <span className="row-action">
                        open repo
                        <ArrowRight size={14} />
                      </span>
                    </div>
                    <p className="row-description">{repo.description || 'Project repository'}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
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
