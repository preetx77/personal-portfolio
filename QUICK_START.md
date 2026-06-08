# 🚀 RONIN PORTFOLIO — QUICK START

## What You've Got

A **minimal, cool, research-focused portfolio** ready to deploy in minutes.

### Files Included:
- `app/page.jsx` — Main portfolio (all the content)
- `app/layout.jsx` — Page metadata & setup
- `app/globals.css` — Base styles
- `package.json` — Dependencies
- `next.config.js` — Next.js config
- `README.md` — Full documentation

---

## 3-Step Deployment (5 minutes)

### Step 1: Upload to GitHub
```bash
# Create a new GitHub repo called "portfolio"
# Push these files to main branch

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/preetx77/portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your portfolio repo
4. Click "Deploy"

**Done.** Your site is live at `portfolio.vercel.app`

### Step 3: Custom Domain (Optional)
In Vercel dashboard → Settings → Domains, add your custom domain.

---

## What's Live Right Now

✅ **Hero section** with your name + tagline  
✅ **About section** with background, focus areas, tech stack  
✅ **Research section** with your 3 main projects (SpaceX, NMS, Volatility)  
✅ **Code section** — Auto-pulls 4 repos from GitHub (portfolio-manager, Vedyura, arduino, etc.)  
✅ **Experience section** with Calchas Research + DSA grind  
✅ **Social links** — GitHub, LinkedIn, Email  

---

## Quick Customization

### Change your tagline:
In `app/page.jsx`, find this line (around line 60):
```jsx
decoding markets through systematic design
```
Replace with whatever you want.

### Update research project links:
In `app/page.jsx`, find the "Research" section. All three projects link to `https://github.com/preetx77` right now. Update these to point to your actual analysis/repos.

### Add your real research descriptions:
Look for the research project descriptions in the code and update them to match your actual work.

### Change colors (optional):
Global colors are in inline styles. Main ones:
- Background: `#f8f7f5` 
- Text: `#1a1a1a`
- Links hover: `#666` → `#1a1a1a`

---

## What I Built For You

1. **Minimal design** — No bloat, fast load time
2. **GitHub-integrated** — Auto-pulls your 4 best repos
3. **Research-first** — Your work is the hero, not your credentials
4. **Mobile-responsive** — Works on phone, tablet, desktop
5. **SEO-ready** — Proper metadata for social sharing
6. **Copy/paste ready** — Just deploy, no config needed

---

## Next Actions

**High Priority:**
1. Deploy to Vercel (3 minutes)
2. Update research section with your actual project links
3. Update descriptions to match your real work

**Medium Priority:**
4. Add custom domain (or skip, vercel.app is fine)
5. Share on LinkedIn with portfolio link

**Optional:**
6. Add blog section (requires more setup)
7. Add case studies for projects
8. Add interactive dashboards

---

## Testing Locally (Before Deploy)

If you want to test before pushing to GitHub:

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

---

## Tagline + Bio (Current)

**Tagline:** "decoding markets through systematic design"

**Bio:** "CS undergrad building quantitative systems | finite markets, infinite edges"

**One-liner in About:** "CS undergraduate at tier-3 institution pursuing asymmetric outcomes in quantitative finance."

Feel free to edit these. They're supposed to be intellectual + snappy.

---

## Support

- **Next.js docs:** https://nextjs.org/docs
- **Vercel docs:** https://vercel.com/docs
- **Full README:** See README.md in the files

---

## You're All Set 🎯

Your portfolio is:
- ✅ Code-ready
- ✅ Design-ready  
- ✅ Deploy-ready
- ✅ Customizable

Just push to GitHub → deploy to Vercel → share.

**Execution > Perfection**
