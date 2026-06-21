import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-emerald-400 transition-all duration-300 group">
      {/* Thumbnail */}
      <div className="overflow-hidden h-48">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-zinc-900 dark:text-white text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links + Button */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-500 dark:text-emerald-400 hover:underline"
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
          <button
            onClick={() => navigate(`/projects/${project._id}`)}
            className="text-xs px-3 py-1.5 border border-emerald-500 dark:border-emerald-400 text-emerald-500 dark:text-emerald-400 rounded hover:bg-emerald-500 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-zinc-950 transition-all duration-200 cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard