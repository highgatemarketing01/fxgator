# Deploying FX Gator to Netlify

## Quick Deployment Steps

### 1. Push to GitHub
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/fx-gator.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Netlify

**Option A: Via Netlify Dashboard (Easiest)**
1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your `fx-gator` repository
5. Configure build settings (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables:
   - `VITE_SUPABASE_URL` = Your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = Your Supabase anon key
7. Click "Deploy site"

**Option B: Via Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify init
netlify deploy --prod
```

### 3. Configure Custom Domain (Subdomain)

**In Netlify:**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your subdomain: `fxgator.yourdomain.com`
4. Netlify will provide you with a DNS target (e.g., `subdomain.netlify.app`)

**In Squarespace DNS:**
1. Log into Squarespace
2. Go to Settings → Domains → DNS Settings
3. Add a CNAME record:
   - **Host/Name:** `fxgator` (or your chosen subdomain)
   - **Points to/Value:** The DNS target from Netlify
   - **TTL:** 3600

### 4. Enable HTTPS
Netlify automatically provisions SSL certificates once DNS is configured (takes a few minutes).

## Environment Variables

Make sure to add these in Netlify dashboard:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Continuous Deployment

Once connected to GitHub, Netlify will automatically deploy when you push to the main branch.

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Squarespace DNS Help: https://support.squarespace.com/hc/en-us/articles/360002101888
