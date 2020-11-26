import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '200px',
    minHeight: '200px',
    margin: '5px',
  },
  squares: {
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
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className='p-card-frame'>
    <Card className={classes.root}>
      <CardContent className={classes.squares}>
        <Typography variant="h5" component="h2">
          Git&Github
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          初心者
        </Typography>
        <Typography variant="body2" component="p">
          Progate等で学んだ程度。
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.root}>
      <CardContent className={classes.squares}>
        <Typography variant="h5" component="h2">
          Firebase
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          初心者
        </Typography>
        <Typography variant="body2" component="p">
          掌田津耶野『React.js＆Next.js超入門』、トラハック『日本一わかりやすいReact-Redux入門』で学んだ程度。
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.root}>
      <CardContent className={classes.squares}>
        <Typography variant="h5" component="h2">
          AWS
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          学習中
        </Typography>
        <Typography variant="body2" component="p">
          大澤文孝他『Amazon Web Services 基礎からのネットワーク＆サーバ構築』で学んだ程度。
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}