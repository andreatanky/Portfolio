import React, { Component } from 'react';
import './about.css';
import {Container} from "@material-ui/core";

class About extends Component {
    render() {
        return (
            <div id="about">
                <h1>About</h1>
                <Container className="container">
                    <p>image here</p>
                </Container>
            </div>
        )
    }
}

export default About;