import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link, Router} from "react-router-dom";
import { Grid } from '@material-ui/core';
import arrow from '../Assets/Path 119.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    borderRadius: 15,
    width: 300,
  }, 
}));

export default function OutlinedButtons2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Link to={process.env.PUBLIC_URL + '/guestprivatehouses'}>
      <Button variant="outlined" color="primary" href="" className={classes.button}>
      <Grid container spacing={1}>
          <Grid item xl={12}>
      Guest/Private Houses in Goa
      </Grid>
      </Grid>
      <img src={arrow} alt="Arrow" width="10" height="100%" />
      </Button>
      </Link>  
    </div>
  );
}