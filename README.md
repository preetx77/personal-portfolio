 portfolio

A minimal, research-focused portfolio for quantitative systems engineering.

**Live Preview:** Add your deployed Vercel URL here after deployment

---

## Features

- ✨ **Minimal & Clean Design** — Fast, distraction-free
- 🔗 **GitHub Integration** — Auto-pulls your top 4 projects
- 📊 **Research-First** — Highlights your quantitative work
- 📱 **Responsive** — Works on desktop, tablet, mobile
- ⚡ **Optimized** — Built with Next.js, deployed on Vercel

---

## Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Icons:** Lucide React
- **Styling:** CSS-in-JS (no build step required)
- **Hosting:** Vercel (free, automatic deployments from GitHub)

---

## Setup & Local Development

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it live.

---

## Deployment to Vercel

### Option A: Simple (Recommended)

1. **Push to GitHub** — Commit and push this folder to a GitHub repository
2. **Connect to Vercel** — Go to [vercel.com](https://vercel.com), click "New Project"
3. **Import GitHub repo** — Select your portfolio repository
4. **Deploy** — Click deploy, Vercel handles the rest

Automatic deployments: Every push to main triggers a new build.

### Option B: Manual

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site goes live immediately.

---

## Customization

### Edit Bio & Tagline
In `app/page.jsx`, find the Hero section:
```jsx
<p style={{ fontSize: '20px', color: '#666', margin: '0.5rem 0 2rem 0', fontWeight: 500 }}>
  decoding markets through systematic design
</p>
```

### Add/Update Projects
Projects are auto-fetched from GitHub. To manually override:
In `app/page.jsx`, modify the fallback data in the `.catch()` block of the `useEffect`:
```jsx
{
  name: 'your-project-name',
  description: 'Project description',
  url: 'https://github.com/preetx77/your-project',
  language: 'Python',
}
```

### Update Contact Info
In `app/page.jsx`, find the Social Links section and update:
- GitHub: `https://github.com/preetx77`
- LinkedIn: `https://www.linkedin.com/in/preet-sonar777/`
- Email: `preetxyz@gmail.com`

### Update Research Section
Add or modify research projects in the Research section. Currently has:
1. SpaceX IPO Deep Dive
2. Narrative Momentum Score
3. Volatility Systems

Add links to your actual analysis/repositories.

### Update Experience
Modify the Experience section to reflect your current/past roles.

### Colors & Styling
Global colors are hardcoded in inline styles. Main colors:
- **Background:** `#f8f7f5` (light cream)
- **Text:** `#1a1a1a` (dark gray/black)
- **Borders:** `#e5e3e0` (light gray)
- **Secondary Text:** `#666` (medium gray)

Change these values in `app/page.jsx` inline styles if you want a different palette.

---

## File Structure

```
portfolio/
├── app/
│   ├── layout.jsx        # Root layout (metadata, fonts)
│   ├── page.jsx          # Main portfolio page
│   └── globals.css       # Global styles
├── package.json
├── next.config.js
├── .gitignore
└── README.md
```

---

## Performance Tips

- **Images:** If you add images, optimize them (use WebP, compress)
- **Links:** External links open in new tabs (target="_blank")
- **GitHub API:** The portfolio fetches repos on page load. This is cached by Vercel, so it's fast.

---

## SEO & Metadata

Update in `app/layout.jsx`:
```jsx
export const metadata = {
  title: 'Preet Sonar',
  description: 'CS undergrad building quantitative systems. Decoding markets through systematic design.',
  openGraph: {
    title: 'Preet Sonar',
    description: 'Quantitative systems engineer | CS + Finance',
  },
}
```

---

## Next Steps

1. **Deploy** to Vercel (see Deployment section)
2. **Update Research** links to your actual analysis
3. **Add custom domain** (optional, in Vercel settings)
4. **Share** your portfolio link

---

## Questions?

- Check the source code comments in `app/page.jsx`
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js docs: [nextjs.org](https://nextjs.org)

---

**Built with intentionality. No frills. Just execution.**
