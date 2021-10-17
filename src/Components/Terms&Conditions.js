import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      postion: 'relative',
      color: 'black'
    },
  },
}));

export default function TermsandConditions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Terms and Conditions</Button>
    </div>
  );
}