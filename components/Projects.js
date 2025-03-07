function Projects() {
    try {
        const projects = [
            {
                title: "Portfolio Website",
                description: "A modern portfolio website with animations and responsive design",
                image: "./img/portfolio.png",
                tags: ["React", "Html", "CSS","JS","TailwindCSS"],
                link: "https://dydai26.github.io/DumiakPortfolio/"
            },
            {
                title: "Website",
                description: "website business card for a confectionery manufacturer",
                image: "./img/VP.png",
                tags: ["React", "Html", "CSS","JS","TailwindCSS","PHP"],
                link: "https://vyrobnykplyus.com"
            },
            
            {
                title: "E-commerce Platform",
                description: "Website business card for a confectionery manufacturer",
                image: "./img/kon.png",
                tags: ["React", "Html", "CSS","JS","TailwindCSS"],
                link: "https://dydai26.github.io/cakes/"
            },
            {
                title: "landing page",
                description: "landing page for commodity business",
                image: "./img/L2.png",
                tags: ["Html", "CSS","JS"],
                link: "https://dydai26.github.io/oxygen/"
            },
            {
                title: "landing page",
                description: "landing page for commodity business",
                image: "./img/L1.png",
                tags: ["Html", "CSS","JS"],
                link: "https://dydai26.github.io/test/"
            },
            {
                title: "landing page",
                description: "landing page for commodity business",
                image: "./img/L3.png",
                tags: ["Html", "CSS","JS"],
                link: "https://dydai26.github.io/women-s-clothing/"
            },
            {
                title: "landing page",
                description: "landing page for commodity business",
                image: "./img/L4.png",
                tags: ["Html", "CSS","JS"],
                link: "https://dydai26.github.io/manicure-set/"
            },
            {
                title: "Shop",
                description: "Website business card for a confectionery manufacturer",
                image: "./img/shop.png",
                tags: ["Html", "CSS","JS", "Bootstrap"],
                link: "https://dydai26.github.io/souyz_shop/"
            }
        ];

        return (
            <section data-name="projects" id="projects" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-300 text-center mb-12 text-white section-title neon-text">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div data-name={`project-${index}`} key={index} className="project-card rounded-lg overflow-hidden perspective-container bg-gray-800 shadow-lg">
                                <div className="transform-3d">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-white neon-text">{project.title}</h3>
                                        <p className="text-cyan-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm neon-border">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Detail...</a>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
