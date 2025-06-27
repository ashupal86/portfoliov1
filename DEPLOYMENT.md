# 🚀 Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. **Generate Favicons**
Visit [Favicon.io](https://favicon.io/favicon-generator/) and create favicons with:
- **Text:** AP
- **Background:** Rounded, #0066cc (blue)
- **Font:** Inter or similar system font
- **Text Color:** #ffffff (white)

Download and replace these files in `public/`:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

### 2. **Add Your Resume**
✅ Your resume is already copied to `public/resume.pdf`

### 3. **Add Your Photo**
- Add `profile-photo.jpg` to `public/` folder
- Recommended: 400x400px, square format

### 4. **Update Domain URLs**
Replace `https://ashishpal.dev/` with your actual domain in:
- `index.html` (meta tags)
- `public/sitemap.xml`
- `netlify.toml` or `vercel.json`

## 🎯 Recommended: Netlify Deployment

### **Why Netlify?**
- ✅ **Best free tier** for portfolios
- ✅ **Form handling** (100 submissions/month)
- ✅ **Edge functions** for advanced features
- ✅ **Better analytics** and monitoring
- ✅ **Instant rollbacks** if needed
- ✅ **Branch previews** for testing

### **Quick Netlify Deploy**

#### Option 1: Drag & Drop (Fastest)
```bash
# Build the project
npm run build

# Go to https://netlify.com
# Drag the 'dist' folder to deploy
```

#### Option 2: Git Integration (Recommended)
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repo
   - Build settings are auto-detected from `netlify.toml`

3. **Auto-deployment setup:**
   - Every push to `main` = automatic deployment
   - Preview deployments for pull requests

### **Custom Domain Setup**
1. **Buy a domain** (recommended: Namecheap, Cloudflare)
2. **In Netlify dashboard:**
   - Go to Domain settings
   - Add custom domain
   - Follow DNS configuration steps
3. **SSL is automatic** ✅

## 🔧 Alternative: Vercel Deployment

### **Quick Vercel Deploy**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
npm run build
vercel --prod
```

### **Git Integration**
- Import from GitHub at [vercel.com](https://vercel.com)
- Settings auto-detected from `vercel.json`

## 📊 Performance Monitoring

### **Netlify Analytics** (Recommended)
- **Free tier:** Basic analytics
- **Paid tier:** Advanced insights ($9/month)

### **Google Analytics 4** (Free)
Add to `index.html` before `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Performance Testing**
- **Lighthouse:** Built into Chrome DevTools
- **PageSpeed Insights:** [web.dev/measure](https://web.dev/measure)
- **GTmetrix:** [gtmetrix.com](https://gtmetrix.com)

## 🎯 Post-Deployment Checklist

### ✅ **SEO Setup**
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify social media meta tags with [Open Graph Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### ✅ **Performance Verification**
- [ ] Run Lighthouse audit (aim for 95+ performance score)
- [ ] Test on mobile devices
- [ ] Verify all links work correctly
- [ ] Test resume download functionality
- [ ] Check contact form (if implemented)

### ✅ **Security**
- [ ] Verify HTTPS is working
- [ ] Check security headers with [Security Headers](https://securityheaders.com)
- [ ] Test on different browsers

## 🚀 Going Live Commands

### **Final Build & Deploy**
```bash
# Final production build
npm run build

# Test production build locally
npm run preview

# Deploy to Netlify (if using CLI)
npm run deploy:netlify

# Deploy to Vercel (if using CLI)  
npm run deploy:vercel
```

## 📈 Expected Performance Metrics

With these optimizations, you should achieve:
- **Lighthouse Performance:** 95-100
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1
- **Time to Interactive:** <3s
- **Bundle Size:** ~200KB total (gzipped: ~60KB)

## 🔗 Useful Resources

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Web Performance:** [web.dev](https://web.dev)
- **SEO Guide:** [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

## 🆘 Troubleshooting

### **Build Fails**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Routing Issues (404 on refresh)**
- Verify `_redirects` file exists (Netlify)
- Verify `vercel.json` rewrites (Vercel)

### **Slow Loading**
- Check image optimization
- Run `npm run analyze` to check bundle size
- Consider lazy loading for images

---

🎉 **Your portfolio is deployment-ready!** Choose Netlify for the best free tier experience. 