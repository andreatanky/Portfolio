import ip_poster from '../../assets/proj_imgs/ip.jpeg';
import fc_img from '../../assets/proj_imgs/foodieCritic.jpg';
import socu_poster from '../../assets/proj_imgs/socu_poster.png';
import tp_poster from '../../assets/proj_imgs/tp_poster.png';
import socunite from '../../assets/proj_imgs/socunite_p.png';
import portfolio from '../../assets/proj_imgs/portfolio.png';
import customsnooze from '../../assets/proj_imgs/customsnooze.png';

export const ProjectItems = [
    {
        title: 'SoCUnite',
        imageUrl: socunite,
        description: 'A cross-platform mobile application developed to provide a platform for NUS Computing students to interact and connect with one another to engage in peer-to-peer learning and gain insights on academics, internships, external programmes as well as partake in socialising activities.',
        url: {
            github: "/",
            documentation: "/",
            demo: "/"
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
            github: "/",
            documentation: "/",
            demo: "/"
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
            github: "/",
            documentation: "/",
            demo: "/"
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
            github: "/",
            documentation: "/",
            demo: "/"
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
            github: "/",
            documentation: "/",
            demo: "/"
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
            github: "/",
            documentation: "/",
            demo: "/"
        },
        techStack: [
            "ReactJS",
            "Material-UI",
        ]
    }
]