import React, { Component } from 'react'
import Particles from 'react-particles-js';
import './landing.css';
import Button from '@material-ui/core/Button';


class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landingText">
                    <h1>Hello, I'm <span> Andrea Tan</span>.<br/> I'm a year 2 Computer Science student.</h1>
                    <Button variant="contained">
                        View my work
                    </Button>
                </div>
                <Particles id="particles-js"
                   params={{
                       particles: {
                           number: {
                               value: 130,
                               density: {
                                   enable: true,
                                   value_area: 1000
                               }
                           },
                           color: {
                               value: ["#f94144","#f3722c","#f9c74f","#90be6d","#d8bbff","c0fdff"]
                           },
                           size: {
                               value: 7,
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