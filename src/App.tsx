import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

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
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-lg text-gray-300">A short intro about yourself.</p>
      </header>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group relative overflow-hidden rounded-lg block break-inside-avoid"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white text-black overflow-hidden">
                    {/* Colored bar on top */}
                    <div className="h-1 bg-blue-500"></div>
                    
                    {/* Content */}
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-black mb-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-1">
                        {project.year}
                      </p>
                      <p className="text-xs text-gray-700 leading-relaxed line-clamp-2">
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
