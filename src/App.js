import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import Landing from './components/hero/landing';
import Navbar from './components/my-navbar/navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <h1>hello</h1>
    </div>
  );
}

export default App;
