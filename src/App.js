import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-logo">MyPortfolio</span>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <h1>Hey, I'm Akhil Sharma.</h1>
        <h2>Frontend Developer</h2>
        <p>I build modern, responsive websites with a focus on clean UI and smooth UX.</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A weather app that shows real-time forecasts using the OpenWeather API.</p>
            <a href="https://github.com/AkhilSharma11681/Akhil_Sharma_Portfolio" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>

          <div className="project-card">
            <h3>Project Two</h3>
            <p>A responsive portfolio template with React and custom CSS animations.</p>
            <a href="https://github.com/AkhilSharma11681/Akhil_Sharma_Portfolio" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer focused on building sleek user interfaces and delivering seamless experiences through clean, responsive code.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <a href="Akhilsharma11681@gmail.com" className="cta-button">Say Hello</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Akhil Sharma</p>
      </footer>
    </div>
  );
}

export default App;