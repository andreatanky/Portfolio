import React, { Component } from 'react';
import './about.css';
import {Avatar, Container, makeStyles} from "@material-ui/core";
import andrea from '../../assets/proj_imgs/andrea.PNG';
import Grid from "@material-ui/core/Grid";

function About() {
    return (
        <div id="about">
            <h1>About</h1>
            <Grid className="wrapContainer" container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Container id="wrapper">
                        <Avatar style={{ height: '310px', width: '310px', textAlign: 'center' }} id="andrea" src={andrea} />
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Container className="contain">
                        <div id="description">
                            <p id="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;