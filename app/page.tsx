'use client';

import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <div className="relative bg-black">
      <section className="relative min-h-screen flex items-center justify-center wave-background">
        <div className="wave-lines">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
            <path d="M 0 400 Q 200 300 400 400 T 800 400" stroke="rgba(255, 140, 0, 0.3)" strokeWidth="2" fill="none" />
            <path d="M 0 420 Q 200 320 400 420 T 800 420" stroke="rgba(255, 140, 0, 0.25)" strokeWidth="2" fill="none" />
            <path d="M 0 440 Q 200 340 400 440 T 800 440" stroke="rgba(255, 140, 0, 0.2)" strokeWidth="2" fill="none" />
            <path d="M 0 460 Q 200 360 400 460 T 800 460" stroke="rgba(255, 140, 0, 0.15)" strokeWidth="2" fill="none" />
            <path d="M 0 480 Q 200 380 400 480 T 800 480" stroke="rgba(255, 140, 0, 0.1)" strokeWidth="2" fill="none" />
            <path d="M 1920 400 Q 1720 300 1520 400 T 1120 400" stroke="rgba(255, 0, 100, 0.3)" strokeWidth="2" fill="none" />
            <path d="M 1920 420 Q 1720 320 1520 420 T 1120 420" stroke="rgba(255, 0, 100, 0.25)" strokeWidth="2" fill="none" />
            <path d="M 1920 440 Q 1720 340 1520 440 T 1120 440" stroke="rgba(255, 0, 100, 0.2)" strokeWidth="2" fill="none" />
            <path d="M 1920 460 Q 1720 360 1520 460 T 1120 460" stroke="rgba(255, 0, 100, 0.15)" strokeWidth="2" fill="none" />
            <path d="M 1920 480 Q 1720 380 1520 480 T 1120 480" stroke="rgba(255, 0, 100, 0.1)" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-wider hero-title">
              <span className="text-white">
                {'WELCOME'.split('').map((letter, index) => (
                  <span key={index} className="letter-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                    {letter}
                  </span>
                ))}
              </span>{' '}
              <span className="linker-text-wrapper">
                {'LINKER'.split('').map((letter, index) => (
                  <span key={index} className="letter-animate linker-gradient" style={{ animationDelay: `${(index + 7) * 0.1}s` }}>
                    {letter}
                  </span>
                ))}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '1.4s' }}>
              Automatically updates import statements when you rename or move files and folders. Supports JavaScript, TypeScript, React, Python, Java, Go, and CSS with enhanced diff preview and undo/redo.
            </p>
            <div className="pt-8 fade-in-up" style={{ animationDelay: '1.7s' }}>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=linkerdev.import-linker"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-3 pulse-glow"
              >
                INSTALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">
                Why Choose <span className="gradient-text">Linker</span>?
              </h2>
              <p className="text-xl text-gray-400">
                Built for developers who value their time
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Lightning Fast", description: "Updates all imports instantly across your entire codebase" },
                { icon: "👁️", title: "Visual Preview", description: "See all changes before applying with side-by-side diff view" },
                { icon: "↩️", title: "Undo/Redo", description: "Full history tracking with easy reversion of changes" },
                { icon: "🌐", title: "Multi-Language", description: "Supports JavaScript, TypeScript, Python, Java, Go, and CSS" },
                { icon: "🎨", title: "Format Preserving", description: "Maintains your code style, quotes, and semicolons" },
                { icon: "🔒", title: "Git Integration", description: "Seamless integration with Git workflows and auto-staging" }
              ].map((feature, index) => (
                <div key={index} className="feature-card group scroll-fade-in">
                  <div className="text-4xl mb-4 icon-bounce">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 gradient-text-hover">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <div className="card-shine"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">
                See <span className="gradient-text">Linker</span> in Action
              </h2>
              <p className="text-xl text-gray-400">
                Watch how Linker automatically updates your imports
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800 card-glow scroll-scale">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 pulse-animation">▶️</div>
                  <p className="text-gray-400">Demo video coming soon</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { number: "5+", label: "Languages Supported" },
                { number: "1000+", label: "Files Handled" },
                { number: "100%", label: "Automatic Updates" }
              ].map((stat, index) => (
                <div key={index} className="stat-card scroll-fade-in">
                  <div className="text-5xl font-bold gradient-text mb-2 number-animation">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black border-t border-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto scroll-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 whitespace-nowrap">
              Install Linker from VS Code Marketplace and never worry about broken imports again
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/user-guide#installation">
                <button className="btn-primary text-lg px-8 py-3">
                  Get Installation Guide
                </button>
              </Link>
              <Link href="/user-guide">
                <button className="px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
