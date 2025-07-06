import { useCallback } from 'react';
import type { Project } from '../types';

interface ProjectIndexProps {
  projects: Project[];
}

export const ProjectIndex: React.FC<ProjectIndexProps> = ({ projects }) => {
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