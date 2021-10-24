import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SystemUpdateAltRoundedIcon from '@material-ui/icons/SystemUpdateAltRounded';
import { Grid } from '@material-ui/core';
import download from '../Assets/downloadicon.svg'

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

export default function Northgoabutton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" className={classes.button}>
      <Grid container spacing={1}>
          <Grid item xl={12}>
        North Goa  
        </Grid>
      </Grid>
      <img src={download} alt="downlaod" width="10" height="100%" />
      </Button>
    </div>
  );
}