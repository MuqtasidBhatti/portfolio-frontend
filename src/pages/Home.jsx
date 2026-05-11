import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profileImg from '../assets/profile.png'

const skills = ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Tailwind CSS']

const Home = () => {
    const navigate = useNavigate()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 50)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">

            {/* Hero Section */}
            <section className="min-h-screen max-w-6xl mx-auto px-6 flex items-center">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16 pt-16">

                    {/* Text Content */}
                    <div
                        className={`flex-1 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                    >
                        <span className="inline-block text-emerald-500 dark:text-emerald-400 text-xs tracking-[0.3em] uppercase font-medium mb-6">
                            Available for work
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
                            Hi, I'm{' '}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-600">
                                Muqtasid
                            </span>
                            <br />
                            Bhatti
                        </h1>

                        <div className="flex items-center gap-3 mb-6 mt-5">
                            <div className="h-px w-8 bg-emerald-500 dark:bg-emerald-400" />
                            <h2 className="text-zinc-500 dark:text-zinc-400 text-base tracking-widest uppercase font-medium">
                                Full Stack Developer
                            </h2>
                        </div>

                        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-md mb-10">
                            I build web applications using React, Node.js, and MongoDB. Clean code,
                            real products.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => navigate('/projects')}
                                className="px-7 py-3 bg-emerald-500 dark:bg-emerald-400 text-white dark:text-zinc-950 text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-emerald-400 dark:hover:bg-emerald-300 transition-colors duration-200 cursor-pointer"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-7 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-sm font-semibold tracking-wider uppercase rounded-sm hover:border-zinc-500 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                Get In Touch
                            </button>
                        </div>

                        <p className="text-zinc-400 dark:text-zinc-600 text-sm mt-6 font-mono">
                            Currently building:{' '}
                            <span className="text-emerald-500 dark:text-emerald-400">Portfolio CMS with admin dashboard</span>
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div
                        className={`relative shrink-0 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                    >
                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-full border border-emerald-400/20 scale-110" />
                        <div className="absolute inset-0 rounded-full border border-zinc-300/40 dark:border-zinc-700/40 scale-125" />

                        {/* Accent dot */}
                        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-emerald-400 z-10 shadow-lg shadow-emerald-400/50" />

                        <img
                            src={profileImg}
                            alt="Muqtasid Bhatti"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-top border border-zinc-200 dark:border-zinc-800 relative z-0"
                        />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="border-t border-zinc-200 dark:border-zinc-800/60">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <p className="text-zinc-400 dark:text-zinc-600 text-xs tracking-[0.3em] uppercase font-medium mb-8">
                        Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-mono rounded-sm hover:border-emerald-400/40 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-t border-zinc-200 dark:border-zinc-800/60">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800/60">
                        <div className="bg-white dark:bg-zinc-950 p-10">
                            <span className="text-4xl font-bold text-zinc-900 dark:text-white">3</span>
                            <p className="text-zinc-500 text-sm mt-2">Projects shipped</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-950 p-10">
                            <span className="text-4xl font-bold text-zinc-900 dark:text-white">MERN</span>
                            <p className="text-zinc-500 text-sm mt-2">Full stack specialization</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-950 p-10">
                            <span className="text-4xl font-bold text-emerald-500 dark:text-emerald-400">Open</span>
                            <p className="text-zinc-500 text-sm mt-2">To full-stack & frontend roles</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home