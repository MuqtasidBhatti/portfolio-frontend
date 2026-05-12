import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const inputClass =
  "w-full bg-[#111111] border border-[#2a2a2a] text-white placeholder-gray-500 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[#00d68f] transition-colors"

const labelClass = "block text-xs uppercase tracking-widest text-gray-400 mb-1.5"

const EditProject = () => {
  const { id } = useParams()
  const [projects, setProjects] = useState({
    title: '',
    description: '',
    techStack: [],
    thumbnail: '',
    liveUrl: '',
    githubUrl: '',
    tags: [],
    isPublished: false,
  })
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [error, setError] = useState('')

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setProjects(data)
      } catch {
        setError('Failed to load project.')
      } finally {
        setFetching(false)
      }
    }
    fetchProject()
  }, [id])

  const handleEdit = async () => {
    setError('')
    setLoading(true)
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, projects, {
        headers: { Authorization: `Bearer ${token}` },
      })
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update project. Try again.')
    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading project...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <p className="text-[#00d68f] text-xs uppercase tracking-widest mb-2">Admin Panel</p>
        <h2 className="text-white text-4xl font-bold mb-1">Edit Project</h2>
        <div className="w-10 h-0.5 bg-[#00d68f] mb-10" />

        {/* Error */}
        {error && (
          <div className="mb-6 px-4 py-3 bg-red-900/30 border border-red-700 text-red-400 rounded text-sm">
            {error}
          </div>
        )}

        {/* Form Card */}
        <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg p-8 space-y-5">

          <div>
            <label className={labelClass}>Title</label>
            <input
              type="text"
              placeholder="My Awesome Project"
              value={projects.title}
              onChange={(e) => setProjects({ ...projects, title: e.target.value })}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <input
              type="text"
              placeholder="A short description of what this project does"
              value={projects.description}
              onChange={(e) => setProjects({ ...projects, description: e.target.value })}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Tech Stack</label>
            <input
              type="text"
              placeholder="React, Node.js, MongoDB"
              value={projects.techStack.join(', ')}
              onChange={(e) =>
                setProjects({ ...projects, techStack: e.target.value.split(',').map((s) => s.trim()) })
              }
              className={inputClass}
            />
            <p className="text-gray-600 text-xs mt-1">Comma separated</p>
          </div>

          <div>
            <label className={labelClass}>Thumbnail URL</label>
            <input
              type="text"
              placeholder="https://..."
              value={projects.thumbnail}
              onChange={(e) => setProjects({ ...projects, thumbnail: e.target.value })}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Live URL</label>
              <input
                type="text"
                placeholder="https://myproject.com"
                value={projects.liveUrl}
                onChange={(e) => setProjects({ ...projects, liveUrl: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>GitHub URL</label>
              <input
                type="text"
                placeholder="https://github.com/..."
                value={projects.githubUrl}
                onChange={(e) => setProjects({ ...projects, githubUrl: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Tags</label>
            <input
              type="text"
              placeholder="fullstack, mern, open-source"
              value={projects.tags.join(', ')}
              onChange={(e) =>
                setProjects({ ...projects, tags: e.target.value.split(',').map((s) => s.trim()) })
              }
              className={inputClass}
            />
            <p className="text-gray-600 text-xs mt-1">Comma separated</p>
          </div>

          {/* Publish toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={projects.isPublished}
                onChange={(e) => setProjects({ ...projects, isPublished: e.target.checked })}
                className="sr-only"
              />
              <div
                className={`w-10 h-5 rounded-full transition-colors ${
                  projects.isPublished ? 'bg-[#00d68f]' : 'bg-[#2a2a2a]'
                }`}
              />
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                  projects.isPublished ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </div>
            <span className="text-gray-400 text-sm">Published</span>
          </label>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleEdit}
            disabled={loading}
            className="flex-1 bg-[#00d68f] text-black font-semibold py-3 rounded hover:bg-[#00bf7d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-widest cursor-pointer"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="px-6 py-3 border border-[#2a2a2a] text-gray-400 hover:text-white hover:border-white rounded transition-colors text-sm cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditProject