'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'exists'>('idle');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSubscribeStatus('error');
            setMessage('Please enter a valid email address');
            setTimeout(() => setSubscribeStatus('idle'), 3000);
            return;
        }

        setSubscribeStatus('loading');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubscribeStatus('success');
                setMessage(data.message || 'Thank you for subscribing!');
                setEmail('');
                setTimeout(() => setSubscribeStatus('idle'), 5000);
            } else if (response.status === 409) {
                setSubscribeStatus('exists');
                setMessage('This email is already subscribed!');
                setTimeout(() => setSubscribeStatus('idle'), 3000);
            } else {
                setSubscribeStatus('error');
                setMessage(data.error || 'Failed to subscribe');
                setTimeout(() => setSubscribeStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Subscription error:', error);
            setSubscribeStatus('error');
            setMessage('Network error. Please try again.');
            setTimeout(() => setSubscribeStatus('idle'), 3000);
        }
    };

    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
                    {/* Brand Section - Larger */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/images/linker-logo.png"
                                    alt="Linker Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold gradient-text">
                                LINKER
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">
                            Intelligent Import Management for Multi-Language Projects. Never break imports again.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center space-x-3 sm:space-x-4 pt-3 sm:pt-4">
                            <a
                                href="https://www.linkedin.com/in/soumen-das-76b867218/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/Soumen0818"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-black transition-colors duration-200"
                                aria-label="X (Twitter)"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:importlinker@gmail.com"
                                className="text-gray-400 hover:text-[#EA4335] transition-colors duration-200"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-white text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/documentation"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-2">
                        <h3 className="font-bold text-white text-lg mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/documentation#installation"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Installation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/documentation#getting-started"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Getting Started
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://marketplace.visualstudio.com/items?itemName=linkerdev.import-linker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    VS Code Marketplace
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-4">
                        <h3 className="font-bold text-white text-lg mb-4">Stay Updated</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Subscribe to get updates on new features and releases
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            />
                            <button
                                type="submit"
                                disabled={subscribeStatus === 'loading'}
                                className="btn-primary w-full py-2.5 sm:py-3 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                            </button>
                            {subscribeStatus === 'success' && (
                                <p className="text-green-400 text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {message}
                                </p>
                            )}
                            {subscribeStatus === 'exists' && (
                                <p className="text-yellow-400 text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    {message}
                                </p>
                            )}
                            {subscribeStatus === 'error' && (
                                <p className="text-red-400 text-sm flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    {message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="text-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Linker. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
