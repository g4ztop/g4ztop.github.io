import MetallicText from './MetallicText';
import { SocialIcons } from './SocialIcons';
import { SITE_CONFIG } from '../utils/constants';
import type { SocialLink } from '../types';

interface HeaderProps {
  socialLinks: SocialLink[];
}

export const Header: React.FC<HeaderProps> = ({ socialLinks }) => (
  <div className="max-w-7xl mx-auto mb-8">
    <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
      <MetallicText text={SITE_CONFIG.title} className="text-4xl font-bold" />
      <div className="text-center lg:text-right">
        <p className="text-lg text-gray-300 mb-2">{SITE_CONFIG.description}</p>
        <SocialIcons links={socialLinks} />
      </div>
    </header>
  </div>
); 