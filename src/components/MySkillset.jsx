import React from 'react';
import {withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../assets/styles/style.css';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {FrontEnd, BackEnd, DevOps, Now} from './Index';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const StyledTabs = withStyles({
  indicator: {
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: 'rgba(0,0,0,1)',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
      fontWeight: 'bold'
    },
  },
}))((props) => <Tab disableRipple {...props} />);

export default function MySkillset() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className='p-frame'>
    <div className='skillset'>
      <div>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example" variant="scrollable" centered>
          <StyledTab label="フロントエンド" {...a11yProps(0)} />
          <StyledTab label="バックエンド" {...a11yProps(1)} />
          <StyledTab label="DevOps" {...a11yProps(2)} />
          <StyledTab label="今注力していること" {...a11yProps(3)} />
        </StyledTabs>
      </div>
      <div className='p-skill-panels'>
        <TabPanel value={value} index={0}>
            <FrontEnd />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <BackEnd />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <DevOps />
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Now />
        </TabPanel>
      </div>
    </div>
    </section>
  );
}