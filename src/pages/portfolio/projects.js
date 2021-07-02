import React, {Component} from 'react'
import './projects.css';
import Grid from '@material-ui/core/Grid';
import {CardMedia, Chip, Container, withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { ProjectItems } from './projectItems';
import styles from '../../styles/ProjectStyles';
import ScrollAnimation from 'react-animate-on-scroll';


class Projects extends Component {

    displayCard(classes) {

        return ProjectItems.map(project => (
            <Grid item xs={12} sm={6} lg={4}>
                <Card className="card" variant="outlined">
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardMedia}
                            image={project.imageUrl}
                            title={project.title}
                        />
                        <CardContent id="cardContent">
                            <Typography
                                style={{color: "#ff006e", fontFamily: 'Poppins', fontWeight: 'bold'}}
                                className="title" gutterBottom variant="h5" component="h2">
                                {project.title}
                            </Typography>
                            <Typography id="wrapperDescription" style={{color: "black", fontFamily: 'Poppins', textAlign: 'left'}} variant="body2"
                                        color="textSecondary" component="p">
                                {project.description}
                            </Typography>
                            <CardActions id="techStackWrapper">
                                <h5 id="techStack">Tech Stack:</h5>
                                {project.techStack.map(t => <Chip id="chip" style={{backgroundColor: '#55CBC6'}} size="small" label={t}/>)}
                            </CardActions>
                        </CardContent>
                    </CardActionArea>
                    <CardActions id="buttonsWrapper">
                        {
                            Object.entries(project.url).map(u =>
                                <Button id="button" href={u[1].link} target="_blank" variant="contained" size="small" style={{backgroundColor: `${u[1].color}`}}>
                                    {u[0]}{u[1].icon}
                                </Button>
                            )
                        }
                    </CardActions>
                </Card>
                {/*card ends here*/}
            </Grid>
        ));
    }
    render() {
        const {classes} = this.props;
        return (
            <div id="portfolio">
                <Container>
                    <div>
                        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                            <h1>Portfolio</h1>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn'>
                            <Grid container justify={"flex-start"} alignItems={"flex-start"} spacing={2}>
                                {this.displayCard(classes)}
                            </Grid>
                        </ScrollAnimation>
                    </div>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(Projects);