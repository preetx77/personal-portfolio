'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
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
            system fallback
          </p>
          <h1 style={{ margin: '0.9rem 0 0 0', fontSize: 'clamp(2.25rem, 6vw, 4rem)', letterSpacing: '-0.06em' }}>
            The app hit a hard failure.
          </h1>
          <p style={{ margin: '1rem 0 0 0', color: '#99a3b7', lineHeight: 1.8 }}>
            {error?.message || 'A global rendering error occurred.'}
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: '1.5rem',
              border: '1px solid rgba(255,255,255,0.14)',
              background: 'rgba(255,255,255,0.04)',
              color: '#f5f7fb',
              padding: '0.9rem 1.1rem',
              borderRadius: '999px',
              cursor: 'pointer',
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
