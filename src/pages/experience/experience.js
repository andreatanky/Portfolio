import React, { Component } from 'react';
import './experience.css'
import timelineElements from "./timelineElements";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import ScrollAnimation from 'react-animate-on-scroll';
import {Container} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";

function Experience() {

    let schoolIconStyles = {
        background: "#E5767B",
        color: "white"
    }

    let internshipIconStyles = {
        background: "#83c5be",
        color: "white"
    }

    return (
        <div id="experience">
            <ScrollAnimation animateIn='bounceInLeft'
                             animateOut='bounceOutRight'>
                <h1>Experience</h1>
            </ScrollAnimation>
            <VerticalTimeline layout="1-column-right">
                {
                    timelineElements.map(e => {
                        let isSchoolIcon = e.icon === "school";
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element"
                                contentArrowStyle={{ borderLeft: isSchoolIcon ? '7px solid #E5767B' : '7px solid #83c5be'}}
                                contentStyle={{ background: isSchoolIcon ? '#E5767B' : '#83c5be'}}
                                date={e.date}
                                dateClassName="date"
                                iconStyle={isSchoolIcon ? schoolIconStyles : internshipIconStyles }
                                icon={isSchoolIcon ? <SchoolIcon/> : <WorkIcon/>}
                            >
                                <div id="experienceWrapper">
                                    <h3 className="vertical-timeline-element-title">{e.title}</h3>
                                    <h5 className="vertical-timeline-element-subtitle">{e.subtitle}</h5>
                                    <p id="description">{e.description}</p>
                                </div>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Experience;