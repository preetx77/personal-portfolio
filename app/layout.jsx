import './globals.css';

export const metadata = {
  title: 'Preet Sonar',
  description: 'CS undergrad building quantitative systems. Decoding markets through systematic design.',
  openGraph: {
    title: 'Preet Sonar',
    description: 'CS undergrad building quantitative systems. Decoding markets through systematic design.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preet Sonar',
    description: 'CS undergrad building quantitative systems. Decoding markets through systematic design.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
