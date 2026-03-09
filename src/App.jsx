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
                <SectionDivider fromColor="#0a0a0b" toColor="#0a0a0b" />
                <Projects />
                <SectionDivider fromColor="#0a0a0b" toColor="#111113" />
                <Experience />
                <SectionDivider fromColor="#111113" toColor="#0a0a0b" flip />
                <Skills />
                <SectionDivider fromColor="#0a0a0b" toColor="#111113" />
                <Education />
                <SectionDivider fromColor="#111113" toColor="#0a0a0b" flip />
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