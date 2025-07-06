export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  type: string;
  image: string;
  bannerImage?: string;
  tools?: string[];
  processes?: string[];
  projectImages?: string[];
  videoUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  title: string;
}

export interface MetallicTextProps {
  text: string;
  className?: string;
  onClick?: () => void;
} 