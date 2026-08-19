import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeRedirect from './components/ResumeRedirect.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress';
import SectionDivider from './components/SectionDivider.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumeRedirect />} />
        <Route
          path="/*"
          element={
            <div className="relative min-h-screen bg-primary text-text-primary noise-overlay">
              {/* Scroll Progress Bar */}
              <ScrollProgress />

              <Header />
              <main>
                <Hero />
                <SectionDivider fromColor="#1F1E1D" toColor="#1F1E1D" />
                <Projects />
                <SectionDivider fromColor="#1F1E1D" toColor="#262624" />
                <Experience />
                <SectionDivider fromColor="#262624" toColor="#1F1E1D" flip />
                <Skills />
                <SectionDivider fromColor="#1F1E1D" toColor="#262624" />
                <Education />
                <SectionDivider fromColor="#262624" toColor="#1F1E1D" flip />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;