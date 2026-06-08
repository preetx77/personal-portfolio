export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        background: '#06070a',
        color: '#f5f7fb',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: '560px', width: '100%' }}>
        <p style={{ margin: 0, color: '#7dd3fc', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
          404
        </p>
        <h1 style={{ margin: '0.9rem 0 0 0', fontSize: 'clamp(2.25rem, 6vw, 4rem)', letterSpacing: '-0.06em' }}>
          Page not found.
        </h1>
        <p style={{ margin: '1rem 0 0 0', color: '#99a3b7', lineHeight: 1.8 }}>
          The page you tried to open does not exist in this portfolio.
        </p>
        <a
          href="/"
          style={{
            marginTop: '1.5rem',
            display: 'inline-flex',
            border: '1px solid rgba(255,255,255,0.14)',
            background: 'rgba(255,255,255,0.04)',
            color: '#f5f7fb',
            padding: '0.9rem 1.1rem',
            borderRadius: '999px',
          }}
        >
          Back home
        </a>
      </div>
    </div>
  );
}
