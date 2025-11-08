import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen bg-black">
            <section className="py-20 wave-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-6xl font-bold text-white mb-6">
                            About <span className="gradient-text">Linker</span>
                        </h1>
                        <p className="text-2xl text-gray-300">
                            The ultimate VS Code extension for managing file dependencies
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-black border-t border-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    What is Linker?
                                </h2>
                                <div className="space-y-4 text-lg text-gray-300">
                                    <p>
                                        Linker is a powerful Visual Studio Code extension designed to eliminate one of the most tedious tasks in software development: manually updating import statements when files are moved or renamed.
                                    </p>
                                    <p>
                                        Built with modern development workflows in mind, Linker automatically detects when you move, rename, or reorganize files and intelligently updates all corresponding import statements throughout your codebase.
                                    </p>
                                    <p>
                                        Whether you're working on a small project or managing a massive codebase with thousands of files, Linker saves you time and prevents errors by handling dependency management automatically.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Automatic import/export updates",
                                        "Multi-language support (JS, TS, Python, Java, Go, CSS)",
                                        "Visual preview before applying changes",
                                        "Full undo/redo history",
                                        "Git integration with auto-staging",
                                        "Format preservation",
                                        "Zero configuration required"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-orange-500 mr-3 text-xl">✓</span>
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-black border-t border-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-16">
                            How It Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Move or Rename",
                                    description: "Simply move or rename files in your project using VS Code's built-in file explorer"
                                },
                                {
                                    step: "02",
                                    title: "Preview Changes",
                                    description: "Linker detects the change and shows you a preview of all affected imports with a side-by-side diff"
                                },
                                {
                                    step: "03",
                                    title: "Apply & Done",
                                    description: "Review and apply the changes with one click. All imports are automatically updated throughout your codebase"
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-black border-t border-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl font-bold text-white text-center mb-16">
                            Why Developers Love Linker
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    emoji: "⏱️",
                                    title: "Saves Hours of Work",
                                    description: "No more manually searching and replacing imports across dozens or hundreds of files"
                                },
                                {
                                    emoji: "🐛",
                                    title: "Prevents Bugs",
                                    description: "Eliminates broken imports that cause runtime errors and failed builds"
                                },
                                {
                                    emoji: "🔄",
                                    title: "Encourages Refactoring",
                                    description: "Feel confident reorganizing your codebase knowing imports will update automatically"
                                },
                                {
                                    emoji: "💼",
                                    title: "Enterprise Ready",
                                    description: "Handles large codebases with thousands of files efficiently and reliably"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition-all duration-300">
                                    <div className="text-5xl mb-4">{item.emoji}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-black border-t border-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Ready to Try Linker?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join thousands of developers who have streamlined their workflow with Linker
                        </p>
                        <div className="flex justify-center">
                            <Link href="/user-guide">
                                <button className="btn-primary text-lg px-8 py-3">
                                    View User Guide
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
