function About() {
    try {
        return (
            <section data-name="about" id="about" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-300 text-center mb-12 text-white section-title neon-text">About Me</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div data-name="about-image" className="perspective-container">
                            <div className="transform-3d">
                                <img src="./img/about.png"
                                     alt="Profile"
                                     className="rounded-lg neon-border" />
                            </div>
                        </div>
                        <div data-name="about-content" className="space-y-6">
                            <p className="text-lg text-cyan-300">
                            I am a web developer with over 2+ years of experience building modern, fast, and responsive web applications. My specialization is React, Node.js, and full stack HTML, CSS, JavaScript.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div data-name="skills-frontend" className="skill-card p-4 rounded-lg">
                                    <h3 className="font-semibold text-white mb-3 neon-text">Frontend</h3>
                                    <ul className="text-cyan-300 space-y-2">
                                    <li className="flex items-center">
        <i className="fab fa-html5 text-orange-500 mr-2"></i>
        HTML
    </li>
    <li className="flex items-center">
        <i className="fab fa-css3-alt text-blue-500 mr-2"></i>
        CSS
    </li>
    <li className="flex items-center">
        <i className="fab fa-js text-yellow-500 mr-2"></i>
        JavaScript
    </li>
    <li className="flex items-center">
        <i className="fab fa-react text-cyan-500 mr-2"></i>
        React
    </li>
    <li className="flex items-center">
        <i className="fab fa-js-square text-blue-600 mr-2"></i>
        TypeScript
    </li>
    <li className="flex items-center">
        <i className="fas fa-wind text-teal-500 mr-2"></i>
        TailwindCSS
    </li>
    <li className="flex items-center">
        <i className="fas fa-circle text-black dark:text-white mr-2"></i>
        Next.js
    </li>
</ul>
                                </div>
                                <div data-name="skills-backend" className="skill-card p-4 rounded-lg">
                                    <h3 className="font-semibold text-white mb-3 neon-text">Backend</h3>
                                    <ul className="text-cyan-300 space-y-2">
                                        <li className="flex items-center">
                                            <i className="fas fa-server mr-2"></i>
                                            Node.js
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-server mr-2"></i>
                                            Express
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-database mr-2"></i>
                                            MongoDB
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-database mr-2"></i>
                                            PostgreSQL
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
