// Default values for projects
export const DEFAULT_TOOLS = ["Tool 1", "Tool 2"];
export const DEFAULT_PROCESSES = ["Process 1", "Process 2"];
export const DEFAULT_PROJECT_IMAGES = [
  "https://picsum.photos/400/600?random=21",
  "https://picsum.photos/600/400?random=22",
  "https://picsum.photos/500/500?random=23",
  "https://picsum.photos/700/300?random=24",
  "https://picsum.photos/400/800?random=25",
  "https://picsum.photos/600/500?random=26"
];

// Site configuration
export const SITE_CONFIG = {
  title: "Mitchell Craft",
  description: "A short intro about yourself.",
  copyright: "All Works ©Mitchell Craft, 2025",
  logoText: "INCWORKS"
} as const;

// Responsive breakpoints for grid layouts
export const GRID_BREAKPOINTS = {
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
} as const; 