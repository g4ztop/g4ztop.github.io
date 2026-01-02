import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative overflow-hidden block break-inside-avoid p-0 rounded-[10px] border-[2px] border-white"
    >
      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className="w-full h-64 bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Error placeholder */}
      {imageError && (
        <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Image not available</div>
        </div>
      )}
      
      <img
        src={project.image}
        alt={project.title}
        className={`w-full h-auto object-cover transition-all duration-500 group-hover:!scale-150 rounded-lg ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-black text-white overflow-hidden -mx-1">
            {/* Dashed white line on top */}
            <div className="h-1 border-t-[3px] border-dashed border-white"></div>
            
            {/* Content */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-white mb-1">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs text-gray-400 mb-1 font-mono">
                  {project.subtitle}
                </p>
              )}
              <p className="text-xs text-gray-300 mb-1">
                {project.year}
              </p>
              <p className="text-xs text-gray-200 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
