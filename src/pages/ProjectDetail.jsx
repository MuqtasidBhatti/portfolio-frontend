import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProjectDetail = () => {
    const { id } = useParams()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/${id}`)
                setProject(res.data)
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch project.')
            } finally {
                setLoading(false)
            }
        }
        fetchProject()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
                <div className="flex items-center gap-3 text-zinc-500">
                    <div className="w-4 h-4 border border-zinc-300 dark:border-zinc-600 border-t-emerald-400 rounded-full animate-spin" />
                    <span className="text-sm tracking-wide">Loading project...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center px-6">
                <div className="flex items-start gap-3 p-5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-sm max-w-md w-full">
                    <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
                </div>
            </div>
        )
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-500 text-sm">Project not found.</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white pt-24">
            <div className="max-w-4xl mx-auto px-6 py-16">

                <button
                    onClick={() => navigate('/projects')}
                    className="flex items-center gap-2 text-zinc-500 text-sm hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 mb-12 group cursor-pointer"
                >
                    <svg
                        className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </button>

                {/* Thumbnail */}
                {project.thumbnail && (
                    <div className="mb-10 overflow-hidden rounded-sm border border-zinc-200 dark:border-zinc-800">
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full object-cover max-h-96"
                        />
                    </div>
                )}

                {/* Title + Links */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h2>

                    <div className="flex gap-3 shrink-0">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-400 text-zinc-950 text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-emerald-300 transition-colors duration-200"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-semibold tracking-wider uppercase rounded-sm hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                GitHub
                            </a>
                        )}
                    </div>
                </div>

                <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 mb-10" />

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed mb-12">{project.description}</p>

                {/* Tech Stack + Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {project.techStack?.length > 0 && (
                        <div>
                            <h4 className="text-xs tracking-[0.3em] uppercase font-medium text-zinc-500 mb-4">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-mono rounded-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.tags?.length > 0 && (
                        <div>
                            <h4 className="text-xs tracking-[0.3em] uppercase font-medium text-zinc-500 mb-4">
                                Tags
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-900/40 text-emerald-600 dark:text-emerald-400/70 text-xs font-mono rounded-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail