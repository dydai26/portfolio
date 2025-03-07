function App() {
    try {
        return (
            <div data-name="app">
                <Navbar />
                <Banner />
                <About />
                <Projects />
                <Contact />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
