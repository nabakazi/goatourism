import React from 'react';
import Container from '@material-ui/core/Container'
import SwipeableTextMobileStepper from '../Components/Goahomepage/Stepper';
import TextMobileStepper from '../Components/Goahomepage/Stepper2';
import OutlinedButtons6 from '../Components/Goahomepage/Button6';
import OutlinedButtons7 from '../Components/Goahomepage/Button7';
import OutlinedButtons8 from '../Components/Goahomepage/Button8';
import GoaLogo from '../Assets/GoaLogo.jpeg'
import Department from '../Assets/Department.jpeg'
import Video from '../Assets/Video.jpeg'
import Paper from '@material-ui/core/Paper';


export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
        <img src = {GoaLogo} className= "Government of Goa" alt= "Government of Goa"/>
        <Paper elevation={0}>
            Department of Tourism Goa
        </Paper>
        <Paper elevation={0}>
            Government of Goa
        </Paper>
          <SwipeableTextMobileStepper/>
          <Paper elevation={0}>
            Welcome to Goa Tourism Department
          </Paper>
            <img src = {Department} className= "Department of Goa" alt= "Department of Goa" width="70%" height="70%"/>

            <Paper elevation={0}>
          The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism. The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao.
          The Current Director of Tourism is Shri Menino D’souza.
          The Public Grievances Officer is Dy. Director (Administration).
          The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982.
          </Paper>
          <Paper elevation={0}>
            Travel Essentials
            </Paper>
          <TextMobileStepper/>
          <OutlinedButtons6/>
          <OutlinedButtons7/>
          <OutlinedButtons8/>
          <Paper elevation={0}>
            A Glimpse into the Beauty of Goa
            </Paper>
            <img src = {Video} className= "Beauty of Goa" alt= "Beauty of Goa"width="70%" height="70%"/>

        </Container>
    </React.Fragment>
  );
}