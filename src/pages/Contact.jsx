import axios from 'axios'
import React, { useState } from 'react'

const EMPTY_FORM = { name: '', email: '', message: '' }

const Contact = () => {
    const [formData, setFormData] = useState(EMPTY_FORM)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleChange = (field) => (e) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }

    const handleSubmit = async () => {
        setError('')
        setSuccess(false)
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setError('Please fill in all fields.')
            return
        }
        setLoading(true)
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/messages`, formData)
            setSuccess(true)
            setFormData(EMPTY_FORM)
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to send message. Try again.')
        } finally {
            setLoading(false)
        }
    }

    const inputClass =
        'w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm px-4 py-3 rounded-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 dark:focus:border-emerald-400/60 transition-colors duration-200'

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white pt-24">
            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* Page Header */}
                <div className="mb-16">
                    <span className="text-emerald-500 dark:text-emerald-400 text-xs tracking-[0.3em] uppercase font-medium">
                        Reach Out
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mt-4">
                        Contact Me
                    </h2>
                    <div className="h-px w-16 bg-emerald-500 dark:bg-emerald-400 mt-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: Info */}
                    <div className="space-y-10">
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
                            Have a project in mind or just want to talk? Send a message and I'll
                            get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a
                                    href="mailto:muqtasidinfinite@gmail.com"
                                    className="text-zinc-600 dark:text-zinc-300 text-sm hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
                                >
                                    muqtasidinfinite@gmail.com

                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm flex items-center justify-center shrink-0">
                                    <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                </div>
                                <a
                                    href="https://github.com/MuqtasidBhatti"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-zinc-600 dark:text-zinc-300 text-sm hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
                                >
                                    github.com/MuqtasidBhatti
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="space-y-5">

                        {/* Error */}
                        {error && (
                            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-sm">
                                <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                </svg>
                                <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Success */}
                        {success && (
                            <div className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-sm">
                                <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="text-emerald-600 dark:text-emerald-400 text-sm">Message sent successfully. I'll get back to you soon.</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-xs tracking-widest uppercase font-medium text-zinc-500 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange('name')}
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="block text-xs tracking-widest uppercase font-medium text-zinc-500 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange('email')}
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label className="block text-xs tracking-widest uppercase font-medium text-zinc-500 mb-2">
                                Message
                            </label>
                            <textarea
                                placeholder="Describe your project or question."
                                value={formData.message}
                                onChange={handleChange('message')}
                                rows={6}
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full py-3.5 bg-emerald-400 text-zinc-950 text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {loading ? (
                                <>
                                    <div className="w-3.5 h-3.5 border border-zinc-950/40 border-t-zinc-950 rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact