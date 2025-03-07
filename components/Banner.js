function Banner() {
    return (
        <section data-name="banner" id="home" className="banner-gradient min-h-screen flex items-center pt-16 grid-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Ліва частина (контент) */}
                    <div data-name="banner-content" className="space-y-8">
                        
                        {/* Бейджик */}
                        <div className="relative flex flex-col items-center mb-8" style={{ height: "300px" }}>
                            <div className="badge-string"></div>
                            <div className="animate-badge-drop animate-badge-swing">
                                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/50 neon-border text-center">
                                    <div className="mb-4">
                                        <img src="./img/IMG_1296.JPG"
                                             alt="Igor profile"
                                             className="w-24 h-24 rounded-full border-4 border-cyan-500/50 neon-border mx-auto" />
                                    </div>
                                    <p className="text-cyan-300 text-lg mb-1">Hello, my name is</p>
                                    <h2 className="text-2xl font-bold text-white">Ihor</h2>
                                </div>
                            </div>
                        </div>
                        
                        {/* Заголовок */}
                        <div className="animate-slide-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                                Creative Web
                                <br />
                                Developer
                            </h1>
                        </div>
                        
                        {/* Опис */}
                        <div className="animate-slide-right">
                            <p className="text-xl text-cyan-300 mb-8">
                            Сreating exciting websites, portfolio landing pages
                            </p>
                        </div>
                        
                        {/* Кнопки */}
                        <div className="flex space-x-4 animate-fade-in" style={{animationDelay: "0.5s"}}>
                                <a data-name="cta-projects" href="#projects" 
                                   className="neon-button px-8 py-3 rounded-lg">
                                    <i className="fas fa-code mr-2"></i>
                                    View Projects
                                </a>
                                <a data-name="cta-contact" href="#contact"
                                   className="neon-button px-8 py-3 rounded-lg">
                                    <i className="fas fa-envelope mr-2"></i>
                                    Contact Me
                                </a>
                            </div>
                        </div>

                    {/* Права частина (ілюстрація) */}
                    <div data-name="banner-illustration" className="hidden lg:block perspective-container">
                        <div className="animate-float transform-3d">
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600"
                                 alt="Developer workspace illustration"
                                 className="rounded-lg neon-border" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
