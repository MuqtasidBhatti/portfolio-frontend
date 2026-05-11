import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/admin/Dashboard'
import Login from './pages/admin/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import AddProject from './pages/admin/AddProject'
import EditProject from './pages/admin/EditProject'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (

    <ThemeProvider>

      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects/:id' element={<ProjectDetail />} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

          <Route path="/admin/add" element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>
          } />

          <Route path="/admin/edit/:id" element={
            <ProtectedRoute>
              <EditProject />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
