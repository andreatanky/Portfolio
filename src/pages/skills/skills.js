import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './skills.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        fontSize: 19,
    },
}));

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

function Skills() {
    const classes = useStyles();

    return (
        <div className="container" id="skills">
            <div className={classes.root}>
                <h1 >Skills</h1>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Card variant="outlined" style={{backgroundColor: "#003459"}} className={classes.paper}>
                            <CardContent>
                                <WhiteTextTypography className={classes.title} gutterBottom>
                                    Backend
                                </WhiteTextTypography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{backgroundColor: "#ef476f"}} className={classes.paper}>
                            <CardContent>
                                <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>
                                    Databases
                                </WhiteTextTypography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{backgroundColor: "#ef476f"}} className={classes.paper}>
                            <CardContent>
                                <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>
                                    Hosting
                                </WhiteTextTypography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={9}>
                        <Card style={{backgroundColor: "#003459"}} className={classes.paper}>
                            <CardContent>
                                <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>
                                    Languages
                                </WhiteTextTypography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={9}>
                        <Card style={{backgroundColor: "#003459"}} className={classes.paper}>
                            <CardContent>
                                <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>
                                    Frontend
                                </WhiteTextTypography>
                                <div>

                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{backgroundColor: "#ef476f"}} className={classes.paper}>
                            <CardContent>
                                <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>
                                    Version control
                                </WhiteTextTypography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Skills;