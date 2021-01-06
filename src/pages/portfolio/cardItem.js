import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import unavailable from '../../assets/proj_imgs/image-not-available.png';
import { ProjectItems } from './projectItems';
import './projects.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 320,
    },
});

function CardItem() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
       ProjectItems.map((item, index) => {
           return <Card className={classes.root} style={{backgroundColor: "#ffff"}} variant="outlined">
               <CardActionArea>
                   <CardMedia
                       className={classes.media}
                       image= {item.imageUrl}
                       title= {item.title}
                   />
                   <CardContent>
                       <Typography style={{color: "#ff006e", fontFamily:'Poppins', fontWeight: 'bold'}} className="title" gutterBottom variant="h5" component="h2">
                           {item.title}
                       </Typography>
                       <Typography style={{color: "black", fontFamily:'Poppins'}} variant="body2" color="textSecondary" component="p">
                           {item.description}
                       </Typography>
                   </CardContent>
               </CardActionArea>
               <CardActions>
                   <Button size="small" color="primary">
                       Github
                   </Button>
                   <Button size="small" color="primary">
                       Documentation
                   </Button>
               </CardActions>
           </Card>
       })
    );
}

export default CardItem;