import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { PROJECTS, SOCIAL_LINKS } from './data';
import { 
  Header, 
  ProjectCard, 
  ProjectIndex
} from './components';
import { SITE_CONFIG } from './utils';

// Lazy load the project page component
const ProjectPage = lazy(() => import('./components/ProjectPage').then(module => ({ default: module.ProjectPage })));

// Loading component for lazy-loaded routes
const LoadingSpinner = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p>Loading...</p>
    </div>
  </div>
);

// Home Page Component
const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 font-mono">
      <Header socialLinks={SOCIAL_LINKS} />
      
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
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

// Project Page Wrapper Component
const ProjectPageWrapper = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Invalid Project ID</h2>
        </div>
      </div>
    );
  }
  return <ProjectPage projectId={id} />;
};

// Main App Component
const App = () => (
  <Router>
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPageWrapper />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
