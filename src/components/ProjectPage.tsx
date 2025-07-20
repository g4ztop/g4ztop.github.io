import { Link } from 'react-router-dom';
import { useMemo, useEffect } from 'react';
import { PROJECTS } from '../data';
import { 
  ProjectGallery, 
  ProjectVideo, 
  MetallicText 
} from './index';
import { DEFAULT_TOOLS, DEFAULT_PROCESSES, SITE_CONFIG } from '../utils';

interface ProjectPageProps {
  projectId: string;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ projectId }) => {
  const project = useMemo(() => 
    PROJECTS.find(p => p.id === parseInt(projectId)), 
    [projectId]
  );

  // Scroll to top when project page loads
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Also scroll after a small delay to ensure content is loaded
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [projectId]);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Project Not Found</h2>
          <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const projectImages = project.projectImages;

  return (
    <div className="min-h-screen bg-black text-white p-0 font-mono">
      {/* Banner */}
      <div className="w-full bg-black relative">
        <img
          src={project.bannerImage || project.image}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover object-center"
        />
        {/* Three.js Logo Overlay */}
        <div className="absolute top-0 left-0 m-4 z-10">
          <MetallicText 
            text={SITE_CONFIG.logoText} 
            className="w-[220px] h-[60px]" 
            onClick={() => window.location.href = '/'}
          />
        </div>
      </div>
      
      {/* Title */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
          {project.title}
        </h1>
      </div>
      
      {/* Two Columns */}
      <div className="max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Description */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-base text-gray-200 mb-4">{project.description}</p>
        </div>
        {/* Right: Tools & Processes */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tools & Processes</h2>
          <ul className="mb-2">
            {(project.tools || DEFAULT_TOOLS).map((tool, i) => (
              <li key={i} className="text-base text-gray-200 list-disc ml-5">
                {tool}
              </li>
            ))}
          </ul>
          <ul>
            {(project.processes || DEFAULT_PROCESSES).map((proc, i) => (
              <li key={i} className="text-base text-gray-400 list-disc ml-5">
                {proc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="max-w-5xl mx-auto px-4 mt-16">
        <ProjectVideo project={project} />
      </div>
      
      {/* Standalone Image */}
      {project.standaloneImage && (
        <div className="max-w-5xl mx-auto px-4 mt-16">
          <div className="bg-gray-900 rounded-md overflow-hidden">
            <img
              src={project.standaloneImage}
              alt={`${project.title} Standalone`}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
      
      {/* Project Images Grid */}
      {projectImages && projectImages.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 mt-16">
          <ProjectGallery project={project} projectImages={projectImages} />
        </div>
      )}
      
      <div className="max-w-5xl mx-auto px-4 mt-12 mb-8">
        <Link to="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}; 