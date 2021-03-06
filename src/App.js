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
import Grid from "@material-ui/core/Grid";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"


function App() {

    useEffect(() => {
        Aos.init({
            duration : 700
        });
    });

  return (
    <div className="App">
      <Navbar/>
      <Landing/>
        <About/>
        <Grid container className="outerContainer" >
            <Grid item xs={12} sm={12} lg={6}><Experience/></Grid>
            <Grid item xs={12} sm={12} lg={6}><Skills/></Grid>
        </Grid>
        <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
