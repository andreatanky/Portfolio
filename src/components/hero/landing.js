import React, { Component } from 'react'
import Particles from 'react-particles-js';
import './landing.css';
import Button from '@material-ui/core/Button';
import { HashLink } from 'react-router-hash-link';
import ScrollAnimation from 'react-animate-on-scroll';


class Landing extends Component {
    render() {
        return (
            <div>
                <ScrollAnimation animateIn='fadeIn'
                                 animateOut='fadeOut' className="landingText">
                    <div>
                        <h1>Hello, I'm <span> Andrea</span>.<br/> I'm a Computer Science student.</h1>
                        <Button variant="contained" size="small">
                            <HashLink className="nav-link" smooth to="#portfolio">View my work</HashLink>
                        </Button>
                    </div>
                </ScrollAnimation>
                <Particles id="particles-js"
                   params={{
                       particles: {
                           number: {
                               value: 150,
                               density: {
                                   enable: true,
                                   value_area: 1000
                               }
                           },
                           color: {
                               value: ["#f94144","#f3722c","#f9c74f","#90be6d","#d8bbff","c0fdff"]
                           },
                           size: {
                               value: 8,
                               random: true,
                           },
                           line_linked: {
                               enable: true,
                               color: '#c4fff9'
                           },
                           move: {
                               speed: 0.9
                           },
                       },
                       interactivity: {
                           detect_on:"window",
                           events: {
                               onhover: {
                                   enable: true,
                                   mode: "repulse"
                               }
                           }
                       }
                   }}
                />

            </div>
        )
    }
}

export default Landing;