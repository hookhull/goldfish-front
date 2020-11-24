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
import comingSoon from '../../assets/images/comingSoon.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Atrier() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        //   className={classes.media}
            component="img"
            alt='comingSoon'
            image={comingSoon}
            title="comingSoon"
        />
        <CardContent>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>作品投稿サイト(仮)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>製作中のWebアプリケーション。主な使用技術はReact,Redux,Next,Node。</p>
            <p>ログイン後に画面が再描画されない等、多くの初歩的な問題にぶつかっていますが、頑張って製作を進めています。</p>
            <p>私の理想が詰まったWebアプリで、既存のアプリがクリエイターと消費者、作品とコメントといった非対称の関係で成り立っているのに対し、作品や製作者同士の相互批判という対等な関係で成り立つものを目指しています。</p>
            <p>一定のニーズを得られるアプリに出来たら幸いです。</p>
          </Typography>
        </AccordionDetails>
        </Accordion>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          見てみる
        </Button>
      </CardActions> */}
    </Card>
  );
}