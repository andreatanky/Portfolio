import React, { Component } from 'react'
import CardItem from './cardItem';
import './projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="Cards" id="portfolio">
                <h1>Projects</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem/>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects;