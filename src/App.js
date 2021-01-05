import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import Landing from './components/hero/landing';
import Navbar from './components/my-navbar/navbar.js'
import Projects from './pages/portfolio/projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Projects/>
    </div>
  );
}

export default App;
