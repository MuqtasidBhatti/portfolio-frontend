import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import axios from 'axios'

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
                setProjects(res.data)
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch projects.')
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [])

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white pt-24">
            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* Page Header */}
                <div className="mb-16">
                    <span className="text-emerald-500 dark:text-emerald-400 text-xs tracking-[0.3em] uppercase font-medium">
                        My Work
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mt-4">
                        Projects
                    </h2>
                    <div className="h-px w-16 bg-emerald-500 dark:bg-emerald-400 mt-6" />
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex items-center gap-3 text-zinc-500">
                        <div className="w-4 h-4 border border-zinc-300 dark:border-zinc-600 border-t-emerald-400 rounded-full animate-spin" />
                        <span className="text-sm tracking-wide">Loading projects...</span>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="flex items-start gap-3 p-5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-sm">
                        <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                        <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
                    </div>
                )}

                {/* Empty State */}
                {!loading && !error && projects.length === 0 && (
                    <div className="py-24 text-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-sm">
                        <p className="text-zinc-400 dark:text-zinc-600 text-sm tracking-wide">No projects yet.</p>
                    </div>
                )}

                {/* Projects Grid */}
                {!loading && !error && projects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects