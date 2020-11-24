import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Goldfish from '../../assets/images/Goldfish.jpg';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function GoldfishFront() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          // className={classes.media}
          component="img"
          alt="Goldfish"
          image={Goldfish}
          title="Goldfish"
        />
        <CardContent>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>このサイト</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>このサイト。主な使用技術はReact,Firebase。</p>
            <p>Material-uiのカスタマイズと、お問い合わせフォームの作成によって成り立っています。</p>
            <p>デプロイはFirebaseで行っています。</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> window.open("", "_blank")} size="small" color="primary">
          見てみる(別タブで開きます)
        </Button>
      </CardActions>
    </Card>
  );
}