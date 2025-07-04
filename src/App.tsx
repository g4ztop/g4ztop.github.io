import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Project data - you can customize these
const projects = [
  { id: 1, title: "Project 1", description: "Description for project 1" },
  { id: 2, title: "Project 2", description: "Description for project 2" },
  { id: 3, title: "Project 3", description: "Description for project 3" },
  { id: 4, title: "Project 4", description: "Description for project 4" },
  { id: 5, title: "Project 5", description: "Description for project 5" },
  { id: 6, title: "Project 6", description: "Description for project 6" },
  { id: 7, title: "Project 7", description: "Description for project 7" },
  { id: 8, title: "Project 8", description: "Description for project 8" },
  { id: 9, title: "Project 9", description: "Description for project 9" },
  { id: 10, title: "Project 10", description: "Description for project 10" },
  { id: 11, title: "Project 11", description: "Description for project 11" },
  { id: 12, title: "Project 12", description: "Description for project 12" },
  { id: 13, title: "Project 13", description: "Description for project 13" },
  { id: 14, title: "Project 14", description: "Description for project 14" },
  { id: 15, title: "Project 15", description: "Description for project 15" },
  { id: 16, title: "Project 16", description: "Description for project 16" },
  { id: 17, title: "Project 17", description: "Description for project 17" },
  { id: 18, title: "Project 18", description: "Description for project 18" },
  { id: 19, title: "Project 19", description: "Description for project 19" },
  { id: 20, title: "Project 20", description: "Description for project 20" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block p-4 border border-gray-700 rounded-lg hover:border-gray-500 hover:bg-gray-900 transition-all duration-200 group"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>
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
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-8">{project.description}</p>
          
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
