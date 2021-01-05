import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles id="particles-js"
         params={{
             particles: {
                 number: {
                     value: 50,
                 },
                 size: {
                     value: 3,
                 }
             },
             interactivity: {
                 events: {
                     onhover: {
                         enable: true,
                         mode: "repulse"
                     }
                 }
             }
         }}
      />
      <h1>hello</h1>
    </div>
  );
}

export default App;
