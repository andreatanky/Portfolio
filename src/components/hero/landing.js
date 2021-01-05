import React, { Component } from 'react'
import Particles from 'react-particles-js';

class Landing extends Component {
    render() {
        return (
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
                        value: '#ff006e'
                    },
                    size: {
                      value: 6,
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
        )
    }
}

export default Landing;