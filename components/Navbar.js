function Navbar() {
    try {
        return (
            <nav data-name="navbar" className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-cyan-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span data-name="logo" className="text-xl font-bold neon-text">DevPortfolio</span>
                        </div>
                        <div className="flex items-center space-x-8">
                            <a data-name="nav-home" href="#home" className="text-cyan-300 hover:text-cyan-400 transition">Home</a>
                            <a data-name="nav-about" href="#about" className="text-cyan-300 hover:text-cyan-400 transition">About</a>
                            <a data-name="nav-projects" href="#projects" className="text-cyan-300 hover:text-cyan-400 transition">Projects</a>
                            <a data-name="nav-contact" href="#contact" className="text-cyan-300 hover:text-cyan-400 transition">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
