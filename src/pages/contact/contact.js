import React, { Component } from 'react';
import './contact.css';
import Triangle from "./triangle";
import {Container} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';

class Contact extends Component {
    render() {
        return (
            <div id="wrapperContact">
                <Triangle/>
                <div id="contact">
                    <h1>Contact</h1>
                    <p id="tag">
                        Have a question for me?
                    </p>
                    <Container className="containerContact">
                        <div id="email">
                            <EmailIcon id="emailIcon" style={{backgroundColor: "#ff0054", padding: "15px"}}/>
                            <p>Email me at andreaxtan611@gmail.com</p>
                        </div>
                        <div id="telegram">
                            <TelegramIcon id="telegramIcon" style={{backgroundColor: "#ff0054", padding: "15px"}}/>
                            <p>Send me a message on telegram at @andreatanky</p>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

// <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1"
//      xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
//     <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
// </svg>

export default Contact;