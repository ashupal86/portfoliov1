# Ashish Pal - Portfolio Website

A modern, responsive portfolio website built with React and optimized for performance and SEO.

## 🚀 Features

### Design & UX
- Clean, minimalist design inspired by xprilion.com
- Fully responsive layout for all devices
- Custom CSS with smooth animations and transitions
- Professional typography and color scheme
- Interactive hover effects and visual feedback

### Performance Optimizations
- Optimized Vite build configuration
- Code splitting and lazy loading
- Image optimization and caching
- Minified CSS and JavaScript
- GPU-accelerated animations
- Efficient bundle sizes

### SEO & Analytics
- Comprehensive meta tags and Open Graph data
- Structured data (JSON-LD) for search engines
- XML sitemap and robots.txt
- Semantic HTML with proper ARIA labels
- Fast loading times for better search rankings

### PWA Features
- Web app manifest for mobile installation
- Responsive design principles
- Offline-ready architecture
- App-like experience on mobile devices

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router DOM
- **Build Tool:** Vite
- **Styling:** Custom CSS with performance optimizations
- **Deployment:** Netlify/Vercel ready
- **SEO:** Meta tags, structured data, sitemap

## 📦 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/ashupal86/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Netlify (Recommended)
1. Fork this repository
2. Connect your GitHub account to Netlify
3. Import your repository
4. Deploy automatically with the included `netlify.toml` configuration

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts
4. Uses the included `vercel.json` configuration

### Manual Deployment
```bash
# Build the project
npm run build

# Upload the 'dist' folder to your hosting provider
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── robots.txt          # SEO crawler instructions
│   ├── sitemap.xml         # Site structure for search engines
│   ├── site.webmanifest    # PWA manifest
│   ├── _redirects          # Netlify routing configuration
│   └── [favicon files]     # Various favicon sizes
├── src/
│   ├── components/         # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Custom CSS styles
├── netlify.toml           # Netlify deployment configuration
├── vercel.json            # Vercel deployment configuration
├── vite.config.js         # Vite build configuration
└── package.json
```

## 🎨 Customization

### Adding Your Photo
1. Add your profile photo as `profile-photo.jpg` in the `public` folder
2. The image will automatically appear in the hero section
3. Recommended size: 400x400px or larger, square aspect ratio

### Updating Content
- **Personal Info:** Edit the content in each component file
- **Projects:** Update the projects array in `Projects.jsx`
- **Skills:** Modify the skills categories in `Skills.jsx`
- **Experience:** Edit the experience data in `Experience.jsx`

### SEO Optimization
- Update the domain in `index.html`, `sitemap.xml`, and deployment configs
- Modify meta descriptions and titles as needed
- Add your social media handles to the structured data

## 📊 Performance Features

### Build Optimizations
- **Tree Shaking:** Removes unused code
- **Code Splitting:** Separates vendor and app bundles
- **Minification:** Reduces file sizes
- **Asset Optimization:** Optimizes images and fonts

### Caching Strategy
- **Static Assets:** 1-year cache for images, CSS, JS
- **HTML:** No cache for immediate updates
- **Manifest:** 1-day cache for PWA updates

### Loading Performance
- **Preconnect:** DNS prefetch for external domains
- **Resource Hints:** Prefetch critical assets
- **Font Loading:** Optimized font display strategy

## 🔧 Configuration Files

### `vite.config.js`
- Build optimizations and code splitting
- Terser configuration for minification
- Asset organization and naming

### `netlify.toml` / `vercel.json`
- Deployment configurations
- Header security settings
- Caching policies
- Redirect rules for SPA routing

## 📈 SEO Features

### Meta Tags
- Title, description, keywords
- Open Graph for social media
- Twitter Card data
- Mobile viewport settings

### Structured Data
- Person schema with contact info
- Education and work experience
- Skills and technologies
- Social media profiles

### Technical SEO
- XML sitemap with proper priorities
- Robots.txt for search engine guidance
- Semantic HTML structure
- ARIA labels for accessibility

## 🚀 Performance Tips

1. **Images:** Optimize all images before adding them
2. **Content:** Keep content concise and relevant
3. **Dependencies:** Regularly update packages
4. **Monitoring:** Use tools like Lighthouse for performance audits

## 📞 Support

For questions or issues:
- **Email:** palbro86@gmail.com
- **GitHub:** [ashupal86](https://github.com/ashupal86)
- **LinkedIn:** [ashish-pal-5725a6257](https://linkedin.com/in/ashish-pal-5725a6257)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
