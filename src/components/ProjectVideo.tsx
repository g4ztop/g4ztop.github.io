import type { Project } from '../types';

interface ProjectVideoProps {
  project: Project;
}

export const ProjectVideo: React.FC<ProjectVideoProps> = ({ project }) => (
  <div className="space-y-8">
    {/* Main Video */}
    {project.videoUrl && (
      <div className="relative w-full h-0 pb-[56.25%] bg-gray-900 rounded-md overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={project.videoUrl}
          title={`${project.title} Video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )}
    
    {/* Additional Videos */}
    {project.additionalVideos && project.additionalVideos.length > 0 && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.additionalVideos.map((video, index) => (
          <div key={index} className="bg-gray-900 rounded-md overflow-hidden">
            <video
              className="w-full h-auto"
              src={video}
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    )}
  </div>
); 