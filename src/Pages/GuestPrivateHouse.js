import React from 'react';
import Container from '@material-ui/core/Container';
import Northgoabutton from '../Components/northgoabutton';
import Centralgoabutton from '../Components/centralgoabutton';
import Southgoabutton from '../Components/southgoabutton';
import Backbutton from '../Components/backbutton';
import guesthouseingoa from '../Assets/guesthouseingoa.jpg';

export default function GuestPrivate() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          Guest/Private Houses in Goa
        </p>
        <img src = {guesthouseingoa} className= "Guest house in goa" alt= "Guest/Private in Goa"/>
        <Northgoabutton/>
        <Centralgoabutton/>
        <Southgoabutton/>
        <Backbutton/>
      </Container>
    </React.Fragment>
  );
}