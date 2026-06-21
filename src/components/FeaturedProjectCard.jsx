import React from 'react'
import { useNavigate } from 'react-router-dom'

const FeaturedProjectCard = ({ project }) => {
    const navigate = useNavigate()

    return (
        <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-emerald-400 transition-all duration-300 group">
            <div className="flex flex-col lg:flex-row">

                {/* Thumbnail - larger on featured */}
                <div className="overflow-hidden lg:w-1/2 h-64 lg:h-auto">
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8 lg:w-1/2">
                    <div>
                        {/* Featured label */}
                        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-emerald-500 dark:text-emerald-400 border border-emerald-500/30 dark:border-emerald-400/30 px-3 py-1 rounded-sm mb-4">
                            Featured Project
                        </span>

                        <h3 className="text-zinc-900 dark:text-white text-2xl font-bold mb-3">
                            {project.title}
                        </h3>

                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-4">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                        <div className="flex gap-4">
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
                            className="text-xs px-4 py-2 bg-emerald-500 dark:bg-emerald-400 text-white dark:text-zinc-950 font-semibold rounded hover:bg-emerald-400 dark:hover:bg-emerald-300 transition-all duration-200 cursor-pointer"
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjectCard