import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { isDark, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/admin/login')
    }

    const navLinkClass = ({ isActive }) =>
        `relative text-sm tracking-widest uppercase font-medium transition-colors duration-200
         after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-emerald-400
         after:transition-all after:duration-300 ${isActive
            ? 'text-emerald-400 after:w-full'
            : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white after:w-0 hover:after:w-full'
        }`

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/60'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <NavLink
                    to="/"
                    className="font-semibold text-zinc-900 dark:text-white text-lg tracking-tight hover:text-emerald-400 transition-colors duration-200"
                >
                    MB<span className="text-emerald-400">.</span>
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
                    <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

                    {token && (
                        <>
                            <NavLink to="/admin/dashboard" className={navLinkClass}>Dashboard</NavLink>
                            <button
                                onClick={handleLogout}
                                className="text-sm tracking-widest uppercase font-medium text-zinc-400 hover:text-red-400 transition-colors duration-200"
                            >
                                Logout
                            </button>
                        </>
                    )}

                    <button
                        onClick={toggleTheme}
                        className="w-8 h-8 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-1"
                    aria-label="Toggle menu"
                >
                    <span className={`block h-px w-6 bg-zinc-900 dark:bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-px w-6 bg-zinc-900 dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                    <span className={`block h-px w-6 bg-zinc-900 dark:bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 py-6' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col gap-5 px-6">
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/projects', label: 'Projects' },
                        { to: '/about', label: 'About' },
                        { to: '/contact', label: 'Contact' },
                    ].map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                `text-sm tracking-widest uppercase font-medium transition-colors duration-200 ${isActive ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                    {token && (
                        <button
                            onClick={handleLogout}
                            className="text-left text-sm tracking-widest uppercase font-medium text-zinc-500 hover:text-red-400 transition-colors duration-200"
                        >
                            Logout
                        </button>
                    )}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 text-sm tracking-widest uppercase font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                    >
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar