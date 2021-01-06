import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import Landing from './components/hero/landing';
import Navbar from './components/my-navbar/navbar.js'
import Projects from './pages/portfolio/projects';
import Experience from "./pages/experience/experience";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
