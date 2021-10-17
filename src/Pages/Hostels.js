import React from 'react';
import Container from '@material-ui/core/Container';
import Northgoabutton from '../Components/northgoabutton';
import Centralgoabutton from '../Components/centralgoabutton';
import Southgoabutton from '../Components/southgoabutton';
import Backbutton from '../Components/backbutton';
import hostelsingoa from '../Assets/hostelsingoa.jpg'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  para: {
    flexGrow: 1,
    margin: 10,
  }, 
  heading: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
}));
export default function Hostels() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container fixed>
      <Paper elevation={0} className={classes.heading}>
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