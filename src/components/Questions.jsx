import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Questions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>大学卒業後は何をしていたの？</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              人生の指針として最高の哲学書を書こうと、哲学や数学基礎論をひたすら研究していました。かなり本気でした。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>なぜエンジニアになろうと思ったの？</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              自分の思想を作品として表現するのが好きで、更に何かを構成するように作品を作るのが好きだからです。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}