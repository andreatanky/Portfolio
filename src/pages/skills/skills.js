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
import {Avatar, Container, withStyles} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import python from '../../assets/skills_imgs/python.png';
import js from '../../assets/skills_imgs/js.png';
import java from '../../assets/skills_imgs/java.png';
import c from '../../assets/skills_imgs/C.png';
import dart from '../../assets/skills_imgs/dart.png';

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
        color: "#FFFFFF",
    }
})(Typography);

function Skills() {
    const classes = useStyles();

    return (
        <div className="container" id="skills">
            <div className={classes.root}>
                <h1 >Skills</h1>
                <Grid className="area" container spacing={1}>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Box id="box" width={1} height="99%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p style={{textAlign: 'center', paddingTop: '0.9em'}} className="type">Languages</p>
                            </Box>
                            <Box width="18%" height="100%">
                                <div id="logos">
                                    <p id="para1">
                                        <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={python}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={js}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={java}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={c}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={dart}/></p>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Box id="box" width={1} height="99%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p style={{textAlign: 'center', paddingTop: '0.9em'}} className="type">Front-end</p>
                            </Box>
                            <Box width="18%" height="100%">
                                <div id="logos">
                                    <p id="para1">
                                        <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={python}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={js}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={java}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={c}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={dart}/></p>
                                </div>
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
                        <Box id="box" width={1} height="99%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p style={{textAlign: 'center', paddingTop: '0.9em'}} className="type">Back-end</p>
                            </Box>
                            <Box width="18%" height="100%">
                                <div id="logos">
                                    <p id="para1">
                                        <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={python}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={js}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={java}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={c}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={dart}/></p>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Box id="box" width={1} height="99%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p style={{textAlign: 'center', paddingTop: '0.9em'}} className="type">Databases</p>
                            </Box>
                            <Box width="18%" height="100%">
                                <div id="logos">
                                    <p id="para1">
                                        <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={python}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={js}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={java}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={c}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={dart}/></p>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Box id="box" width={1} height="90%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p style={{textAlign: 'center', paddingTop: '0.6em'}} className="type">VCS</p>
                            </Box>
                            <Box width="18%" height="100%">
                                <div id="logos">
                                    <p id="para1">
                                        <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={python}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={js}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={java}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={c}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={dart}/></p>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12}>
                        <Box id="box" width={1} height="90%" style={{backgroundColor: "#003459", borderRadius: '25px'}}>
                            <Box width="18%" height="100%" style={{backgroundColor: "#ce4257", borderRadius: '25px'}}>
                                <p className="type">Hosting platforms</p>
                            </Box>
                            <Box width="18%" height="100%">
                                <div id="logos">
                                    <p id="para1">
                                        <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={python}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={js}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={java}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={c}/></p>
                                    <p id="para"> <Avatar style={{ height: '45px', width: '45px', textAlign: 'center' }} variant="square" src={dart}/></p>
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Skills;