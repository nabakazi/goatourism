import React from 'react';
import Container from '@material-ui/core/Container';
import OutlinedButtons from '../Components/textbutton';
import OutlinedButtons1 from '../Components/textbutton1';
import OutlinedButtons2 from '../Components/textbuttons2';
import stayingoa from '../Assets/stayingoa.jpg';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
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
export default function Stay() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={0} className={classes.heading}>
          Stay in Goa
        </Paper>
        <img src={stayingoa} className="Stay in Goa" alt="Stay in Goa" width="70%" height="70%"/>
        <Paper elevation={0} className={classes.para}> 
          Accommodation in Goa is plentiful with a variety of hotels, resorts and guest houses to suit every budget and every taste. There are simple and bare rooms available for the thriftiest of back-packers and five-star deluxe luxury suites for those that want to indulge their fancies.
          Almost all round the year, travellers are usually assured of finding a room – if not in a hotel, then at least in a private house. However, come the peak season of December and January, you are likely to experience problems, unless you book your rooms well in advance.
          Just around Christmas until the dawn of the new year, Goa is in festive mood and plays host to hundreds and thousands of visitors from all over India and around the world. So accommodation is at a premium everywhere.
        </Paper>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <OutlinedButtons />
        </Grid>
        <Grid item xs={12}>
        <OutlinedButtons1 />
        </Grid>
        <Grid item xs={12}>
        <OutlinedButtons2 />
        </Grid>
        </Grid>
        
      </Container>
    </React.Fragment>
  );
}