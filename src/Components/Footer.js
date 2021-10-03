import React from 'react';
import TermsandConditions from './Terms&Conditions';
import Disclaimer from './Disclaimer';
import PrivacyPolicies from './PrivacyPolicies';
import HyperlinkingPolicies from './HyperlinkingPolicies';
import Help from './Help';
import Callus from './Callus';
import Email from './Email';
import Youtubeicon from './Youtubeicon';
import Twittericon from './Twittericon';
import Facebookicon from './Facebookicon';
import Instaicon from './Instaicon';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';



export default function AppFooter() {
  return (
    <div className="root">
        
      <footer className="App-footer">
        <div className="flexbox-container">
        <Paper elevation={0}>
              Policies
            </Paper>
            <TermsandConditions/>
            <Disclaimer/>
            <PrivacyPolicies/>
            <HyperlinkingPolicies/>
            <Help/>

            <Paper elevation={0}>
              Contact Us
            </Paper>
            <Paper elevation={0}>
              Goa Tourism Department
            </Paper>
            <Paper elevation={0}>
              Paryatan Bhavan, 2nd Floor, Patto
            </Paper>
            <Paper elevation={0}>
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
            <Youtubeicon/>
            </Grid>
            <Grid item xs={3}>
            <Twittericon/>
            </Grid>
            <Grid item xs={3}>
            <Facebookicon/>
            </Grid>
            <Grid item xs={3}>
            <Instaicon/>
            </Grid>
            </Grid>
            <Paper elevation={0}>
            Copyright ©️ 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </Paper>
         

        </div>
      </footer>

    </div>
  );
}