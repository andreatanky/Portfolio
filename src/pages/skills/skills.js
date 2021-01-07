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
import {Container, withStyles} from "@material-ui/core";
import Box from '@material-ui/core/Box';

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
    skillarea: {
        height: 20
    }
}));

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF",
    }
})(Typography);

function Skills() {
    const classes = useStyles();

    return (
        <div className="container" id="skills">
            <div className={classes.root}>
                <h1 >Skills</h1>
                <Grid className="skillarea" container spacing={0}>
                    <Grid item xs={12} sm={12} lg={12}>
                        {/*<Card width="100%" height="50%" variant="outlined" style={{backgroundColor: "#003459"}} className={classes.paper}>*/}
                        {/*    <CardContent>*/}

                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                        <Box width={1} height="93%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p className="type">Back-end</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        {/*<Card style={{backgroundColor: "#ef476f"}} className={classes.paper}>*/}
                        {/*    <CardContent>*/}
                        {/*        <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>*/}
                        {/*            Databases*/}
                        {/*        </WhiteTextTypography>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                        <Box width={1} height="93%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p className="type">Front-end</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        {/*<Card style={{backgroundColor: "#ef476f"}} className={classes.paper}>*/}
                        {/*    <CardContent>*/}
                        {/*        <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>*/}
                        {/*            Hosting*/}
                        {/*        </WhiteTextTypography>*/}

                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                        <Box width={1} height="93%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p className="type">Languages</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        {/*<Card style={{backgroundColor: "#003459"}} className={classes.paper}>*/}
                        {/*    <CardContent>*/}
                        {/*        <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>*/}
                        {/*            Languages*/}
                        {/*        </WhiteTextTypography>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                        <Box width={1} height="93%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p className="type">Databases</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        {/*<Card style={{backgroundColor: "#003459"}} className={classes.paper}>*/}
                        {/*    <CardContent>*/}
                        {/*        <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>*/}
                        {/*            Frontend*/}
                        {/*        </WhiteTextTypography>*/}
                        {/*        <div>*/}

                        {/*        </div>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                        <Box width={1} height="90%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p className="type">Version control</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        {/*<Card style={{backgroundColor: "#ef476f"}} className={classes.paper}>*/}
                        {/*    <CardContent>*/}
                        {/*        <WhiteTextTypography className={classes.title} color="textSecondary" gutterBottom>*/}
                        {/*            Version control*/}
                        {/*        </WhiteTextTypography>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                        <Box width={1} height="90%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p className="type">Hosting platforms</p>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Skills;