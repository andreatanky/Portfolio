import React from "react";
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
import heroku from '../../assets/skills_imgs/hero.png';
import netlify from '../../assets/skills_imgs/netlify.png'
import my_SQL from '../../assets/skills_imgs/my_SQL.png'
import tableau from '../../assets/skills_imgs/tableau.png'
import domo from '../../assets/skills_imgs/domo.png'
import swift from '../../assets/skills_imgs/swift.png'


export const SkillItems = [
    {
        title: "Languages",
        skills: {
            Python: python,
            Java: java,
            JavaScript: js,
            C: c,
            Dart: dart,
            Swift: swift
        }
    },
    {
        title: "Front-end",
        skills: {
            HTML5: html,
            CSS3: css,
            Bootstrap: bs,
            Flutter: flutter,
            React: react
        }
    },
    {
        title: "Back-end/     Databases",
        skills: {
            NodeJS: node,
            Express: express,
            MongoDB: mdb,
            Firebase: fb,
            MySQL: my_SQL
        }
    },
    {
        title: "VCS",
        skills: {
            Git: git
        }
    },
    {
        title: "Data Analytics",
        skills: {
            Tableau: tableau,
            Domo: domo
        }
    },
    {
        title: "Hosting Platforms",
        skills: {
            Heroku: heroku,
            Netlify: netlify
        }
    }
]