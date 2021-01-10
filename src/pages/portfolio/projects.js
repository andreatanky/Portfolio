import React, {Component} from 'react'
import CardItem from './cardItem';
import './projects.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CardMedia, colors, Container, withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { ProjectItems } from './projectItems';
import {FaExternalLinkSquareAlt, FaGithub} from 'react-icons/fa';
import { FaReadme } from 'react-icons/fa';
import styles from '../../styles/ProjectStyles';

//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         minWidth: 275,
//     },
//     contain: {
//         padding: theme.spacing(5),
//     },
//     grids: {
//         display: 'flex'
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
//     }
// }));



class Projects extends Component {
    displayCard(classes) {
        return ProjectItems.map(project => (
            <Grid item xs={12} sm={6} lg={4}>
                <Card style={{backgroundColor: "#ffff"}} variant="outlined">
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardMedia}
                            image={project.imageUrl}
                            title={project.title}
                        />
                        <CardContent>
                            <Typography
                                style={{color: "#ff006e", fontFamily: 'Poppins', fontWeight: 'bold'}}
                                className="title" gutterBottom variant="h5" component="h2">
                                {project.title}
                            </Typography>
                            <Typography style={{color: "black", fontFamily: 'Poppins'}} variant="body2"
                                        color="textSecondary" component="p">
                                {project.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {
                            Object.entries(project.url).map(u =>
                                <Button variant="contained" size="small" color="secondary">
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
                        <h1>Portfolio</h1>
                        <Grid container justify={"flex-start"} alignItems={"flex-start"} spacing={2}>
                            {this.displayCard(classes)}
                        </Grid>
                    </div>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(Projects);