import type { Project } from '../types';

interface ProjectGalleryProps {
  project: Project;
  projectImages: string[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, projectImages }) => {
  if (project.id === 2) {
    // Special layout for ELENA VELEZ project
    return (
      <div className="space-y-2">
        {/* GIFs side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="relative overflow-hidden p-[5px] rounded-md">
            <img
              src={projectImages[0]}
              alt={`${project.title} - GIF 1`}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="relative overflow-hidden p-[5px] rounded-md">
            <img
              src={projectImages[1]}
              alt={`${project.title} - GIF 2`}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
        {/* Remaining images in masonry layout */}
        <div className="columns-1 md:columns-2 gap-2 space-y-2">
          {projectImages.slice(2).map((image, index) => (
            <div key={index + 2} className="relative overflow-hidden block break-inside-avoid p-[5px] rounded-md">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 3}`}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Standard masonry layout for other projects
  return (
    <div className="columns-1 md:columns-2 gap-2 space-y-2">
      {projectImages.map((image, index) => (
        <div key={index} className="relative overflow-hidden block break-inside-avoid p-[5px] rounded-md">
          <img
            src={image}
            alt={`${project.title} - Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
}; 