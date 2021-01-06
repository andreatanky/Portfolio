import React, { Component } from 'react'
import CardItem from './cardItem';
import './projects.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CardMedia, colors, Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { ProjectItems } from './projectItems';
import { FaGithub } from 'react-icons/fa';
import { FaReadme } from 'react-icons/fa';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    contain: {
        padding: theme.spacing(5),
    },
    grids: {
        display: 'flex'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 320,
    }
}));

// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
//     media: {
//         height: 320,
//     },
// });



function Projects() {
    const classes = useStyles();
        return (
            <div id="portfolio">
                <Container className={classes.contain}>
                    <div className={classes.root}>
                        <h1>Projects</h1>
                        <Grid className="classes.grids" container spacing = {3}>
                            <Grid item xs={12} sm={6} lg={4}>
                                {/*insert card here*/}

                                <Card className={classes.root} style={{backgroundColor: "#ffff"}} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image= {ProjectItems[0].imageUrl}
                                            title= {ProjectItems[0].title}
                                        />
                                        <CardContent>
                                            <Typography style={{color: "#ff006e", fontFamily:'Poppins', fontWeight: 'bold'}} className="title" gutterBottom variant="h5" component="h2">
                                                {ProjectItems[0].title}
                                            </Typography>
                                            <Typography style={{color: "black", fontFamily:'Poppins'}} variant="body2" color="textSecondary" component="p">
                                                {ProjectItems[0].description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant="contained" size="small" color="secondary">
                                            <FaGithub />
                                        </Button>
                                        <Button color="secondary" variant="contained" size="small">
                                            <FaReadme />
                                        </Button>
                                    </CardActions>
                                </Card>
                                {/*card ends here*/}
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                {/*insert card here*/}

                                <Card className={classes.root} style={{backgroundColor: "#ffff"}} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image= {ProjectItems[1].imageUrl}
                                            title= {ProjectItems[1].title}
                                        />
                                        <CardContent>
                                            <Typography style={{color: "#ff006e", fontFamily:'Poppins', fontWeight: 'bold'}} className="title" gutterBottom variant="h5" component="h2">
                                                {ProjectItems[1].title}
                                            </Typography>
                                            <Typography style={{color: "black", fontFamily:'Poppins'}} variant="body2" color="textSecondary" component="p">
                                                {ProjectItems[1].description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant="contained" size="small" color="secondary">
                                            <FaGithub />
                                        </Button>
                                        <Button variant="contained" size="small" color="secondary">
                                            <FaReadme />
                                        </Button>
                                    </CardActions>
                                </Card>
                                {/*card ends here*/}
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                {/*insert card here*/}

                                <Card className={classes.root} style={{backgroundColor: "#ffff"}} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image= {ProjectItems[2].imageUrl}
                                            title= {ProjectItems[2].title}
                                        />
                                        <CardContent>
                                            <Typography style={{color: "#ff006e", fontFamily:'Poppins', fontWeight: 'bold'}} className="title" gutterBottom variant="h5" component="h2">
                                                {ProjectItems[2].title}
                                            </Typography>
                                            <Typography style={{color: "black", fontFamily:'Poppins'}} variant="body2" color="textSecondary" component="p">
                                                {ProjectItems[2].description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant="contained" size="small" color="secondary">
                                        <FaGithub />
                                        </Button>
                                        <Button variant="contained" size="small" color="secondary">
                                            <FaReadme />
                                        </Button>
                                    </CardActions>
                                </Card>
                                {/*card ends here*/}
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                {/*insert card here*/}

                                <Card className={classes.root} style={{backgroundColor: "#ffff"}} variant="outlined">
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image= {ProjectItems[3].imageUrl}
                                            title= {ProjectItems[3].title}
                                        />
                                        <CardContent>
                                            <Typography style={{color: "#ff006e", fontFamily:'Poppins', fontWeight: 'bold'}} className="title" gutterBottom variant="h5" component="h2">
                                                {ProjectItems[3].title}
                                            </Typography>
                                            <Typography style={{color: "black", fontFamily:'Poppins'}} variant="body2" color="textSecondary" component="p">
                                                {ProjectItems[3].description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant="contained" size="small" color="secondary">
                                            <FaGithub />
                                        </Button>
                                        <Button className={classes.documentation} variant="contained" size="small" color="secondary">
                                            <FaReadme />
                                        </Button>
                                    </CardActions>
                                </Card>
                                {/*card ends here*/}
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        )
}

export default Projects;