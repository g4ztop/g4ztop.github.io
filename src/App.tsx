import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import MetallicText from './components/MetallicText';

// Project data - you can customize these with different image sizes
const projects = [
  { 
    id: 1, 
    title: "Project 1", 
    description: "Description for project 1",
    year: "2024",
    image: "https://picsum.photos/400/600?random=1"
  },
  { 
    id: 2, 
    title: "Project 2", 
    description: "Description for project 2",
    year: "2024",
    image: "https://picsum.photos/600/400?random=2"
  },
  { 
    id: 3, 
    title: "Project 3", 
    description: "Description for project 3",
    year: "2023",
    image: "https://picsum.photos/500/500?random=3"
  },
  { 
    id: 4, 
    title: "Project 4", 
    description: "Description for project 4",
    year: "2023",
    image: "https://picsum.photos/400/300?random=4"
  },
  { 
    id: 5, 
    title: "Project 5", 
    description: "Description for project 5",
    year: "2023",
    image: "https://picsum.photos/700/500?random=5"
  },
  { 
    id: 6, 
    title: "Project 6", 
    description: "Description for project 6",
    year: "2022",
    image: "https://picsum.photos/300/600?random=6"
  },
  { 
    id: 7, 
    title: "Project 7", 
    description: "Description for project 7",
    year: "2022",
    image: "https://picsum.photos/600/300?random=7"
  },
  { 
    id: 8, 
    title: "Project 8", 
    description: "Description for project 8",
    year: "2022",
    image: "https://picsum.photos/450/450?random=8"
  },
  { 
    id: 9, 
    title: "Project 9", 
    description: "Description for project 9",
    year: "2021",
    image: "https://picsum.photos/400/700?random=9"
  },
  { 
    id: 10, 
    title: "Project 10", 
    description: "Description for project 10",
    year: "2021",
    image: "https://picsum.photos/800/400?random=10"
  },
  { 
    id: 11, 
    title: "Project 11", 
    description: "Description for project 11",
    year: "2021",
    image: "https://picsum.photos/350/500?random=11"
  },
  { 
    id: 12, 
    title: "Project 12", 
    description: "Description for project 12",
    year: "2020",
    image: "https://picsum.photos/500/350?random=12"
  },
  { 
    id: 13, 
    title: "Project 13", 
    description: "Description for project 13",
    year: "2020",
    image: "https://picsum.photos/400/800?random=13"
  },
  { 
    id: 14, 
    title: "Project 14", 
    description: "Description for project 14",
    year: "2020",
    image: "https://picsum.photos/600/600?random=14"
  },
  { 
    id: 15, 
    title: "Project 15", 
    description: "Description for project 15",
    year: "2019",
    image: "https://picsum.photos/300/400?random=15"
  },
  { 
    id: 16, 
    title: "Project 16", 
    description: "Description for project 16",
    year: "2019",
    image: "https://picsum.photos/700/300?random=16"
  },
  { 
    id: 17, 
    title: "Project 17", 
    description: "Description for project 17",
    year: "2019",
    image: "https://picsum.photos/450/600?random=17"
  },
  { 
    id: 18, 
    title: "Project 18", 
    description: "Description for project 18",
    year: "2018",
    image: "https://picsum.photos/500/800?random=18"
  },
  { 
    id: 19, 
    title: "Project 19", 
    description: "Description for project 19",
    year: "2018",
    image: "https://picsum.photos/400/500?random=19"
  },
  { 
    id: 20, 
    title: "Project 20", 
    description: "Description for project 20",
    year: "2018",
    image: "https://picsum.photos/600/450?random=20"
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <header className="flex justify-between items-center">
          <MetallicText text="Mitchell Craft" className="text-4xl font-bold" />
          <div className="text-right">
            <p className="text-lg text-gray-300 mb-2">A short intro about yourself.</p>
            <div className="flex gap-4 justify-end">
              {/* Social links with icons */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Portfolio">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group relative overflow-hidden block break-inside-avoid border border-white p-[10px] rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-150 rounded-lg"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-black text-white overflow-hidden">
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
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectPage({ projectId }: { projectId: string }) {
  const project = projects.find(p => p.id === parseInt(projectId));
  
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Project Not Found</h2>
          <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>
        
        <div className="mt-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-gray-400 mb-4">{project.year}</p>
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>
          </div>
          
          {/* Project Image */}
          <div className="mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          {/* Add your project content here */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Project Details</h3>
            <p className="text-gray-300">
              This is where you can add detailed information about your project, 
              including technologies used, screenshots, links to live demos, 
              and any other relevant content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPageWrapper() {
  const { id } = useParams<{ id: string }>();
  return <ProjectPage projectId={id || ""} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPageWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
