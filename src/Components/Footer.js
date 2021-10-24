import React from 'react';
import TermsandConditions from './Terms&Conditions';
import Disclaimer from './Disclaimer';
import PrivacyPolicies from './PrivacyPolicies';
import HyperlinkingPolicies from './HyperlinkingPolicies';
import Help from './Help';
import Callus from './Callus';
import Email from './Email';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import youtube from './../Assets/youtube.svg';
import twitter from './../Assets/twitter.svg';
import facebook from './../Assets/facebook.svg';
import insta from './../Assets/insta.svg'
import Images from './Goahomepage/Images';

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: '#999999',
    fontSize: 20,
  },
  para: {
    backgroundColor: '#999999',
  },
  Icon: {
    margin: 10,
  }
}));


export default function AppFooter() {
  const classes = useStyles();
  return (
    <div className="root">
        
      <footer className="App-footer">
        <div className="flexbox-container">
        <Paper elevation={0}className={classes.header}>
              Policies
            </Paper>
            <TermsandConditions/>
            <Disclaimer/>
            <PrivacyPolicies/>
            <HyperlinkingPolicies/>
            <Help/>

            <Paper elevation={0}className={classes.header}>
              Contact Us
            </Paper>
            <Paper elevation={0}className={classes.para}>
              Goa Tourism Department
            </Paper>
            <Paper elevation={0}className={classes.para}>
              Paryatan Bhavan, 2nd Floor, Patto
            </Paper>
            <Paper elevation={0}className={classes.para}>
              Panaji-Goa, India 403001
            </Paper>
            <p>
            <Callus/>
            </p>
            <p>
            <Email/>
            </p>
            <Grid container spacing={1}>
            <Grid item xs={3}>
            <img src={youtube}  alt="youtube"className={classes.Icon}/>
            </Grid>
            <Grid item xs={3}>
            <img src={twitter}  alt="twitter"className={classes.Icon}/>
            </Grid>
            <Grid item xs={3}>
            <img src={facebook}  alt="facebook"className={classes.Icon}/>
            </Grid>
            <Grid item xs={3}>
            <img src={insta}  alt="insta"className={classes.Icon}/>
            </Grid>
            <Grid item xl={12} xs={12}>
              <Images/>
            </Grid>
            </Grid>
            <Paper elevation={0}className={classes.para}>
            Copyright ©️ 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </Paper>
         

        </div>
      </footer>

    </div>
  );
}