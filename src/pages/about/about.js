import React, { Component } from 'react';
import './about.css';
import {Avatar, Container, makeStyles} from "@material-ui/core";
import andrea from '../../assets/proj_imgs/andrea.PNG';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    large: {
        width: theme.spacing(1),
        height: theme.spacing(1),
    }
    }}));

function About() {
    const classes = useStyles();
    return (
        <div id="about">
            <h1>About</h1>
            <Container id="wrapper">
                <Avatar style={{ height: '300px', width: '300px' }} className={classes.large} id="andrea" alt="Remy Sharp" src={andrea} />
            </Container>
        </div>
    )
}

export default About;