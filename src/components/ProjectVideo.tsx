import type { Project } from '../types';

interface ProjectVideoProps {
  project: Project;
}

export const ProjectVideo: React.FC<ProjectVideoProps> = ({ project }) => (
  <div className="relative w-full h-0 pb-[56.25%] bg-gray-900 rounded-md overflow-hidden">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={project.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
      title={`${project.title} Video`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
); 