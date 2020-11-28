import React, {useCallback, useState} from 'react';
import {withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './assets/styles/style.css';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import {MySkillset, FormDialog, GoldfishFront, Atrier, Questions} from './components/Index';


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

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true)
},[setOpen]);
  const handleClose = useCallback(() => {
  setOpen(false)
},[setOpen]);


  return (
    <section className='p-section'>
      <div className='header-logo'>
          <h2>H.H.の作品展</h2>
      </div>
      <div className='p-tabs-frame'>
        <div className='p-tabs'>
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example" variant="scrollable">
            <StyledTab label="ようこそ" {...a11yProps(0)} />
            <StyledTab label="このサイトについて" {...a11yProps(1)} />
            <StyledTab label="自己紹介" {...a11yProps(2)} />
            <StyledTab label="使える技術" {...a11yProps(3)} />
            <StyledTab label="作品集" {...a11yProps(4)} />
            <StyledTab label="お問い合わせ" {...a11yProps(5)} />
          </StyledTabs>
        </div>

      <TabPanel value={value} index={0}>
        <div className='p-panels'>          
          <div className='p-frame'>
            <p>モットー</p>
            <h2>「敢えて賢明であれ」</h2>
            <p>(イマヌエル・カント『啓蒙とは何か？』)</p>
          </div>
        </div>          
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='p-panels'>
          <div className='p-frame'>
          <p>こんにちは!</p>
            <p>このサイトはエンジニア志望の私、H.H.が自己紹介のために作ったサイトです。</p>
            <p>作品や使えるスキルをまとめています。</p>
            <p>修行中の身ですが、まずはぜひ一度、ご覧になっていってください。</p>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='p-panels'>
          <div className='p-frame'>
            <p>1995年生まれ、東京都出身。</p>
            <p>エンジニア志望で、作品製作が大好きです。</p>
            <p>ライフワークは哲学で、そちらの作品もいずれご紹介できればと思っています。</p>
            <p>尊敬する人物はイマヌエル・カント。好きな漫画は模造クリスタル『金魚王国の崩壊』。</p>
            <div className='questions'>
              <p>疑問にお答えします！</p>
              <Questions />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className='p-panels'>
          <MySkillset />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className='p-panels'>
          <GoldfishFront />
          <Atrier />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className='p-panels'>
          <Button onClick={handleOpen} variant="outlined">
            <EmailOutlinedIcon />Email
          </Button>
          <Button　onClick={()=> window.open("https://github.com/hookhull", "_blank")} variant="outlined">
            <GitHubIcon />GitHub
          </Button>
          </div>
        <FormDialog open={open} handleClose={handleClose} />
      </TabPanel>
      </div>
    </section>
  );
}
