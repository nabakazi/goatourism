import React from 'react';
import Container from '@material-ui/core/Container';
import Northgoabutton from '../Components/northgoabutton';
import Centralgoabutton from '../Components/centralgoabutton';
import Southgoabutton from '../Components/southgoabutton';
import Backbutton from '../Components/backbutton';
import hostelsingoa from '../Assets/hostelsingoa.jpg'
export default function Hostels() {
  return (
    <React.Fragment>
      <Container fixed>
      <p>
          Hostels in Goa
      </p>
      <img src = {hostelsingoa} className= "Hostel in goa" alt= "Hostels in Goa"/>
        <Northgoabutton/>
        <Centralgoabutton/>
        <Southgoabutton/>
        <Backbutton/>
      </Container>
    </React.Fragment>
  );
}