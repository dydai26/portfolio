function Contact() {
    try {
        return (
            <section data-name="contact" id="contact" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-300 text-center mb-12 text-white section-title neon-text">Get In Touch</h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="project-card p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div data-name="contact-info" className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white neon-text">Contact Information</h3>
                                    <div className="flex items-center space-x-3 text-cyan-300">
                                        <i className="fas fa-envelope"></i>
                                        <span>developer@example.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-cyan-300">
                                        <i className="fas fa-phone"></i>
                                        <span>+38 0661610467</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-cyan-300">
                                        <i className="fas fa-location-dot"></i>
                                        <span>Ukraine, Lviv</span>
                                    </div>
                                </div>
                                <div data-name="social-links" className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white neon-text">Follow Me</h3>
                                    <div className="flex space-x-6">
                                        <a href="#" className="contact-icon text-2xl text-cyan-300">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="#" className="contact-icon text-2xl text-cyan-300">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="#" className="contact-icon text-2xl text-cyan-300">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="contact-icon text-2xl text-cyan-300">
                                            <i className="fab fa-dribbble"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <form data-name="contact-form" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Name" 
                                           className="neon-input w-full px-4 py-2 rounded-lg" />
                                    <input type="email" placeholder="Email" 
                                           className="neon-input w-full px-4 py-2 rounded-lg" />
                                </div>
                                <input type="text" placeholder="Subject" 
                                       className="neon-input w-full px-4 py-2 rounded-lg" />
                                <textarea placeholder="Message" rows="4"
                                          className="neon-input w-full px-4 py-2 rounded-lg"></textarea>
                                <button type="submit" 
                                        className="neon-button w-full py-3 rounded-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
