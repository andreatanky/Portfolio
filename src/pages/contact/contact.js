import React, { Component } from 'react';
import './contact.css';
import Triangle from "./triangle";
import {Container} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
    render() {
        return (
            <div id="wrapperContact">
                <Triangle/>
                <div id="contact">
                    <ScrollAnimation animateIn='fadeIn'>
                    <h1>Contact</h1>
                    <p id="tag">
                        Thank you for viewing my portfolio!
                    </p>
                    <Container className="containerContact">
                        <div id="email">
                            <EmailIcon id="emailIcon" style={{backgroundColor: "#ff0054", padding: "15px"}}/>
                            <p>Email me at <span>andreaxtan611@gmail.com</span></p>
                        </div>
                        <div id="telegram">
                            <TelegramIcon id="telegramIcon" style={{backgroundColor: "#ff0054", padding: "15px"}}/>
                            <p>Send me a message on telegram at <span>@andreatanky</span></p>
                        </div>
                    </Container>
                    </ScrollAnimation>
                </div>
            </div>
        )
    }
}

export default Contact;