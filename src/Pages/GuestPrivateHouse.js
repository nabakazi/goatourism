import React from 'react';
import Container from '@material-ui/core/Container';
import Northgoabutton from '../Components/northgoabutton';
import Centralgoabutton from '../Components/centralgoabutton';
import Southgoabutton from '../Components/southgoabutton';
import Backbutton from '../Components/backbutton';
import guesthouseingoa from '../Assets/guesthouseingoa.jpg';
import Paper from '@material-ui/core/Paper';

export default function GuestPrivate() {
  return (
    <React.Fragment>
      <Container fixed>
      <Paper elevation={0}>
          Guest/Private Houses in Goa 
      </Paper>
        <img src = {guesthouseingoa} className= "Guest house in goa" alt= "Guest/Private in Goa" width="70%" height="70%"/>
        <Northgoabutton/>
        <Centralgoabutton/>
        <Southgoabutton/>
        <Backbutton/>
      </Container>
    </React.Fragment>
  );
}