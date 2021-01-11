import ip_poster from '../../assets/proj_imgs/ip.jpeg';
import fc_img from '../../assets/proj_imgs/foodieCritic.jpg';
import tp_poster from '../../assets/proj_imgs/tp_poster.png';
import socunite from '../../assets/proj_imgs/socunite_p.png';
import portfolio from '../../assets/proj_imgs/portfolio.png';
import customsnooze from '../../assets/proj_imgs/customsnooze.png';
import {FaExternalLinkSquareAlt, FaGithub} from 'react-icons/fa';
import { FaReadme } from 'react-icons/fa';
import React from "react";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

export const ProjectItems = [
    {
        title: 'SoCUnite',
        imageUrl: socunite,
        description: 'A cross-platform mobile application developed to provide a platform for NUS Computing students to interact and connect with one another to engage in peer-to-peer learning and gain insights on academics, internships, external programmes as well as partake in socialising activities.',
        url: {
            github: {
                link: "https://github.com/andreatanky/SoCUnite",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
                color: '#dd2d4a'
            },
            docs: {
                link: "https://docs.google.com/document/d/1jAgxYVlMcL5FW06Aokyvx-8HIjmObehRPW9WAnyuZ9c/edit?usp=sharing",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
                color: '#ffa69e'
            } ,
            //Have yet to add in demo link
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
                color: '#77A0B9'
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
        description: 'A personalised ChatBot to help me remember my tasks at hand in the form of a todo-list.',
        url: {
            github: {
                link: "https://github.com/andreatanky/ip",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
                color: '#dd2d4a'
            },
            docs: {
                link: "https://andreatanky.github.io/ip/",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
                color: '#ffa69e'
            } ,
            demo: {
                link: "https://github.com/andreatanky/ip/releases/download/v0.3/duke.jar",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
                color: '#77A0B9'
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
                link: "https://github.com/andreatanky/tp",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
                color: '#dd2d4a'
            },
            docs: {
                link: "https://ay2021s1-cs2103t-f11-3.github.io/tp/DeveloperGuide.html",
                icon: <FaReadme style={{paddingLeft: '0.3em'}}/>,
                color: '#ffa69e'
            } ,
            demo: {
                link: "https://github.com/AY2021S1-CS2103T-F11-3/tp/releases/download/v1.4/CS2103T-F11-3.ProductiveNUS.jar",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
                color: '#77A0B9'
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
        description: 'A full stack web application project that utilises RESTful architecture. It performs CRUD operations for users. Users are able to upload images, food reviews, comment on other reviews and give ratings.',
        url: {
            github: {
                link: "https://github.com/andreatanky/FoodieCritic",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
                color: '#dd2d4a'
            },
            demo: {
                link: "https://foodiecritic.herokuapp.com",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
                color: '#77A0B9'
            }
        },
        techStack: [
            "NodeJS",
            "Express",
            "ejs",
            "HTML",
            "CSS",
            "Bootstrap",
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
                link: "https://github.com/rt-terror/custom-snooze-alarm",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
                color: '#dd2d4a'
            },
            //Yet to add demo link
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
                color: '#77A0B9'
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
        description: 'This portfolio of mine is developed with React! ☻',
        url: {
            github: {
                link: "https://github.com/andreatanky/Portfolio",
                icon: <FaGithub style={{paddingLeft: '0.3em'}}/>,
                color: '#dd2d4a'
            },
            //Yet to add demo link
            demo: {
                link: "/",
                icon: <FaExternalLinkSquareAlt style={{paddingLeft: '0.3em'}}/>,
                color: '#77A0B9'
            }
        },
        techStack: [
            "ReactJS",
            "JSS"
        ]
    }
]