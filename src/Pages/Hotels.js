import React from 'react';
import Container from '@material-ui/core/Container';
import Northgoabutton from '../Components/northgoabutton';
import Centralgoabutton from '../Components/centralgoabutton';
import Southgoabutton from '../Components/southgoabutton';
import Backbutton from '../Components/backbutton';
import hotel from '../Assets/hotel.jpg'

export default function Hotels() {
  return (
    <React.Fragment>
      <Container fixed>
      <p>
          Hotels in Goa
      </p>
      <img src = {hotel} className= "Hotel" alt= "Hotel in Goa"/>
      <Northgoabutton/>
      <Centralgoabutton/>
      <Southgoabutton/>
      <Backbutton/>
      </Container>
    </React.Fragment>
  );
}