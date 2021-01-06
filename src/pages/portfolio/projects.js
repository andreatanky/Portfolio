import React, { Component } from 'react'
import CardItem from './cardItem';
import './projects.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CardMedia, Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    contain: {
        padding: theme.spacing(5),
    }
}));


function Projects() {
    const classes = useStyles();
        return (
            <div id="portfolio">
                <Container className={classes.contain}>
                    <div className={classes.root}>
                        <h1>Projects</h1>
                        <Grid container spacing = {3}>
                            <Grid item xs={12} sm={6} lg={4}>
                                <CardItem/>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}><CardItem/></Grid>
                            <Grid item xs={12} sm={6} lg={4}><CardItem/></Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        )
}

export default Projects;