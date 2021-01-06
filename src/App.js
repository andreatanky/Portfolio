import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import Landing from './components/hero/landing';
import Navbar from './components/my-navbar/navbar.js'
import Projects from './pages/portfolio/projects';
import Experience from "./pages/experience/experience";
import Skills from "./pages/skills/skills";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Projects/>
      <Experience/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
