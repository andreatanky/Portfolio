import React, { Component } from 'react';
import './about.css';
import {Avatar, Container, makeStyles} from "@material-ui/core";
import andrea from '../../assets/proj_imgs/andrea.PNG';

function About() {
    return (
        <div id="about">
            <h1>About</h1>
            <Container id="wrapper">
                <Avatar style={{ height: '280px', width: '280px', textAlign: 'center' }} id="andrea" src={andrea} />
            </Container>
            <Container className="contain">
                <div>
                    <p id="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </Container>
        </div>
    )
}

export default About;