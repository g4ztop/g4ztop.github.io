# Portfolio Template - Comprehensive Guide

## 🚀 Overview

This is a modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Three.js. It features a masonry-style project grid, dynamic project pages, and an interactive 3D metallic text logo.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Customization Guide](#customization-guide)
4. [Adding Projects](#adding-projects)
5. [Media Best Practices](#media-best-practices)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

## ⚡ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The site will be available at `http://localhost:5173/`

## 📁 Project Structure

```
website/
├── src/
│   ├── App.tsx              # Main application component
│   ├── components/
│   │   └── MetallicText.tsx # Three.js 3D text component
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── vite.config.ts          # Vite configuration
```

## 🎨 Customization Guide

### 1. Personal Information

Edit the following in `src/App.tsx`:

```typescript
// Update your name in the header
<MetallicText text="Your Name" className="text-4xl font-bold" />

// Update the intro text
<p className="text-lg text-gray-300 mb-2">Your personal introduction here.</p>

// Update social links
const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourusername',
    title: 'Instagram',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07...'
  },
  // Add more social links...
];
```

### 2. Color Scheme

The template uses a black and white theme. To customize colors, edit `src/index.css`:

```css
body {
  @apply bg-black text-white; /* Change background and text colors */
}
```

### 3. Typography

The template uses monospaced fonts. To change fonts, update `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Your-Font', 'monospace'],
      },
    },
  },
}
```

## 📝 Adding Projects

### 1. Project Data Structure

Each project follows this structure in `src/App.tsx`:

```typescript
interface Project {
  id: number;           // Unique identifier
  title: string;        // Project title
  description: string;  // Project description
  year: string;         // Year completed
  type: string;         // Category (e.g., "Web Development")
  image: string;        // Image for homepage grid button
  bannerImage?: string; // Optional banner image (falls back to 'image' if not provided)
  tools?: string[];     // Tools used (optional)
  processes?: string[]; // Processes/methods (optional)
}
```

### 2. Adding a New Project

Add your project to the `PROJECTS` array in `src/App.tsx`:

```typescript
const PROJECTS: Project[] = [
  // ... existing projects
  {
    id: 21,
    title: "Your New Project",
    description: "A detailed description of your project, including the problem it solves and your approach.",
    year: "2024",
    type: "Web Development",
    image: "https://your-image-url.com/project-image.jpg",
    tools: ["React", "TypeScript", "Node.js"],
    processes: ["User Research", "Prototyping", "Development"]
  }
];
```

### 3. Project Images

For each project, you'll need:
- **Grid Image** (`image`): Used on the homepage grid button
- **Banner Image** (`bannerImage`, optional): Used on the project page banner (falls back to grid image if not provided)
- **Gallery Images**: Additional images for the project page gallery

#### Image Usage Examples

```typescript
// Same image for both grid and banner
{
  id: 1,
  title: "My Project",
  image: "https://example.com/project-image.jpg"
  // bannerImage not specified - will use 'image' for banner
}

// Different images for grid and banner
{
  id: 2,
  title: "My Project",
  image: "https://example.com/grid-thumbnail.jpg",      // Square/portrait for grid
  bannerImage: "https://example.com/banner-wide.jpg"    // Wide image for banner
}
```

## 🎬 Media Best Practices

### Video Files

#### Supported Formats
- **MP4** (H.264 codec) - Most compatible
- **WebM** - Better compression, modern browsers
- **MOV** - Good for high quality, larger file sizes

#### Optimization Guidelines

1. **Resolution & Quality**
   ```
   Desktop: 1920x1080 (1080p) or 1280x720 (720p)
   Mobile: 1280x720 (720p) or 854x480 (480p)
   ```

2. **File Size Optimization**
   ```
   Short videos (<30s): Keep under 5MB
   Medium videos (30s-2min): Keep under 15MB
   Long videos (2min+): Keep under 50MB
   ```

3. **Compression Settings**
   ```
   Codec: H.264
   Bitrate: 2-5 Mbps for 1080p, 1-2 Mbps for 720p
   Frame Rate: 24-30 fps
   Audio: AAC, 128-192 kbps
   ```

4. **Upload Process**
   ```typescript
   // In your project data, replace the YouTube placeholder:
   const projectVideo = "https://your-video-hosting.com/video-id";
   
   // Update the iframe src in ProjectPage component:
   <iframe
     src={projectVideo}
     title={`${project.title} Video`}
     // ... other props
   />
   ```

#### Recommended Video Hosting
- **YouTube** (free, good compression)
- **Vimeo** (better quality, paid plans)
- **Cloudflare Stream** (fast loading, paid)
- **Self-hosted** (full control, requires CDN)

### GIF Files

#### When to Use GIFs
- Short animations (<3 seconds)
- Simple UI interactions
- Loading states
- Small file sizes (<2MB)

#### Optimization Guidelines

1. **Size & Duration**
   ```
   Duration: Keep under 3 seconds for web
   Dimensions: Max 800x600px
   File Size: Under 2MB
   ```

2. **Conversion Tools**
   ```
   Online: Ezgif.com, GIPHY
   Desktop: Photoshop, After Effects
   Command Line: ImageMagick, FFmpeg
   ```

3. **Alternative to GIFs**
   ```typescript
   // Use MP4 videos instead of GIFs for better performance:
   <video autoPlay loop muted playsInline>
     <source src="animation.mp4" type="video/mp4" />
   </video>
   ```

### Image Files

#### Supported Formats
- **WebP** - Best compression, modern browsers
- **JPEG** - Good for photos, universal support
- **PNG** - Good for graphics with transparency
- **AVIF** - Best compression, limited support

#### Optimization Guidelines

1. **Resolution Guidelines**
   ```
   Homepage Grid: 400-800px width
   Project Banner: 1200-1920px width
   Gallery Images: 800-1200px width
   ```

2. **File Size Targets**
   ```
   Thumbnails: Under 100KB
   Gallery Images: Under 500KB
   Banner Images: Under 1MB
   ```

3. **Compression Tools**
   ```
   Online: TinyPNG, Squoosh.app
   Desktop: ImageOptim, FileOptimizer
   Command Line: ImageMagick, Sharp
   ```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Update this
     // ... other config
   })
   ```

2. **Create GitHub Action**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages

### Other Hosting Options

- **Netlify**: Drag and drop `dist` folder
- **Vercel**: Connect GitHub repository
- **Firebase**: Use Firebase Hosting
- **AWS S3**: Upload to S3 bucket

## 🔧 Troubleshooting

### Common Issues

1. **Three.js Not Loading**
   ```bash
   npm install three @types/three
   ```

2. **Images Not Displaying**
   - Check image URLs are accessible
   - Verify CORS settings for external images
   - Use relative paths for local images

3. **Build Errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Performance Issues**
   - Optimize image sizes
   - Use WebP format where possible
   - Compress videos appropriately
   - Consider lazy loading for images

### Performance Tips

1. **Image Optimization**
   ```typescript
   // Use responsive images
   <img
     srcSet="image-400.jpg 400w, image-800.jpg 800w"
     sizes="(max-width: 600px) 400px, 800px"
     src="image-800.jpg"
     alt="Description"
   />
   ```

2. **Lazy Loading**
   ```typescript
   // Add loading="lazy" to images
   <img
     src="image.jpg"
     loading="lazy"
     alt="Description"
   />
   ```

3. **Video Optimization**
   ```typescript
   // Use poster images for videos
   <video poster="video-poster.jpg">
     <source src="video.mp4" type="video/mp4" />
   </video>
   ```

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments in `src/App.tsx`
3. Check browser console for errors
4. Verify all dependencies are installed

## 🎯 Next Steps

1. **Customize Content**: Update projects, images, and text
2. **Add Analytics**: Google Analytics, Plausible, or similar
3. **SEO Optimization**: Add meta tags, sitemap, robots.txt
4. **Performance**: Optimize images and videos
5. **Testing**: Test on different devices and browsers

---

**Happy coding! 🚀** 