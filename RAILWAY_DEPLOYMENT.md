# 🚂 Railway Deployment Guide

Complete guide to deploying the Trump Anger Donation Page on Railway.com

## 📋 Prerequisites

1. **Railway Account**: Sign up at https://railway.com
2. **Trump Images**: The 6 anger level images in the `images/` directory
3. **GitHub Repository**: This repo pushed to GitHub

## 🚀 Quick Deploy (Recommended)

### Method 1: Deploy from GitHub

1. **Push your code to GitHub** (if not already done)
   ```bash
   git push origin main
   ```

2. **Go to Railway Dashboard**
   - Visit https://railway.app/dashboard
   - Click **"New Project"**

3. **Deploy from GitHub**
   - Select **"Deploy from GitHub repo"**
   - Authorize Railway to access your GitHub
   - Select this repository: `trump-donation-page`
   - Railway will auto-detect the Node.js project

4. **Add your Trump images**
   - Before deploying, make sure the `images/` directory contains all 6 images
   - Commit and push them to the repository

5. **Configure Environment Variables** (Optional)
   - In Railway dashboard, go to **Variables**
   - Add `CAMPACT_DONATION_URL` if you want to customize the donation link
   - Example: `https://www.campact.de/spenden/`

6. **Deploy!**
   - Railway will automatically build and deploy
   - You'll get a URL like `https://your-app.railway.app`

### Method 2: Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Link to your project (or create new)
railway link

# Deploy
railway up

# Generate a domain
railway domain
```

## 🔧 Configuration

### Environment Variables

You can set these in the Railway dashboard under **Variables**:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Port to run the server | Auto-set by Railway |
| `NODE_ENV` | Environment mode | `production` |

### Custom Domain

1. Go to your Railway project **Settings**
2. Click **Domains**
3. Click **Generate Domain** for a free railway.app subdomain
4. Or click **Custom Domain** to add your own domain

## 📁 Required Files for Deployment

Railway needs these files (already included):

✅ `package.json` - Node.js dependencies and start script
✅ `railway.toml` - Railway configuration
✅ `index.html` - Main page
✅ `style.css` - Styles
✅ `script.js` - Crossfading logic
✅ `images/` - Directory with 6 Trump images

## 🖼️ Adding Images Before Deployment

**CRITICAL:** Make sure to add the 6 Trump images before deploying!

```bash
# Split your composite image
pip install pillow
python split_composite.py trump-composite.jpg

# Verify images exist
ls images/

# Should show:
# trump-1-neutral.jpg
# trump-2-slightly-annoyed.jpg
# trump-3-annoyed.jpg
# trump-4-angry.jpg
# trump-5-very-angry.jpg
# trump-6-maximum-anger.jpg

# Commit and push
git add images/
git commit -m "Add Trump anger images"
git push
```

## 🔍 Troubleshooting

### Build Fails

**Error: Cannot find module 'serve'**
- Solution: Make sure `package.json` is in the repository root

**Error: Images not loading**
- Solution: Verify images are in the `images/` directory and committed to git
- Check file names match exactly (case-sensitive)

### Deployment Issues

**Port binding error**
- Railway automatically sets the `PORT` environment variable
- The `serve` command uses `-l $PORT` to bind correctly

**Images show 404**
- Ensure images are committed to git: `git add images/ && git commit`
- Check `.gitignore` doesn't exclude image files

### Performance

**Slow initial load**
- Images are preloaded via JavaScript
- Consider optimizing image sizes (target ~200-300KB per image)
- Use JPG format with 85-90% quality

## 🎨 Optimization Tips

### Image Optimization

```bash
# Install ImageMagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Optimize images
for img in images/*.jpg; do
  convert "$img" -quality 85 -resize 1920x1080^ -gravity center -extent 1920x1080 "optimized/$img"
done
```

### Caching Headers

The `serve` package automatically sets appropriate cache headers for static assets.

## 🌐 Post-Deployment

### 1. Test the Deployment

Visit your Railway URL and test:
- [ ] Slider moves smoothly from 0-1000€
- [ ] Images crossfade without flickering
- [ ] All 6 anger levels display correctly
- [ ] Responsive design works on mobile
- [ ] "Donate Now" button redirects correctly

### 2. Monitor

- View logs: Railway dashboard → **Deployments** → **View Logs**
- Check metrics: CPU, Memory, Request stats
- Set up alerts for downtime

### 3. Share

Your donation page is live! Share the URL:
- `https://your-project-name.railway.app`

## 💰 Railway Pricing

- **Free Tier**: $5 credit/month (enough for this static site)
- **Pro**: $20/month for higher limits
- This site uses minimal resources (~50MB RAM)

## 🔒 Security Considerations

1. **No sensitive data**: This is a static site, safe to deploy publicly
2. **HTTPS**: Automatically enabled by Railway
3. **No backend**: Pure frontend, no server-side processing

## 📊 Monitoring

Check your deployment health:

```bash
# Using Railway CLI
railway logs
railway status
```

Or via Dashboard:
- **Metrics**: View traffic and resource usage
- **Logs**: Real-time application logs
- **Deployments**: History and rollback options

## 🔄 Continuous Deployment

Railway automatically redeploys when you push to your connected branch:

```bash
# Make changes
git add .
git commit -m "Update donation messages"
git push

# Railway automatically detects and redeploys
```

## 📞 Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- GitHub Issues: Create an issue in this repository

---

## Quick Checklist

Before deploying to Railway:

- [ ] All 6 Trump images in `images/` directory
- [ ] Images are optimized (<500KB each)
- [ ] Code committed and pushed to GitHub
- [ ] Railway project created
- [ ] Repository linked to Railway
- [ ] Domain generated
- [ ] Tested locally with `npm start`

**Ready to deploy? Click "Deploy" in Railway!** 🚀
