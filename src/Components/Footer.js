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


export default function AppFooter() {
  return (
    <div className="root">
        
      <footer className="App-footer">
        <div className="flexbox-container">
        <p>
              Policies
            </p>
            <TermsandConditions/>
            <Disclaimer/>
            <PrivacyPolicies/>
            <HyperlinkingPolicies/>
            <Help/>
            <p>
              Contact Us
            </p>
            <p>
              Goa Tourism Department
            </p>
            <p>
              Paryatan Bhavan, 2nd Floor, Patto
            </p>
            <p>
              Panaji-Goa, India 403001
            </p>
            <p>
            <Callus/>
            </p>
            <p>
            <Email/>
            </p>
            <Youtubeicon/>
            <Twittericon/>
            <Facebookicon/>
            <Instaicon/>
            <p>
            Copyright ©️ 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </p>
         

        </div>
      </footer>

    </div>
  );
}