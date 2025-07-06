import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useMemo, useEffect } from 'react';
import { PROJECTS, SOCIAL_LINKS } from './data';
import { 
  Header, 
  ProjectCard, 
  ProjectIndex, 
  ProjectGallery, 
  ProjectVideo, 
  MetallicText 
} from './components';
import { DEFAULT_TOOLS, DEFAULT_PROCESSES, DEFAULT_PROJECT_IMAGES, SITE_CONFIG } from './utils';

// Home Page Component
const Home = () => {
  const projectsGrid = useMemo(() => (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  ), []);

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      <Header socialLinks={SOCIAL_LINKS} />
      
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        {projectsGrid}
      </div>

      <ProjectIndex projects={PROJECTS} />

      {/* Copyright */}
      <div className="w-full flex justify-center mt-12 mb-2">
        <span className="text-xs text-white font-mono text-center">
          {SITE_CONFIG.copyright}
        </span>
      </div>
    </div>
  );
};

// Project Page Component
const ProjectPage = ({ projectId }: { projectId: string }) => {
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

// Project Page Wrapper Component
const ProjectPageWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <ProjectPage projectId={id || ""} />;
};

// Main App Component
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectPageWrapper />} />
    </Routes>
  </Router>
);

export default App;
