import type { SocialLink } from '../types';

interface SocialIconsProps {
  links: SocialLink[];
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => (
  <div className="flex gap-4 justify-center lg:justify-end">
    {links.map((link) => (
      <a 
        key={link.name}
        href={link.url} 
        className="text-gray-400 hover:text-white transition-colors" 
        title={link.title}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d={link.icon} />
        </svg>
      </a>
    ))}
  </div>
); 