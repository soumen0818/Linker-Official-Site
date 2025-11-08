'use client';

import { useState } from 'react';

export default function UserGuide() {
    const [activeSection, setActiveSection] = useState('introduction');

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const sections = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'installation', label: 'Installation' },
        { id: 'getting-started', label: 'Getting Started' },
        { id: 'supported-languages', label: 'Supported Languages' },
        { id: 'features', label: 'Features' },
        { id: 'configuration', label: 'Configuration' },
        { id: 'examples', label: 'Examples' },
        { id: 'keyboard-shortcuts', label: 'Keyboard Shortcuts' },
        { id: 'troubleshooting', label: 'Troubleshooting' },
        { id: 'best-practices', label: 'Best Practices' },
        { id: 'faq', label: 'FAQ' }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Header */}
            <section className="py-20 wave-background border-b border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            <span className="gradient-text">Linker</span> Documentation
                        </h1>
                        <p className="text-xl text-gray-300">
                            Complete guide for intelligent import management
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="lg:sticky lg:top-24 bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contents</h3>
                            <nav className="space-y-1">
                                {sections.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${activeSection === item.id
                                            ? 'bg-gray-800 text-white font-medium'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Documentation Content */}
                    <main className="flex-1 max-w-4xl">
                        {/* Introduction */}
                        <section id="introduction" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Introduction</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">What is Linker?</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Linker is an intelligent VS Code extension that automatically updates import statements across your entire codebase when you rename or move files and folders. It supports multiple programming languages and provides a visual preview of all changes before applying them.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Why Use Linker?</h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Save Time:</strong> No more manually finding and updating imports</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Prevent Errors:</strong> Avoid broken imports during refactoring</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Multi-Language:</strong> Works with JavaScript, TypeScript, Python, Java, Go, and CSS</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Visual Preview:</strong> See all changes before applying them</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Undo/Redo:</strong> Full history tracking with easy reversion</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li><strong className="text-white">Zero Configuration</strong> — Works out-of-the-box with smart defaults</li>
                                        <li><strong className="text-white">Visual Feedback</strong> — See exactly what will change before applying</li>
                                        <li><strong className="text-white">Format Preservation</strong> — Maintains your code style (quotes, semicolons, indentation)</li>
                                        <li><strong className="text-white">Performance Optimized</strong> — Handles large codebases (1000+ files) efficiently</li>
                                        <li><strong className="text-white">Production Ready</strong> — Battle-tested with robust error handling</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Installation */}
                        <section id="installation" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Installation</h2>

                            <div className="space-y-6">
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Method 1: VS Code Marketplace (Recommended)</h3>
                                    <ol className="space-y-3 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">1.</span>
                                            <span>Open Visual Studio Code</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">2.</span>
                                            <span>Click the Extensions icon in the sidebar or press <code className="bg-gray-800 px-2 py-1 rounded text-orange-400">Ctrl+Shift+X</code></span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">3.</span>
                                            <span>Search for "Linker" or "Import Linker"</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">4.</span>
                                            <span>Click Install</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">5.</span>
                                            <span>Reload VS Code if prompted</span>
                                        </li>
                                    </ol>
                                </div>

                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Method 2: Command Line</h3>
                                    <p className="text-gray-300 mb-3">Open your terminal and run:</p>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <code className="text-orange-400">code --install-extension linkerdev.import-linker</code>
                                    </div>
                                </div>

                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Method 3: Manual Installation</h3>
                                    <ol className="space-y-3 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">1.</span>
                                            <span>Download the .vsix file from GitHub Releases</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">2.</span>
                                            <span>In VS Code, go to Extensions (<code className="bg-gray-800 px-2 py-1 rounded text-orange-400">Ctrl+Shift+X</code>)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">3.</span>
                                            <span>Click the menu at the top</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">4.</span>
                                            <span>Select "Install from VSIX..."</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">5.</span>
                                            <span>Choose the downloaded file</span>
                                        </li>
                                    </ol>
                                </div>

                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Verify Installation</h3>
                                    <p className="text-gray-300 mb-3">After installation:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Check that Linker appears in your Extensions list</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Open the Command Palette (<code className="bg-gray-800 px-2 py-1 rounded text-orange-400">Ctrl+Shift+P</code>)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Type "Linker" and you should see Linker commands</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Getting Started */}
                        <section id="getting-started" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Getting Started</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Quick Start (3 Steps)</h3>

                                    <div className="space-y-6">
                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold gradient-text mb-3">Step 1: Rename a File</h4>
                                            <ol className="space-y-2 text-gray-300">
                                                <li>Open your project in VS Code</li>
                                                <li>In the Explorer, right-click on any file</li>
                                                <li>Select Rename or press F2</li>
                                                <li>Type the new name and press Enter</li>
                                            </ol>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold gradient-text mb-3">Step 2: Review the Preview</h4>
                                            <p className="text-gray-300 mb-3">Linker will show a preview window with:</p>
                                            <ul className="space-y-2 text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="text-orange-500 mr-3 mt-1">•</span>
                                                    <span>List of files that will be modified</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-orange-500 mr-3 mt-1">•</span>
                                                    <span>Before and after comparison of each import</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-orange-500 mr-3 mt-1">•</span>
                                                    <span>Total number of imports to update</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold gradient-text mb-3">Step 3: Apply or Cancel</h4>
                                            <ul className="space-y-2 text-gray-300">
                                                <li className="flex items-start">
                                                    <span className="text-orange-500 mr-3 mt-1">•</span>
                                                    <span>Click Apply to update all imports</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-orange-500 mr-3 mt-1">•</span>
                                                    <span>Click Cancel to abort the operation</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-orange-500 mr-3 mt-1">•</span>
                                                    <span>All changes happen instantly</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Your First Example</h3>
                                    <p className="text-gray-300 mb-4">Create two files and try renaming one:</p>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">utils.ts</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>export const greet = (name: string) =&gt; &#123;{'\n'}  return `Hello, $&#123;name&#125;!`;{'\n'}&#125;;</code></pre>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">app.ts</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>import &#123; greet &#125; from './utils';{'\n\n'}console.log(greet('World'));</code></pre>
                                            </div>
                                        </div>

                                        <div className="border-l-4 border-orange-500 pl-4">
                                            <p className="text-gray-300 mb-2">Try renaming utils.ts to helpers.ts</p>
                                            <p className="text-sm text-gray-400">Linker will automatically update the import in app.ts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Supported Languages */}
                        <section id="supported-languages" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Supported Languages</h2>

                            <div className="space-y-8">
                                {/* JavaScript/TypeScript */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">JavaScript / TypeScript</h3>

                                    <h4 className="text-lg font-semibold text-white mb-3">Supported Import Patterns:</h4>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`// ES6 Imports
import Component from './Component';
import { named } from './utils';
import * as utils from './utils';

// CommonJS
const utils = require('./utils');
const { helper } = require('../helpers');

// Dynamic Imports
const module = await import('./dynamic');

// Re-exports
export { something } from './other';
export * from './all';

// Type Imports (TypeScript)
import type { User } from './types';`}</code></pre>
                                    </div>

                                    <p className="text-gray-300">
                                        <strong className="text-white">File Extensions:</strong> .js, .ts, .jsx, .tsx, .mjs, .cjs
                                    </p>
                                </div>

                                {/* Python */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Python</h3>

                                    <h4 className="text-lg font-semibold text-white mb-3">Supported Import Patterns:</h4>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`# Absolute imports
import utils
import utils.helpers
from utils import helper
from utils.helpers import format_date, format_time

# Relative imports
from . import helpers
from .helpers import format_date
from .. import utils
from ..utils.helpers import format_date

# Import with alias
import utils as u
from utils import helper as h`}</code></pre>
                                    </div>

                                    <div className="space-y-2 text-gray-300">
                                        <p><strong className="text-white">File Extensions:</strong> .py</p>
                                        <p><strong className="text-white">Note:</strong> Linker preserves relative vs absolute import style and automatically converts dot notation</p>
                                    </div>
                                </div>

                                {/* Java */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Java</h3>

                                    <h4 className="text-lg font-semibold text-white mb-3">Supported Import Patterns:</h4>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`// Package imports
import com.example.utils.Helper;
import com.example.utils.*;

// Static imports
import static com.example.utils.Helper.doSomething;
import static com.example.utils.Constants.*;`}</code></pre>
                                    </div>

                                    <div className="space-y-2 text-gray-300">
                                        <p><strong className="text-white">File Extensions:</strong> .java</p>
                                        <p><strong className="text-white">Note:</strong> Updates both regular and static imports. Package notation is preserved</p>
                                    </div>
                                </div>

                                {/* Go */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Go</h3>

                                    <h4 className="text-lg font-semibold text-white mb-3">Supported Import Patterns:</h4>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`// Single imports
import "fmt"
import "project/utils"

// Block imports
import (
    "fmt"
    "log"
    "project/utils"
    "project/helpers"
)

// Import with alias
import (
    u "project/utils"
    h "project/helpers"
)`}</code></pre>
                                    </div>

                                    <div className="space-y-2 text-gray-300">
                                        <p><strong className="text-white">File Extensions:</strong> .go</p>
                                        <p><strong className="text-white">Note:</strong> Go imports reference packages (folders), not individual files. Renaming a folder updates all imports of that package</p>
                                    </div>
                                </div>

                                {/* CSS */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">CSS / SCSS / LESS</h3>

                                    <h4 className="text-lg font-semibold text-white mb-3">Supported Import Patterns:</h4>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`/* CSS @import */
@import "styles/variables.css";
@import url("styles/mixins.css");
@import url('styles/reset.css');

/* SCSS/LESS @import */
@import 'base/variables';
@import 'components/buttons';
@import '../shared/mixins';`}</code></pre>
                                    </div>

                                    <div className="space-y-2 text-gray-300">
                                        <p><strong className="text-white">File Extensions:</strong> .css, .scss, .less</p>
                                        <p><strong className="text-white">Note:</strong> Supports both @import and @import url() syntax. File extensions can be included or omitted</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Features */}
                        <section id="features" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Features</h2>

                            <div className="space-y-8">
                                {/* Visual Diff Preview */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Visual Diff Preview</h3>
                                    <p className="text-gray-300 mb-4">
                                        Shows you exactly what will change before applying updates.
                                    </p>

                                    <h4 className="text-lg font-semibold text-white mb-3">How to use:</h4>
                                    <ol className="space-y-2 text-gray-300 mb-4">
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">1.</span>
                                            <span>Rename a file or folder</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">2.</span>
                                            <span>A preview window appears showing each file that will be modified</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="gradient-text font-bold mr-3">3.</span>
                                            <span>Review before/after comparison for each import</span>
                                        </li>
                                    </ol>

                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <p className="text-sm font-semibold text-gray-400 mb-2">Configuration:</p>
                                        <pre className="text-orange-400 text-sm"><code>{`{
  "linker.preview.diffView": true,
  "linker.preview.layout": "side-by-side"
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Undo/Redo System */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Undo/Redo System</h3>
                                    <p className="text-gray-300 mb-4">
                                        Tracks all import changes so you can easily revert or reapply them.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-white mb-3">Keyboard Shortcuts:</h4>
                                        <div className="bg-gray-800 rounded-lg p-4 space-y-2 text-gray-300">
                                            <p><strong className="text-white">Undo:</strong> <code className="bg-gray-900 px-2 py-1 rounded text-orange-400">Ctrl+Alt+Z</code> (Windows/Linux) or <code className="bg-gray-900 px-2 py-1 rounded text-orange-400">Cmd+Alt+Z</code> (Mac)</p>
                                            <p><strong className="text-white">Redo:</strong> <code className="bg-gray-900 px-2 py-1 rounded text-orange-400">Ctrl+Alt+Y</code> (Windows/Linux) or <code className="bg-gray-900 px-2 py-1 rounded text-orange-400">Cmd+Alt+Y</code> (Mac)</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <p className="text-sm font-semibold text-gray-400 mb-2">Configuration:</p>
                                        <pre className="text-orange-400 text-sm"><code>{`{
  "linker.history.enabled": true,
  "linker.history.maxEntries": 50
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Format Preservation */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Format Preservation</h3>
                                    <p className="text-gray-300 mb-4">
                                        Maintains your code style when updating imports.
                                    </p>

                                    <h4 className="text-lg font-semibold text-white mb-3">Preserves:</h4>
                                    <ul className="space-y-2 text-gray-300 mb-4">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Quote Style:</strong> Single quotes, double quotes, or backticks</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Semicolons:</strong> Present or absent</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Indentation:</strong> Spaces or tabs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Line Breaks:</strong> Empty lines and spacing</span>
                                        </li>
                                    </ul>

                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <p className="text-sm font-semibold text-gray-400 mb-2">Configuration:</p>
                                        <pre className="text-orange-400 text-sm"><code>{`{
  "linker.formatting.quoteStyle": "auto",
  "linker.formatting.semicolons": "auto"
}`}</code></pre>
                                    </div>
                                </div>

                                {/* TypeScript Path Aliases */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">TypeScript Path Aliases</h3>
                                    <p className="text-gray-300 mb-4">
                                        Resolves and updates TypeScript path aliases from tsconfig.json.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">Example tsconfig.json:</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"],
      "~/*": ["*"]
    }
  }
}`}</code></pre>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">Automatically updates:</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`// Before renaming utils → helpers
import { validateEmail } from '@/utils/validators';

// After renaming (auto-updated)
import { validateEmail } from '@/helpers/validators';`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Folder Rename Support */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Folder Rename Support</h3>
                                    <p className="text-gray-300 mb-4">
                                        Updates all imports when you rename or move folders.
                                    </p>

                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <p className="text-sm font-semibold text-gray-400 mb-2">Example:</p>
                                        <pre className="text-orange-400 text-sm"><code>{`// Before: Folder named "services"
import { fetchUsers } from '../services/userService';

// After: Renamed to "api"
import { fetchUsers } from '../api/userService';`}</code></pre>
                                    </div>
                                </div>

                                {/* Git Integration */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-semibold text-white mb-4">Git Integration</h3>
                                    <p className="text-gray-300 mb-4">
                                        Uses git mv for tracked files and optionally auto-stages changes.
                                    </p>

                                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                                    <ul className="space-y-2 text-gray-300 mb-4">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Preserves Git history</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Works with Git workflows</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Automatic staging of modified imports</span>
                                        </li>
                                    </ul>

                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <p className="text-sm font-semibold text-gray-400 mb-2">Configuration:</p>
                                        <pre className="text-orange-400 text-sm"><code>{`{
  "linker.git.enabled": true,
  "linker.autoStageChanges": false
}`}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Configuration */}
                        <section id="configuration" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Configuration</h2>

                            <div className="space-y-6">
                                <p className="text-gray-300">
                                    Access via: <strong className="text-white">File → Preferences → Settings</strong> → Search "Linker"
                                </p>

                                {/* Basic Settings */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Basic Settings</h3>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`{
  // File types to scan for imports
  "linker.fileExtensions": [
    "js", "ts", "jsx", "tsx", "mjs", "cjs",
    "py",
    "java",
    "go",
    "css", "scss", "less"
  ],
  
  // Folders to exclude from scanning
  "linker.exclude": [
    "**/node_modules/**",
    "**/.git/**",
    "**/dist/**",
    "**/build/**",
    "**/__pycache__/**",
    "**/*.egg-info/**"
  ]
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Preview Settings */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Preview Settings</h3>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`{
  // Enable visual diff preview
  "linker.preview.diffView": true,
  
  // Layout: "side-by-side" or "inline"
  "linker.preview.layout": "side-by-side"
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Formatting Settings */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Formatting Settings</h3>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`{
  // Quote style: "single", "double", or "auto"
  "linker.formatting.quoteStyle": "auto",
  
  // Semicolons: "always", "never", or "auto"
  "linker.formatting.semicolons": "auto"
}`}</code></pre>
                                    </div>
                                </div>

                                {/* History Settings */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">History Settings</h3>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`{
  // Enable undo/redo functionality
  "linker.history.enabled": true,
  
  // Maximum number of history entries
  "linker.history.maxEntries": 50
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Language Settings */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Language Settings</h3>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`{
  // Enable/disable specific language support
  "linker.multiLanguage.python": true,
  "linker.multiLanguage.java": true,
  "linker.multiLanguage.go": true,
  "linker.multiLanguage.css": true
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Git Settings */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Git Settings</h3>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`{
  // Use git mv for tracked files
  "linker.git.enabled": true,
  
  // Automatically stage files modified by Linker
  "linker.autoStageChanges": false
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Performance Settings */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Performance Settings</h3>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <pre className="text-orange-400 text-sm overflow-x-auto"><code>{`{
  // Debounce delay in milliseconds (default: 500)
  "linker.performance.debounceDelay": 500,
  
  // Batch size for processing files (default: 50)
  "linker.performance.batchSize": 50,
  
  // Enable file caching for better performance
  "linker.performance.caching": true
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Complete Settings Reference Table */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                                    <div className="px-6 py-4 bg-gray-800 border-b border-gray-700">
                                        <h3 className="text-xl font-semibold text-white">Complete Settings Reference</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-gray-800">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-white font-semibold">Setting</th>
                                                    <th className="px-6 py-3 text-left text-white font-semibold">Type</th>
                                                    <th className="px-6 py-3 text-left text-white font-semibold">Default</th>
                                                    <th className="px-6 py-3 text-left text-white font-semibold">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800">
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.fileExtensions</td>
                                                    <td className="px-6 py-3 text-gray-400">Array</td>
                                                    <td className="px-6 py-3 text-gray-400">All supported</td>
                                                    <td className="px-6 py-3 text-gray-300">File types to scan</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.exclude</td>
                                                    <td className="px-6 py-3 text-gray-400">Array</td>
                                                    <td className="px-6 py-3 text-gray-400">node_modules, .git</td>
                                                    <td className="px-6 py-3 text-gray-300">Patterns to ignore</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.preview.diffView</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">true</td>
                                                    <td className="px-6 py-3 text-gray-300">Show visual preview</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.preview.layout</td>
                                                    <td className="px-6 py-3 text-gray-400">String</td>
                                                    <td className="px-6 py-3 text-gray-400">side-by-side</td>
                                                    <td className="px-6 py-3 text-gray-300">Diff layout style</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.formatting.quoteStyle</td>
                                                    <td className="px-6 py-3 text-gray-400">String</td>
                                                    <td className="px-6 py-3 text-gray-400">auto</td>
                                                    <td className="px-6 py-3 text-gray-300">Quote preference</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.formatting.semicolons</td>
                                                    <td className="px-6 py-3 text-gray-400">String</td>
                                                    <td className="px-6 py-3 text-gray-400">auto</td>
                                                    <td className="px-6 py-3 text-gray-300">Semicolon usage</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.history.enabled</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">true</td>
                                                    <td className="px-6 py-3 text-gray-300">Enable undo/redo</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.history.maxEntries</td>
                                                    <td className="px-6 py-3 text-gray-400">Number</td>
                                                    <td className="px-6 py-3 text-gray-400">50</td>
                                                    <td className="px-6 py-3 text-gray-300">History limit</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.multiLanguage.python</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">true</td>
                                                    <td className="px-6 py-3 text-gray-300">Python support</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.multiLanguage.java</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">true</td>
                                                    <td className="px-6 py-3 text-gray-300">Java support</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.multiLanguage.go</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">true</td>
                                                    <td className="px-6 py-3 text-gray-300">Go support</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.multiLanguage.css</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">true</td>
                                                    <td className="px-6 py-3 text-gray-300">CSS support</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.git.enabled</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">true</td>
                                                    <td className="px-6 py-3 text-gray-300">Use git mv</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.autoStageChanges</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">false</td>
                                                    <td className="px-6 py-3 text-gray-300">Auto-stage in Git</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.performance.debounceDelay</td>
                                                    <td className="px-6 py-3 text-gray-400">Number</td>
                                                    <td className="px-6 py-3 text-gray-400">500</td>
                                                    <td className="px-6 py-3 text-gray-300">Debounce delay (ms)</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.performance.batchSize</td>
                                                    <td className="px-6 py-3 text-gray-400">Number</td>
                                                    <td className="px-6 py-3 text-gray-400">50</td>
                                                    <td className="px-6 py-3 text-gray-300">Batch size</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-3 text-orange-400 font-mono text-sm">linker.performance.caching</td>
                                                    <td className="px-6 py-3 text-gray-400">Boolean</td>
                                                    <td className="px-6 py-3 text-gray-400">true</td>
                                                    <td className="px-6 py-3 text-gray-300">Enable caching</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Recommended Configurations */}
                                <div className="border-l-4 border-orange-500 pl-6 py-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">Recommended Configurations</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">For JavaScript/TypeScript Projects</h4>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`{
  "linker.fileExtensions": ["js", "ts", "jsx", "tsx"],
  "linker.exclude": ["**/node_modules/**", "**/dist/**"],
  "linker.formatting.quoteStyle": "single",
  "linker.formatting.semicolons": "never"
}`}</code></pre>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">For Python Projects</h4>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`{
  "linker.fileExtensions": ["py"],
  "linker.exclude": ["**/__pycache__/**", "**/venv/**"],
  "linker.multiLanguage.python": true
}`}</code></pre>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-2">For Multi-Language Projects</h4>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`{
  "linker.fileExtensions": ["js", "ts", "py", "java", "go"],
  "linker.exclude": [
    "**/node_modules/**",
    "**/__pycache__/**",
    "**/target/**"
  ],
  "linker.multiLanguage.python": true,
  "linker.multiLanguage.java": true,
  "linker.multiLanguage.go": true
}`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Examples */}
                        <section id="examples" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Examples</h2>

                            <div className="space-y-6">
                                {/* Example 1 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Example 1: Simple File Rename</h3>
                                    <p className="text-gray-300 mb-4"><strong className="text-white">Scenario:</strong> Rename utils.ts → helpers.ts</p>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">Before:</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`// src/app.ts
import { formatDate } from './utils';`}</code></pre>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">After (Linker auto-updates):</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`// src/app.ts
import { formatDate } from './helpers';`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 2 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Example 2: Folder Rename</h3>
                                    <p className="text-gray-300 mb-4"><strong className="text-white">Scenario:</strong> Rename services/ → api/</p>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">Before:</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`import { fetchUsers } from '../services/userService';`}</code></pre>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">After (Linker auto-updates):</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`import { fetchUsers } from '../api/userService';`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 3 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Example 3: Python Imports</h3>
                                    <p className="text-gray-300 mb-4"><strong className="text-white">Scenario:</strong> Rename helpers.py → utilities.py</p>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">Before:</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`from utils.helpers import format_date`}</code></pre>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">After (Linker auto-updates):</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`from utils.utilities import format_date`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 4 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Example 4: Java Package Imports</h3>
                                    <p className="text-gray-300 mb-4"><strong className="text-white">Scenario:</strong> Rename Helper.java → Utility.java</p>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">Before:</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`import com.example.utils.Helper;
import static com.example.utils.Helper.doSomething;`}</code></pre>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">After (Linker auto-updates):</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`import com.example.utils.Utility;
import static com.example.utils.Utility.doSomething;`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 5 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Example 5: CSS Imports</h3>
                                    <p className="text-gray-300 mb-4"><strong className="text-white">Scenario:</strong> Rename variables.css → vars.css</p>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">Before:</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`@import "partials/variables.css";`}</code></pre>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-400 mb-2">After (Linker auto-updates):</p>
                                            <div className="bg-gray-800 rounded-lg p-4">
                                                <pre className="text-orange-400 text-sm"><code>{`@import "partials/vars.css";`}</code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Keyboard Shortcuts */}
                        <section id="keyboard-shortcuts" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Keyboard Shortcuts</h2>

                            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                                <table className="w-full">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-white font-semibold">Action</th>
                                            <th className="px-6 py-4 text-left text-white font-semibold">Windows/Linux</th>
                                            <th className="px-6 py-4 text-left text-white font-semibold">Mac</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-800">
                                        <tr>
                                            <td className="px-6 py-4 text-gray-300">Undo last import changes</td>
                                            <td className="px-6 py-4"><code className="bg-gray-800 px-2 py-1 rounded text-orange-400">Ctrl+Alt+Z</code></td>
                                            <td className="px-6 py-4"><code className="bg-gray-800 px-2 py-1 rounded text-orange-400">Cmd+Alt+Z</code></td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-gray-300">Redo import changes</td>
                                            <td className="px-6 py-4"><code className="bg-gray-800 px-2 py-1 rounded text-orange-400">Ctrl+Alt+Y</code></td>
                                            <td className="px-6 py-4"><code className="bg-gray-800 px-2 py-1 rounded text-orange-400">Cmd+Alt+Y</code></td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-gray-300">Show import history</td>
                                            <td className="px-6 py-4 text-gray-400" colSpan={2}>Command Palette → "Linker: Show History"</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-gray-300">Clear import history</td>
                                            <td className="px-6 py-4 text-gray-400" colSpan={2}>Command Palette → "Linker: Clear History"</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 border-l-4 border-orange-500 pl-6 py-4">
                                <p className="text-gray-300">
                                    <strong className="text-white">Tip:</strong> Access Command Palette with <code className="bg-gray-900 px-2 py-1 rounded text-orange-400">Ctrl+Shift+P</code> (Windows/Linux) or <code className="bg-gray-900 px-2 py-1 rounded text-orange-400">Cmd+Shift+P</code> (Mac)
                                </p>
                            </div>
                        </section>

                        {/* Troubleshooting */}
                        <section id="troubleshooting" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Troubleshooting</h2>

                            <div className="space-y-6">
                                {/* Issue 1 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Issue: "No import updates needed"</h3>

                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-white mb-2">Possible Causes:</h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>File not imported anywhere</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>Imports already correct</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>File type not in fileExtensions</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Solutions:</h4>
                                        <ol className="space-y-2 text-gray-300">
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">1.</span>
                                                <span>Check that file is actually imported</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">2.</span>
                                                <span>Verify linker.fileExtensions includes the file type</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">3.</span>
                                                <span>Check linker.exclude is not blocking the directory</span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Issue 2 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Issue: Preview not showing</h3>

                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-white mb-2">Possible Causes:</h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>Preview disabled in settings</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>VS Code UI issue</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Solutions:</h4>
                                        <ol className="space-y-2 text-gray-300">
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">1.</span>
                                                <span>Enable preview: "linker.preview.diffView": true</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">2.</span>
                                                <span>Reload VS Code: Ctrl+Shift+P → "Reload Window"</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">3.</span>
                                                <span>Check VS Code console for errors</span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Issue 3 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Issue: Wrong quote style used</h3>

                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-white mb-2">Possible Causes:</h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>Auto-detection could not determine style</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>Multiple styles in same file</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Solutions:</h4>
                                        <ol className="space-y-2 text-gray-300">
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">1.</span>
                                                <span>Set explicit style: "linker.formatting.quoteStyle": "single"</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">2.</span>
                                                <span>Ensure consistent style in your codebase</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">3.</span>
                                                <span>Run Prettier/ESLint before using Linker</span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Issue 4 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Issue: Slow performance</h3>

                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-white mb-2">Possible Causes:</h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>Large workspace (1000+ files)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-orange-500 mr-3 mt-1">•</span>
                                                <span>Not enough exclusions</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Solutions:</h4>
                                        <ol className="space-y-2 text-gray-300">
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">1.</span>
                                                <span>Add more exclusions (dist, build, node_modules)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">2.</span>
                                                <span>Limit file extensions to only what you need</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="gradient-text font-bold mr-3">3.</span>
                                                <span>Close unused workspace folders</span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Getting Help */}
                                <div className="border-l-4 border-orange-500 pl-6 py-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">Getting Help</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Check Console:</strong> Help → Toggle Developer Tools → Console tab</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">GitHub Issues:</strong> Report a bug on GitHub</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span><strong className="text-white">Community:</strong> GitHub Discussions for questions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section id="best-practices" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Best Practices</h2>

                            <div className="space-y-6">
                                {/* Practice 1 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">1. Review Before Applying</h3>
                                    <p className="text-gray-300 mb-3">Always review the preview before clicking "Apply":</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Check all files are correct</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Verify import paths look right</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Look for unexpected changes</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Practice 2 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">2. Use Version Control</h3>
                                    <p className="text-gray-300 mb-3">Protect your codebase:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Commit before large refactoring</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Review Git diff after Linker updates</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Use branches for major renames</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Practice 3 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">3. Configure Exclusions</h3>
                                    <p className="text-gray-300 mb-3">Exclude unnecessary directories for better performance:</p>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <pre className="text-orange-400 text-sm"><code>{`{
  "linker.exclude": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.next/**",
    "**/coverage/**"
  ]
}`}</code></pre>
                                    </div>
                                </div>

                                {/* Practice 4 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">4. Consistent Code Style</h3>
                                    <p className="text-gray-300 mb-3">Maintain consistent formatting:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Use Prettier or ESLint</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Set explicit quoteStyle if needed</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Keep semicolon usage consistent</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Practice 5 */}
                                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">5. Test After Refactoring</h3>
                                    <p className="text-gray-300 mb-3">After using Linker:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Run your tests</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Check the app runs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Verify imports resolve correctly</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">FAQ</h2>

                            <div className="space-y-6">
                                {/* General Questions */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">General Questions</h3>

                                    <div className="space-y-4">
                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Is Linker free?</h4>
                                            <p className="text-gray-300">Yes, Linker is completely free and open-source (MIT License).</p>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Does it work offline?</h4>
                                            <p className="text-gray-300">Yes, Linker works entirely offline with no internet required.</p>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Does it modify my files automatically?</h4>
                                            <p className="text-gray-300">Only after you review and approve the preview.</p>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Can I undo changes?</h4>
                                            <p className="text-gray-300">Yes, use Ctrl+Alt+Z or the undo command.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Technical Questions */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Technical Questions</h3>

                                    <div className="space-y-4">
                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">What languages are supported?</h4>
                                            <p className="text-gray-300">JavaScript, TypeScript, Python, Java, Go, CSS/SCSS/LESS.</p>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Does it work with TypeScript path aliases?</h4>
                                            <p className="text-gray-300">Yes, Linker reads your tsconfig.json automatically.</p>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Can it rename folders?</h4>
                                            <p className="text-gray-300">Yes, folder renames are fully supported.</p>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Does it work in monorepos?</h4>
                                            <p className="text-gray-300">Yes, configure exclusions for optimal performance.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Performance Questions */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Performance Questions</h3>

                                    <div className="space-y-4">
                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">How large of a project can it handle?</h4>
                                            <p className="text-gray-300">Tested with projects up to 1000+ files efficiently.</p>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Will it slow down VS Code?</h4>
                                            <p className="text-gray-300">No, Linker uses smart caching and batch processing.</p>
                                        </div>

                                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                                            <h4 className="text-lg font-semibold text-white mb-2">Can I limit which files are scanned?</h4>
                                            <p className="text-gray-300">Yes, use fileExtensions and exclude settings.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Support */}
                                <div className="border-l-4 border-orange-500 pl-6 py-4">
                                    <h3 className="text-xl font-semibold text-white mb-4">Need More Help?</h3>
                                    <p className="text-gray-300 mb-4">
                                        If you have questions not covered here:
                                    </p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Visit GitHub Issues for bug reports</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Join GitHub Discussions for community help</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-orange-500 mr-3 mt-1">•</span>
                                            <span>Check the VS Code Marketplace for updates</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        
                    </main>
                </div>
            </div>
        </div>
    );
}
