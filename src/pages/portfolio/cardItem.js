import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function CardItem() {

    const useStyles = makeStyles({
        root: {
          maxWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 18,
        },
        pos: {
          marginBottom: 12,
        },
      });

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
        <li className="cards-item">
            <Link className="cards__item__link">
                <figure className="cards__item__pic-wrap">
                    <img src="/" alt="Travel Image" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text"></h5>
                </div>
            </Link>
        </li>
        </>
    );
}

export default CardItem;