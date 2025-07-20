# Portfolio Website

A modern, responsive portfolio website showcasing creative projects and digital work. Built with React, TypeScript, Tailwind CSS, and Three.js.

## 🚀 Live Site

Visit the live portfolio: [https://g4ztop.github.io](https://g4ztop.github.io)

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **3D Graphics**: Three.js
- **Deployment**: GitHub Pages + GitHub Actions

## 📁 Project Structure

```
website/
├── src/
│   ├── components/          # React components
│   ├── data/               # Project data and social links
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions and constants
│   └── assets/             # Media assets
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions deployment
└── dist/                   # Build output
```

## 🎨 Features

- **Interactive 3D Logo**: Metallic text effect using Three.js
- **Project Gallery**: Masonry-style grid layout
- **Dynamic Project Pages**: Individual pages for each project
- **Video Integration**: YouTube embeds and local video files
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Fast loading with modern build tools

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Adding Projects

Projects are defined in `src/data/projects.ts`. Each project can include:
- Title, description, and metadata
- Banner images and gallery photos
- Video embeds (YouTube or local files)
- Tools and processes used

## 🌐 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## 📄 License

This project is private and proprietary.
