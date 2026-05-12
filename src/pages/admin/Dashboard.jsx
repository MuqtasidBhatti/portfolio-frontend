import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [deletingId, setDeletingId] = useState(null)
    const [togglingId, setTogglingId] = useState(null)

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const authHeaders = { headers: { Authorization: `Bearer ${token}` } }

    const fetchProjects = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/all`, authHeaders)
            setProjects(res.data)
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to load projects.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!token) {
            navigate('/admin/login')
            return
        }
        fetchProjects()
    }, [])

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this project? This cannot be undone.')) return
        setDeletingId(id)
        try {
            awaitaxios.delete(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, authHeaders)
            setProjects((prev) => prev.filter((p) => p._id !== id))
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete project.')
        } finally {
            setDeletingId(null)
        }
    }

    const handleToggle = async (id) => {
        setTogglingId(id)
        try {
            const res = axios.patch(`${import.meta.env.VITE_API_URL}/api/projects/${id}/toggle`, {}, authHeaders)
            setProjects((prev) =>
                prev.map((p) => (p._id === id ? res.data.project : p))
            )
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update publish status.')
        } finally {
            setTogglingId(null)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/admin/login')
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-white pt-24">
            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-16">
                    <div>
                        <span className="text-emerald-400 text-xs tracking-[0.3em] uppercase font-medium">
                            Admin
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                            Dashboard
                        </h2>
                        <div className="h-px w-16 bg-emerald-400 mt-4" />
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => navigate('/admin/add')}
                            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-400 text-zinc-950 text-xs font-semibold tracking-wider uppercase rounded-sm hover:bg-emerald-300 transition-colors duration-200 cursor-pointer"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            Add Project
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-zinc-400 text-xs font-semibold tracking-wider uppercase rounded-sm hover:border-red-700 hover:text-red-400 transition-colors duration-200 cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-950/30 border border-red-800/50 rounded-sm mb-8">
                        <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                        <p className="text-red-400 text-sm">{error}</p>
                    </div>
                )}

                {/* Loading */}
                {loading && (
                    <div className="flex items-center gap-3 text-zinc-500 py-12">
                        <div className="w-4 h-4 border border-zinc-600 border-t-emerald-400 rounded-full animate-spin" />
                        <span className="text-sm tracking-wide">Loading projects...</span>
                    </div>
                )}

                {/* Empty State */}
                {!loading && projects.length === 0 && (
                    <div className="py-24 text-center border border-dashed border-zinc-800 rounded-sm">
                        <p className="text-zinc-600 text-sm mb-4">No projects yet.</p>
                        <button
                            onClick={() => navigate('/admin/add')}
                            className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors duration-200"
                        >
                            Add your first project
                        </button>
                    </div>
                )}

                {/* Project Table */}
                {!loading && projects.length > 0 && (
                    <div className="border border-zinc-800 rounded-sm overflow-hidden">

                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-5 py-3 bg-zinc-900 border-b border-zinc-800">
                            <span className="col-span-1 text-xs tracking-widest uppercase text-zinc-600">Thumb</span>
                            <span className="col-span-4 text-xs tracking-widest uppercase text-zinc-600">Project</span>
                            <span className="col-span-2 text-xs tracking-widest uppercase text-zinc-600">Status</span>
                            <span className="col-span-5 text-xs tracking-widest uppercase text-zinc-600 text-right">Actions</span>
                        </div>

                        {/* Rows */}
                        {projects.map((project) => (
                            <div
                                key={project._id}
                                className="grid grid-cols-12 gap-4 items-center px-5 py-4 border-b border-zinc-800/60 last:border-b-0 hover:bg-zinc-900/40 transition-colors duration-150"
                            >
                                {/* Thumbnail */}
                                <div className="col-span-1">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-10 h-10 object-cover rounded-sm border border-zinc-800"
                                    />
                                </div>

                                {/* Title + Description */}
                                <div className="col-span-4 min-w-0">
                                    <p className="text-white text-sm font-medium truncate">{project.title}</p>
                                    <p className="text-zinc-500 text-xs mt-0.5 truncate">{project.description}</p>
                                </div>

                                {/* Status */}
                                <div className="col-span-2">
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-medium ${project.isPublished
                                                ? 'bg-emerald-950/50 border border-emerald-800/50 text-emerald-400'
                                                : 'bg-zinc-900 border border-zinc-700 text-zinc-500'
                                            }`}
                                    >
                                        <span
                                            className={`w-1 h-1 rounded-full ${project.isPublished ? 'bg-emerald-400' : 'bg-zinc-600'
                                                }`}
                                        />
                                        {project.isPublished ? 'Published' : 'Draft'}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="col-span-5 flex items-center justify-end gap-2">
                                    <button
                                        onClick={() => navigate(`/admin/edit/${project._id}`)}
                                        className="px-3 py-1.5 border border-zinc-700 text-zinc-400 text-xs font-medium rounded-sm hover:border-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleToggle(project._id)}
                                        disabled={togglingId === project._id}
                                        className="px-3 py-1.5 border border-zinc-700 text-zinc-400 text-xs font-medium rounded-sm hover:border-emerald-700 hover:text-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
                                    >
                                        {togglingId === project._id
                                            ? '...'
                                            : project.isPublished
                                                ? 'Unpublish'
                                                : 'Publish'}
                                    </button>

                                    <button
                                        onClick={() => handleDelete(project._id)}
                                        disabled={deletingId === project._id}
                                        className="px-3 py-1.5 border border-zinc-700 text-zinc-400 text-xs font-medium rounded-sm hover:border-red-800 hover:text-red-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
                                    >
                                        {deletingId === project._id ? '...' : 'Delete'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer count */}
                {!loading && projects.length > 0 && (
                    <p className="text-zinc-700 text-xs mt-4 text-right">
                        {projects.length} project{projects.length !== 1 ? 's' : ''} total
                    </p>
                )}
            </div>
        </div>
    )
}

export default Dashboard