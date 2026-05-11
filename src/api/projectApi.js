import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/api' })

// attach token to every request automatically
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token')
    if (token) req.headers.Authorization = `Bearer ${token}`
    return req
})

export const getProjects = () => API.get('/projects')
export const getProjectById = (id) => API.get(`/projects/${id}`)
export const createProject = (data) => API.post('/projects', data)
export const updateProject = (id, data) => API.put(`/projects/${id}`, data)
export const deleteProject = (id) => API.delete(`/projects/${id}`)
export const togglePublish = (id) => API.patch(`/projects/${id}/toggle`)