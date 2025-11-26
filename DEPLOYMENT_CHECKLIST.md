# 📋 Deployment Checklist

Use this checklist before deploying to Railway.com

## Pre-Deployment

### Images
- [ ] Composite Trump image saved in project directory
- [ ] Run `python split_composite.py trump-composite.jpg`
- [ ] Verify 6 images created in `images/` directory:
  - [ ] `trump-1-neutral.jpg`
  - [ ] `trump-2-slightly-annoyed.jpg`
  - [ ] `trump-3-annoyed.jpg`
  - [ ] `trump-4-angry.jpg`
  - [ ] `trump-5-very-angry.jpg`
  - [ ] `trump-6-maximum-anger.jpg`
- [ ] Check image file sizes (should be <500KB each for optimal loading)

### Code Configuration
- [ ] Update Campact donation URL in `script.js` (line 107)
- [ ] Test locally: `npm install && npm start`
- [ ] Verify slider works (0€ to 1000€)
- [ ] Verify crossfading is smooth
- [ ] Test on mobile viewport (responsive design)
- [ ] Check all anger levels display correctly

### Version Control
- [ ] All changes committed to git
- [ ] Images added and committed: `git add images/`
- [ ] Pushed to GitHub: `git push origin main`
- [ ] Repository is public or Railway has access

## Railway Setup

### Initial Setup
- [ ] Create Railway account at https://railway.com
- [ ] Install Railway CLI: `npm install -g @railway/cli` (optional)
- [ ] Login to Railway dashboard

### Deployment
- [ ] Click "New Project" in Railway dashboard
- [ ] Select "Deploy from GitHub repo"
- [ ] Authorize Railway to access GitHub
- [ ] Select `trump-donation-page` repository
- [ ] Railway auto-detects Node.js project
- [ ] Wait for build to complete

### Domain Configuration
- [ ] Generate Railway subdomain (Settings → Domains)
- [ ] Or add custom domain
- [ ] Note the URL: `https://your-project.railway.app`

### Environment Variables (Optional)
- [ ] Set `NODE_ENV=production` (if needed)
- [ ] Add any custom configuration variables

## Post-Deployment Testing

### Functionality Tests
- [ ] Visit deployed URL
- [ ] Slider moves smoothly from 0-1000€
- [ ] All 6 Trump images load correctly
- [ ] Crossfading effect works without flicker
- [ ] Donation amount updates in real-time
- [ ] Messages change based on slider position
- [ ] "Donate Now" button works and redirects correctly

### Device Testing
- [ ] Test on desktop browser (Chrome, Firefox, Safari)
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Check landscape and portrait orientations

### Performance
- [ ] Page loads in <3 seconds
- [ ] Images don't flicker during transitions
- [ ] Slider is responsive to input
- [ ] No console errors (press F12)

### Visual Quality
- [ ] Images are sharp and clear
- [ ] Text is readable over dark overlay
- [ ] Colors match design intent
- [ ] Layout is centered and balanced

## Troubleshooting

If deployment fails:
- [ ] Check Railway logs (Dashboard → Deployments → View Logs)
- [ ] Verify `package.json` has correct start script
- [ ] Ensure images are committed to repository
- [ ] Check file paths are case-sensitive
- [ ] Review `RAILWAY_DEPLOYMENT.md` for common issues

## Optimization (After Successful Deployment)

- [ ] Optimize image sizes if loading is slow
- [ ] Consider adding a loading spinner
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain with better branding
- [ ] Monitor Railway metrics for usage patterns

## Final Steps

- [ ] Share URL with stakeholders
- [ ] Document any custom configuration
- [ ] Set up monitoring/alerts (if needed)
- [ ] Celebrate successful deployment! 🎉

---

**Quick Deploy Command:**
```bash
# One-line deploy (after setup)
git add . && git commit -m "Deploy to Railway" && git push
```

Railway will automatically detect the push and redeploy.
