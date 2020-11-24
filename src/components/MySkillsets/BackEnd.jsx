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
      <CardContent>
        <Typography variant="h5" component="h2">
          Node
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          学習中
        </Typography>
        <Typography variant="body2" component="p">
          掌田津耶野『Node.js超入門』、Progate等で学んだ程度。
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}