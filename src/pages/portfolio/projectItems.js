import ip_poster from '../../assets/proj_imgs/ip.jpeg';
import fc_img from '../../assets/proj_imgs/foodieCritic.jpg';
import tp_poster from '../../assets/proj_imgs/tp_poster.png';
import socunite from '../../assets/proj_imgs/socunite_p.png';
import portfolio from '../../assets/proj_imgs/portfolio.png';
import customsnooze from '../../assets/proj_imgs/customsnooze.png';
import {FaExternalLinkSquareAlt, FaGithub} from 'react-icons/fa';
import { FaReadme } from 'react-icons/fa';
import React from "react";

export const ProjectItems = [
    {
        title: 'SoCUnite',
        imageUrl: socunite,
        description: 'A cross-platform mobile application developed to provide a platform for NUS Computing students to interact and connect with one another to engage in peer-to-peer learning and gain insights on academics, internships, external programmes as well as partake in socialising activities.',
        url: {
            github: {
                link: "/",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
            },
            documentation: {
                link: "/",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
            } ,
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
            }
        },
        techStack: [
            "Flutter",
            "Dart",
            "Firebase"
        ]
    },
    {
        title: 'DukeBot',
        imageUrl: ip_poster,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when ',
        url: {
            github: {
                link: "/",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
            },
            documentation: {
                link: "/",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
            } ,
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
            }
        },
        techStack: [
            "JavaFX",
            "Gradle",
            "GitHub pages"
        ]
    },
    {
        title: 'ProductiveNUS',
        imageUrl: tp_poster,
        description: 'A JavaFX desktop application developed to help students manage and schedule their academic tasks for a fuss-free academic timetable.',
        url: {
            github: {
                link: "/",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
            },
            documentation: {
                link: "/",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
            } ,
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
            }
        },
        techStack: [
            "JavaFX",
            "Gradle",
            "GitHub pages",
        ]
    },
    {
        title: 'FoodieCritic',
        imageUrl: fc_img,
        description: 'FoodieCritic is a full stack web application project that is built on MongoDB/Express/Node while utilising RESTful architecture. It performs CRUD operations for users. Users are able to upload images, food reviews, comment on other reviews and give ratings.',
        url: {
            github: {
                link: "/",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
            },
            documentation: {
                link: "/",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
            } ,
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
            }
        },
        techStack: [
            "NodeJS",
            "Express",
            "ejs",
            "HTML",
            "CSS",
            "Bootstrap",
            "ejs",
            "MongoDB",
            "passport",
        ]
    },
    {
        title: 'CustomSnooze',
        imageUrl: customsnooze,
        description: 'An iOS and Android application that allows users to set alarms with customisable snooze intervals, built over a course of 24 hours during Hack&Roll 2021.',
        url: {
            github: {
                link: "/",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
            },
            documentation: {
                link: "/",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
            } ,
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
            }
        },
        techStack: [
            "Flutter",
            "Dart"
        ]
    },
    {
        imageUrl: portfolio,
        title: 'Personal Portfolio',
        description: 'This portfolio is developed with React',
        url: {
            github: {
                link: "/",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
            },
            documentation: {
                link: "/",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
            } ,
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
            }
        },
        techStack: [
            "ReactJS",
            "Material-UI",
            "JSS"
        ]
    }
]