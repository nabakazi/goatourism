import React from 'react';
import Container from '@material-ui/core/Container';
import Northgoabutton from '../Components/northgoabutton';
import Centralgoabutton from '../Components/centralgoabutton';
import Southgoabutton from '../Components/southgoabutton';
import Backbutton from '../Components/backbutton';
import hotel from '../Assets/hotel.jpg'
import Paper from '@material-ui/core/Paper';

export default function Hotels() {
  return (
    <React.Fragment>
      <Container fixed>
      <Paper elevation={0}>
        Hotels in Goa
      </Paper>
      <img src = {hotel} className= "Hotel" alt= "Hotel in Goa"width="70%"height="70%"/>
      <Northgoabutton/>
      <Centralgoabutton/>
      <Southgoabutton/>
      <Backbutton/>
      </Container>
    </React.Fragment>
  );
}