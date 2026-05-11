import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleChange = (field) => (e) => {
        setUser((prev) => ({ ...prev, [field]: e.target.value }))
    }

    const handleLogin = async () => {
        if (!user.email || !user.password) {
            setError('Please fill in all fields.')
            return
        }
        setError('')
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', user)
            localStorage.setItem('token', res.data.token)
            navigate('/admin/dashboard')
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Login failed.')
        } finally {
            setLoading(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleLogin()
    }

    const inputClass =
        'w-full bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-3 rounded-sm placeholder-zinc-600 focus:outline-none focus:border-emerald-400/60 transition-colors duration-200'

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">

            {/* Subtle background grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative w-full max-w-sm">

                {/* Logo */}
                <div className="text-center mb-10">
                    <p className="text-white font-semibold text-2xl tracking-tight">
                        MB<span className="text-emerald-400">.</span>
                    </p>
                    <p className="text-zinc-500 text-xs tracking-[0.25em] uppercase mt-2">
                        Admin Access
                    </p>
                </div>

                {/* Card */}
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-sm p-8 backdrop-blur-sm">
                    <h2 className="text-xl font-semibold tracking-tight mb-1">Sign in</h2>
                    <p className="text-zinc-500 text-sm mb-8">Enter your credentials to continue.</p>

                    {/* Error */}
                    {error && (
                        <div className="flex items-start gap-3 p-4 bg-red-950/30 border border-red-800/50 rounded-sm mb-6">
                            <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                            </svg>
                            <p className="text-red-400 text-sm">{error}</p>
                        </div>
                    )}

                    <div className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-xs tracking-widest uppercase font-medium text-zinc-500 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="admin@example.com"
                                value={user.email}
                                onChange={handleChange('email')}
                                onKeyDown={handleKeyDown}
                                className={inputClass}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs tracking-widest uppercase font-medium text-zinc-500 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={user.password}
                                    onChange={handleChange('password')}
                                    onKeyDown={handleKeyDown}
                                    className={`${inputClass} pr-11`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors duration-200 cursor-pointer"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            className="w-full py-3.5 bg-emerald-400 text-zinc-950 text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                        >
                            {loading ? (
                                <>
                                    <div className="w-3.5 h-3.5 border border-zinc-800 border-t-transparent rounded-full animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </div>
                </div>

                {/* Back link */}
                <div className="text-center mt-6">
                    <button
                        onClick={() => navigate('/')}
                        className="text-zinc-600 text-xs hover:text-zinc-400 transition-colors duration-200 cursor-pointer"
                    >
                        Back to site
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login