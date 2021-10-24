import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import SimpleMenuAC from './Accomodation';
import SimpleMenuTR from './Transportation';
import SimpleMenuTD from './TravelDesk';
import SimpleMenuD from './Download';
import SimpleMenuE from './Events';
import SimpleMenuMN from './MediaandNews';
import SimpleMenuCG from './CovidGuide';
import Home from '../../Assets/home.svg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid none solid none',
        borderColor: '#B1B1B1',
        '& > *': {

        },
    },
    buttongrp: {
        display: 'flex',
        flexGrow: 1,
        color: 'grey',
        width: 179,
        alignItems: 'center'
    },
    home: {
        marginTop: 7,
    },
}));

export default function BasicButtonGroup() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="text" aria-label="text primary button group">
                <Link to={process.env.PUBLIC_URL + '/home'}>
                    <Button className={classes.home}><img src={Home} alt="Home" /></Button>
                </Link>
                <Button className={classes.buttongrp}>About DOT</Button>
                <Button className={classes.buttongrp}><SimpleMenuAC /></Button>
                <Button className={classes.buttongrp}><SimpleMenuTR /></Button>
                <Button className={classes.buttongrp}><SimpleMenuTD /></Button>
                <Button className={classes.buttongrp}><SimpleMenuD /></Button>
                <Button className={classes.buttongrp}><SimpleMenuE /></Button>
                <Button className={classes.buttongrp}><SimpleMenuMN /></Button>
                <Button className={classes.buttongrp}><SimpleMenuCG /></Button>
                <Button className={classes.buttongrp}>Contact Us</Button>
            </ButtonGroup>
        </div >
    );
}