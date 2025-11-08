'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-800/50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-orange-500">
                            <Image
                                src="/images/linker-logo.png"
                                alt="Linker Logo"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span className="text-2xl font-bold gradient-text tracking-wide" style={{ fontFamily: 'Arial, sans-serif' }}>
                            LINKER
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/"
                            className="px-6 py-2 bg-gray-900 hover:bg-gray-800 gradient-text font-semibold rounded-full transition-all duration-300 border border-gray-700 hover:border-orange-500"
                            style={{ fontFamily: 'Arial, sans-serif' }}
                        >
                            HOME
                        </Link>
                        <Link
                            href="/about"
                            className="px-6 py-2 bg-gray-900 hover:bg-gray-800 gradient-text font-semibold rounded-full transition-all duration-300 border border-gray-700 hover:border-orange-500"
                            style={{ fontFamily: 'Arial, sans-serif' }}
                        >
                            ABOUT US
                        </Link>
                        <Link
                            href="/user-guide"
                            className="px-6 py-2 bg-gray-900 hover:bg-gray-800 gradient-text font-semibold rounded-full transition-all duration-300 border border-gray-700 hover:border-orange-500"
                            style={{ fontFamily: 'Arial, sans-serif' }}
                        >
                            DOCUMENTATION
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-3">
                            <Link
                                href="/"
                                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 gradient-text font-semibold rounded-full transition-all duration-300 border border-gray-700 hover:border-orange-500 text-center"
                                style={{ fontFamily: 'Arial, sans-serif' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                HOME
                            </Link>
                            <Link
                                href="/about"
                                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 gradient-text font-semibold rounded-full transition-all duration-300 border border-gray-700 hover:border-orange-500 text-center"
                                style={{ fontFamily: 'Arial, sans-serif' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                ABOUT US
                            </Link>
                            <Link
                                href="/user-guide"
                                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 gradient-text font-semibold rounded-full transition-all duration-300 border border-gray-700 hover:border-orange-500 text-center"
                                style={{ fontFamily: 'Arial, sans-serif' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                DOCUMENTATION
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
