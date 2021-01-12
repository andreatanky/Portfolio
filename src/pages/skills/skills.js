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

    renderSkills() {
        return SkillItems.map(e =>
            <Grid item xs={12} sm={12} lg={12}>
                <Box id="box" width={1} height="99%">
                    <Box className="titleBox" width="18%" height="100%">
                        {e.title}
                    </Box>
                    <Box width="18%" height="100%">
                        <div id="logos">
                            {
                                Object.entries(e.skills).map(s =>
                                    <div>
                                        <p id="para1">
                                            <Avatar id="skillAvatar" variant="square" src={s[1]}/>
                                            <p style={{fontSize: '0.6em', color: '#ffffff', textAlign: 'center'}}>{s[0]}</p>
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </Box>
                </Box>
            </Grid>
        )
    }

render() {
    return (
        <div className="container" id="skills">
            <div>
                <h1>Skills</h1>
                <Grid className="area" container spacing={1}>
                    {this.renderSkills()}
                </Grid>
            </div>
        </div>
    );
}
}

export default withStyles(styles)(Skills);