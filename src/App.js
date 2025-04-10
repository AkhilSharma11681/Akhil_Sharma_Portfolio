import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-logo">MyPortfolio</span>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero" data-aos="fade-up">
        <h1>Hey, I'm Akhil Sharma.</h1>
        <h2>Frontend Developer</h2>
        <p>I build modern, responsive websites with a focus on clean UI and smooth UX.</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card" data-aos="fade-right">
            <h3>Project One</h3>
            <p>A weather app that shows real-time forecasts using the OpenWeather API.</p>
            <a href="https://github.com/AkhilSharma11681/Akhil_Sharma_Portfolio" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
          <div className="project-card" data-aos="fade-left">
            <h3>Project Two</h3>
            <p>A responsive portfolio template with React and custom CSS animations.</p>
            <a href="https://github.com/AkhilSharma11681/Akhil_Sharma_Portfolio" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills" data-aos="fade-up">
        <h2>Skills</h2>
        <div className="skills-flashcards">
          <div className="flashcard" data-aos="fade-right">
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div className="flashcard" data-aos="fade-left">
            <h3>Python & Data</h3>
            <ul>
              <li>Python</li>
              <li>Pandas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer focused on building sleek user interfaces and delivering seamless experiences through clean, responsive code.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <a href="mailto:Akhilsharma11681@gmail.com" className="cta-button">Say Hello</a>
        <div className="social-icons">
          <a href="https://github.com/AkhilSharma11681" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Akhil Sharma. Built with ❤️ using React.</p>
      </footer>
    </div>
  );
}

export default App;