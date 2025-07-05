import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useMemo, useCallback } from 'react';
import MetallicText from './components/MetallicText';

// Types
interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  type: string;
  image: string;        // Image for homepage grid button
  bannerImage?: string; // Optional banner image (falls back to 'image' if not provided)
  tools?: string[];
  processes?: string[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  title: string;
}

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: '#',
    title: 'Instagram',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    name: 'LinkedIn',
    url: '#',
    title: 'LinkedIn',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    name: 'Portfolio',
    url: '#',
    title: 'Portfolio',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  }
];

// Project data
const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: "Project 1", 
    description: "Description for project 1",
    year: "2024",
    type: "Web Development",
    image: "https://picsum.photos/400/600?random=1",
    bannerImage: "https://picsum.photos/1200/400?random=1banner", // Optional: different banner image
    tools: ["React", "Three.js", "Tailwind CSS"],
    processes: ["Design", "Development", "Deployment"]
  },
  { 
    id: 2, 
    title: "Project 2", 
    description: "Description for project 2",
    year: "2024",
    type: "Mobile App",
    image: "https://picsum.photos/600/400?random=2"
  },
  { 
    id: 3, 
    title: "Project 3", 
    description: "Description for project 3",
    year: "2023",
    type: "UI/UX Design",
    image: "https://picsum.photos/500/500?random=3"
  },
  { 
    id: 4, 
    title: "Project 4", 
    description: "Description for project 4",
    year: "2023",
    type: "Web Development",
    image: "https://picsum.photos/400/300?random=4"
  },
  { 
    id: 5, 
    title: "Project 5", 
    description: "Description for project 5",
    year: "2023",
    type: "Mobile App",
    image: "https://picsum.photos/700/500?random=5"
  },
  { 
    id: 6, 
    title: "Project 6", 
    description: "Description for project 6",
    year: "2022",
    type: "UI/UX Design",
    image: "https://picsum.photos/300/600?random=6"
  },
  { 
    id: 7, 
    title: "Project 7", 
    description: "Description for project 7",
    year: "2022",
    type: "Web Development",
    image: "https://picsum.photos/600/300?random=7"
  },
  { 
    id: 8, 
    title: "Project 8", 
    description: "Description for project 8",
    year: "2022",
    type: "Mobile App",
    image: "https://picsum.photos/450/450?random=8"
  },
  { 
    id: 9, 
    title: "Project 9", 
    description: "Description for project 9",
    year: "2021",
    type: "UI/UX Design",
    image: "https://picsum.photos/400/700?random=9"
  },
  { 
    id: 10, 
    title: "Project 10", 
    description: "Description for project 10",
    year: "2021",
    type: "Web Development",
    image: "https://picsum.photos/800/400?random=10"
  },
  { 
    id: 11, 
    title: "Project 11", 
    description: "Description for project 11",
    year: "2021",
    type: "Mobile App",
    image: "https://picsum.photos/350/500?random=11"
  },
  { 
    id: 12, 
    title: "Project 12", 
    description: "Description for project 12",
    year: "2020",
    type: "UI/UX Design",
    image: "https://picsum.photos/500/350?random=12"
  },
  { 
    id: 13, 
    title: "Project 13", 
    description: "Description for project 13",
    year: "2020",
    type: "Web Development",
    image: "https://picsum.photos/400/800?random=13"
  },
  { 
    id: 14, 
    title: "Project 14", 
    description: "Description for project 14",
    year: "2020",
    type: "Mobile App",
    image: "https://picsum.photos/600/600?random=14"
  },
  { 
    id: 15, 
    title: "Project 15", 
    description: "Description for project 15",
    year: "2019",
    type: "UI/UX Design",
    image: "https://picsum.photos/300/400?random=15"
  },
  { 
    id: 16, 
    title: "Project 16", 
    description: "Description for project 16",
    year: "2019",
    type: "Web Development",
    image: "https://picsum.photos/700/300?random=16"
  },
  { 
    id: 17, 
    title: "Project 17", 
    description: "Description for project 17",
    year: "2019",
    type: "Mobile App",
    image: "https://picsum.photos/450/600?random=17"
  },
  { 
    id: 18, 
    title: "Project 18", 
    description: "Description for project 18",
    year: "2018",
    type: "UI/UX Design",
    image: "https://picsum.photos/500/800?random=18"
  },
  { 
    id: 19, 
    title: "Project 19", 
    description: "Description for project 19",
    year: "2018",
    type: "Web Development",
    image: "https://picsum.photos/400/500?random=19"
  },
  { 
    id: 20, 
    title: "Project 20", 
    description: "Description for project 20",
    year: "2018",
    type: "Web Development",
    image: "https://picsum.photos/600/450?random=20"
  },
];

// Components
const SocialIcons = () => (
  <div className="flex gap-4 justify-center lg:justify-end">
    {SOCIAL_LINKS.map((link) => (
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

const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    to={`/project/${project.id}`}
    className="group relative overflow-hidden block break-inside-avoid p-[10px] rounded-md"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-150 rounded-md"
    />
    
    {/* Hover Overlay */}
    <div className="absolute inset-0 flex flex-col justify-end">
      <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="bg-black text-white overflow-hidden -mx-1">
          {/* Dashed white line on top */}
          <div className="h-1 border-t-2 border-dashed border-white"></div>
          
          {/* Content */}
          <div className="p-3">
            <h3 className="text-sm font-semibold text-white mb-1">
              {project.title}
            </h3>
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

const ProjectIndex = ({ projects }: { projects: Project[] }) => {
  const handleRowClick = useCallback((projectId: number) => {
    window.location.href = `/project/${projectId}`;
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-16 overflow-x-auto">
      <table className="min-w-full text-sm font-mono bg-black">
        <thead>
          <tr className="uppercase text-left text-white border-b border-white border-solid">
            <th className="py-2 px-4 font-bold">Title</th>
            <th className="py-2 px-4 font-bold text-center">Categories</th>
            <th className="py-2 px-4 font-bold text-right">Year</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="transition-colors bg-black text-white hover:bg-white hover:text-black cursor-pointer border-b border-white border-dashed"
              onClick={() => handleRowClick(project.id)}
              tabIndex={0}
              style={{ outline: 'none' }}
            >
              <td className="py-2 px-4 whitespace-nowrap font-bold tracking-wide uppercase">
                {project.title}
              </td>
              <td className="py-2 px-4 text-center whitespace-nowrap">
                {project.type?.toUpperCase() || ''}
              </td>
              <td className="py-2 px-4 text-right whitespace-nowrap">
                {project.year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Header = () => (
  <div className="max-w-7xl mx-auto mb-8">
    <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
      <MetallicText text="Mitchell Craft" className="text-4xl font-bold" />
      <div className="text-center lg:text-right">
        <p className="text-lg text-gray-300 mb-2">A short intro about yourself.</p>
        <SocialIcons />
      </div>
    </header>
  </div>
);

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
      <Header />
      
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        {projectsGrid}
      </div>

      <ProjectIndex projects={PROJECTS} />

      {/* Copyright */}
      <div className="w-full flex justify-center mt-12 mb-2">
        <span className="text-xs text-white font-mono text-center">
          All Works ©Mitchell Craft, 2025
        </span>
      </div>
    </div>
  );
};

const ProjectPage = ({ projectId }: { projectId: string }) => {
  const project = useMemo(() => 
    PROJECTS.find(p => p.id === parseInt(projectId)), 
    [projectId]
  );
  
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

  const defaultTools = ["Tool 1", "Tool 2"];
  const defaultProcesses = ["Process 1", "Process 2"];
  
  // Sample project images for the grid with varying aspect ratios (you can replace these with actual project images)
  const projectImages = [
    "https://picsum.photos/400/600?random=21",
    "https://picsum.photos/600/400?random=22",
    "https://picsum.photos/500/500?random=23",
    "https://picsum.photos/700/300?random=24",
    "https://picsum.photos/400/800?random=25",
    "https://picsum.photos/600/500?random=26"
  ];

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
            text="INCWORKS" 
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
            {(project.tools || defaultTools).map((tool, i) => (
              <li key={i} className="text-base text-gray-200 list-disc ml-5">
                {tool}
              </li>
            ))}
          </ul>
          <ul>
            {(project.processes || defaultProcesses).map((proc, i) => (
              <li key={i} className="text-base text-gray-400 list-disc ml-5">
                {proc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="max-w-5xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold mb-6">Project Video</h2>
        <div className="relative w-full h-0 pb-[56.25%] bg-gray-900 rounded-md overflow-hidden">
          {/* Placeholder for video - replace src with actual video URL */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title={`${project.title} Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      {/* Project Images Grid */}
      <div className="max-w-5xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {projectImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden block break-inside-avoid p-[10px] rounded-md">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 mt-12 mb-8">
        <Link to="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
};

const ProjectPageWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <ProjectPage projectId={id || ""} />;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectPageWrapper />} />
    </Routes>
  </Router>
);

export default App;
