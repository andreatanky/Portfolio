import React, {Component, useEffect} from 'react';
import './about.css';
import {Avatar, Container, makeStyles} from "@material-ui/core";
import andrea from '../../assets/proj_imgs/andrea.PNG';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
    return (
        <div id="about">
            <Grid className="wrapContainer" container spacing={9}>
                <Grid id="leftWrapper" item xs={12} sm={12} lg={6}>
                    <div>
                        <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
                        <Container id="wrapper">
                            <Avatar id="andrea" src={andrea} />
                        </Container>
                        <Container id="buttonContainer">
                            <Button href="https://github.com/andreatanky" target="_blank" id="button1" variant="contained" color="secondary">
                                View Github
                            </Button>
                            <Button id="button2" href="https://github.com/andreatanky/resume/blob/master/Andrea_Resume.pdf" target="_blank" variant="contained" style={{backgroundColor:'#77A0B9'}}>
                                View Resume
                            </Button>
                        </Container>
                        </ScrollAnimation>
                    </div>
                </Grid>
                <Grid id="rightWrapper" item xs={12} sm={12} lg={6}>
                    <div id="description">
                        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                            <h1 id="aboutTitle">About</h1>
                        <p id="text">Hi there! My name is Andrea Tan and I am a year 2 Computer Science student at the National University of Singapore.<br/><br/> I enjoy learning and exploring the world of technology through working on projects individually or with my peers. I especially enjoy the element of designing and choosing out colour schemes for these projects, as well as the teamwork and fulfilment from completing them. Do check them out below! <br/><br/> I enjoy singing and playing the piano too. :)
                            <br/>
                            <br/>
                            <br/>
                            Signing off,
                            <br/>
                            Andrea
                        </p>
                        </ScrollAnimation>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;