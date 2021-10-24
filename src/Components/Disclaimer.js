import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      postion: 'relative',
      color: 'black',
      textTransform: 'capitalize',
    },
  },
}));

export default function Disclaimer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Disclaimer</Button>
    </div>
  );
}