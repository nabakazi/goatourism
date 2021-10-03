import React from 'react';
import Container from '@material-ui/core/Container';
import Northgoabutton from '../Components/northgoabutton';
import Centralgoabutton from '../Components/centralgoabutton';
import Southgoabutton from '../Components/southgoabutton';
import Backbutton from '../Components/backbutton';
import hostelsingoa from '../Assets/hostelsingoa.jpg'
import Paper from '@material-ui/core/Paper';
export default function Hostels() {
  return (
    <React.Fragment>
      <Container fixed>
      <Paper elevation={0}>
        Hotels in Goa
      </Paper>
      <img src = {hostelsingoa} className= "Hostel in goa" alt= "Hostels in Goa" width="70%" height="70%"/>
        <Northgoabutton/>
        <Centralgoabutton/>
        <Southgoabutton/>
        <Backbutton/>
      </Container>
    </React.Fragment>
  );
}