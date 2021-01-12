import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './skills.css';
import Typography from '@material-ui/core/Typography';
import {Avatar, Container, withStyles} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import python from '../../assets/skills_imgs/python.png';
import js from '../../assets/skills_imgs/js.png';
import java from '../../assets/skills_imgs/java.png';
import c from '../../assets/skills_imgs/C.png';
import dart from '../../assets/skills_imgs/dart.jpg';
import html from '../../assets/skills_imgs/html.png';
import css from '../../assets/skills_imgs/css.png';
import mdb from '../../assets/skills_imgs/mdb.png';
import react from '../../assets/skills_imgs/react.png';
import flutter from '../../assets/skills_imgs/flutter.png';
import fb from '../../assets/skills_imgs/fb.png';
import bs from '../../assets/skills_imgs/bs.png';
import express from '../../assets/skills_imgs/express.png';
import node from '../../assets/skills_imgs/nodejs.png';
import git from '../../assets/skills_imgs/git.png';
import adobe from '../../assets/skills_imgs/xd.png';
import heroku from '../../assets/skills_imgs/hero.png'
import {SkillItems} from './skillsItems';
import styles from "../../styles/SkillStyles";

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

class Skills extends Component {

    renderSkills(classes) {
        return SkillItems.map(e =>
            <Grid item xs={12} className={classes.skillBlock} >
                <Box className={classes.box} width={1} height="100%" style={{backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: '15px'}}>
                    <Box className={classes.category} height="100%" style={{backgroundColor: "rgba(255, 0, 84, 0.9)", borderRadius: '15px 0px 0px 15px'}}>
                        {e.title}
                    </Box>
                    <div className={classes.logos}>
                        {Object.entries(e.skills).map(s =>
                            <div className={classes.logoDiv} style={{}}>
                                <Avatar src={s[1]} style={{height: '45px', width: '45px', textAlign: 'center'}} variant='square'/>
                                <Typography style={{fontSize: '0.3em', color: '#ffffff', textAlign: 'center'}}>{s[0]}</Typography>
                            </div>
                        )}
                    </div>
                </Box>
            </Grid>
        )
    }

render() {
    const {classes} = this.props;
    return (
        <div className={classes.skills} id="skills">
            <h1>Skills</h1>
            <Grid className="area" xs={12} container spacing={1}>
                {this.renderSkills(classes)}
            </Grid>
        </div>


        // <div className="container" id="skills">
        //     <div>
        //         <h1>Skills</h1>
        //         <Grid className="area" container spacing={1}>
        //             <Grid item xs={12} sm={12} lg={12}>
        //                 <Box id="box" width={1} height="99%"
        //                      style={{backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: '15px'}}>
        //                     <Box className="titleBox" width="18%" height="100%"
        //                          style={{backgroundColor: "rgba(255, 0, 84, 0.9)", borderRadius: '15px 0px 0px 15px'}}>
        //                         <p style={{textAlign: 'center', lineHeight: '100px'}} className="type">Languages</p>
        //                     </Box>
        //                     <Box width="18%" height="100%">
        //                         <div id="logos">
        //                             <p id="para1"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                   variant="square" src={python}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff', textAlign: 'center'}}>Python</p>
        //                             </p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={js}/><p style={{
        //                                 fontSize: '0.6em',
        //                                 color: '#ffffff',
        //                                 textAlign: 'center'
        //                             }}>JavaScript</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={java}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>Java</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={c}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff', textAlign: 'center'}}>C</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={dart}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff', textAlign: 'center'}}>Dart</p></p>
        //                         </div>
        //                     </Box>
        //                 </Box>
        //             </Grid>
        //             <Grid item xs={12} sm={12} lg={12}>
        //                 <Box id="box" width={1} height="99%"
        //                      style={{backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: '15px'}}>
        //                     <Box width="18%" height="100%"
        //                          style={{backgroundColor: "rgba(255, 0, 84, 0.9)", borderRadius: '15px 0px 0px 15px'}}>
        //                         <p style={{textAlign: 'center', lineHeight: '100px'}} className="type">Front-end</p>
        //                     </Box>
        //                     <Box width="18%" height="100%">
        //                         <div id="logos">
        //                             <p id="para1"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                   variant="square" src={html}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>HTML5</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={css}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>CSS3</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={bs}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>Bootstrap</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={flutter}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>Flutter</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={react}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>React</p></p>
        //                         </div>
        //                     </Box>
        //                 </Box>
        //             </Grid>
        //             <Grid item xs={12} sm={12} lg={12}>
        //                 <Box id="box" width={1} height="99%"
        //                      style={{backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: '15px'}}>
        //                     <Box width="18%" height="100%"
        //                          style={{backgroundColor: "rgba(255, 0, 84, 0.9)", borderRadius: '15px 0px 0px 15px'}}>
        //                         <p style={{textAlign: 'center', lineHeight: '100px'}} className="type">Back-end</p>
        //                     </Box>
        //                     <Box width="18%" height="100%">
        //                         <div id="logos">
        //                             <p id="para1"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                   variant="square" src={mdb}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>MongoDB</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={fb}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>Firebase</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={node}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>Node.js</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={express}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>Express</p></p>
        //                         </div>
        //                     </Box>
        //                 </Box>
        //             </Grid>
        //             <Grid item xs={12} sm={12} lg={12}>
        //                 <Box id="box" width={1} height="99%"
        //                      style={{backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: '15px'}}>
        //                     <Box width="18%" height="100%"
        //                          style={{backgroundColor: "rgba(255, 0, 84, 0.9)", borderRadius: '15px 0px 0px 15px'}}>
        //                         <p style={{textAlign: 'center', lineHeight: '100px'}} className="type">Others</p>
        //                     </Box>
        //                     <Box width="18%" height="100%">
        //                         <div id="logos">
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={git}/>
        //                                 <p style={{fontSize: '0.6em', color: '#ffffff'}}>Git</p>
        //                             </p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={adobe}/><p
        //                                 style={{fontSize: '0.6em', color: '#ffffff'}}>AdobeXD</p></p>
        //                             <p id="para"><Avatar style={{height: '45px', width: '45px', textAlign: 'center'}}
        //                                                  variant="square" src={heroku}/>
        //                                 <p style={{fontSize: '0.6em', color: '#ffffff'}}>Heroku</p>
        //                             </p>
        //                         </div>
        //                     </Box>
        //                 </Box>
        //             </Grid>
        //         </Grid>
        //     </div>
        // </div>
    );
}
}

export default withStyles(styles)(Skills);