import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import {Link, Router} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
  
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
 
      <Link to={process.env.PUBLIC_URL + '/hotels'}>
      <Button variant="outlined" color="primary" href="">
      Hotels in Goa
      <ArrowForwardIosRoundedIcon/>
      </Button>
      </Link>
    </div>
  );
}

