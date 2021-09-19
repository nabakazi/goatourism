import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons8() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">
      Latest News and Events
      <ArrowForwardIosRoundedIcon/>
       </Button>
    </div>
  );
}