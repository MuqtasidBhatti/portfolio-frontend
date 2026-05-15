import React from 'react'

const frontendSkills = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind']
const backendSkills = ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT']

const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white pt-24">
            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* Page Header */}
                <div className="mb-20">
                    <span className="text-emerald-500 dark:text-emerald-400 text-xs tracking-[0.3em] uppercase font-medium">
                        Who I am
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mt-4">
                        About Me
                    </h2>
                    <div className="h-px w-16 bg-emerald-500 dark:bg-emerald-400 mt-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Column: Bio + Resume + Socials */}
                    <div className="space-y-14">

                        {/* Bio */}
                        <section>
                            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
                                I'm a Full-Stack Developer specializing in the MERN stack. I build
                                complete web applications from database to UI, focusing on clean
                                code and real functionality.
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed mt-4">
                                In the last year, I built and deployed 3 full-stack apps: a Todo
                                app with JWT authentication, a Blog platform, and a full E-Commerce
                                store with an admin panel. All built with MongoDB, Express, React,
                                and Node.js.
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed mt-4">
                                Open to full-stack and frontend roles. I respond within 24 hours.
                            </p>
                        </section>

                        {/* Resume */}
                        <section>
                            <h3 className="text-xs tracking-[0.3em] uppercase font-medium text-zinc-500 mb-5">
                                Resume
                            </h3>
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-sm font-medium tracking-wide rounded-sm hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200 group"
                            >
                                <svg
                                    className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16v-8m0 8l-3-3m3 3l3-3M4 20h16"
                                    />
                                </svg>
                                Download Resume
                            </a>
                        </section>

                        {/* Social Links */}
                        <section>
                            <h3 className="text-xs tracking-[0.3em] uppercase font-medium text-zinc-500 mb-5">
                                Find Me
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/MuqtasidBhatti"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-sm rounded-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/muqtasid-bhatti-230525384/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-sm rounded-sm hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Skills */}
                    <div className="space-y-10">
                        <h3 className="text-xs tracking-[0.3em] uppercase font-medium text-zinc-500">
                            Technical Skills
                        </h3>

                        {/* Frontend */}
                        <div className="p-8 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm">
                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white tracking-wide mb-5 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                Frontend
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-mono rounded-sm hover:border-emerald-400/40 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="p-8 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm">
                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white tracking-wide mb-5 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                                Backend
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-mono rounded-sm hover:border-emerald-400/40 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About