import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './skills.css';
import {Avatar, Container, withStyles} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import ScrollAnimation from 'react-animate-on-scroll';
import {SkillItems} from './skillsItems';
import styles from "../../styles/SkillStyles";

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
                <ScrollAnimation animateIn='bounceInRight'
                                 animateOut='bounceOutLeft'>
                    <h1 id="skillsText">Skills</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'>
                <Grid className="area" container spacing={1}>
                    {this.renderSkills()}
                </Grid>
                </ScrollAnimation>
            </div>
        </div>
    );
}
}

export default withStyles(styles)(Skills);