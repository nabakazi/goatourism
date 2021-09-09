import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Buttons';
import BasicButtonGroup from '../Components/ButtonGroup';
import SimpleCard from '../Components/HomeMultiCard';
import Checkboxes from '../Components/CheckBoxes';
import FloatingActionButtons from '../Components/FloatingActionButtons';
import MaterialUIPickers from '../Components/DatePicker1';
import SimpleBottomNavigation from '../Components/BottomNavigation';
import RadioButtonsGroup from '../Components/RadioGroup';
import ControlledAccordions from '../Components/ControlledAccordian';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            <ContainedButtons/>
            <BasicButtonGroup/>
            <SimpleCard/>
            <Checkboxes/>
            <FloatingActionButtons/>
            <MaterialUIPickers/>
            <SimpleBottomNavigation/>
            <RadioButtonsGroup/>
            <ControlledAccordions/>
        </Container>
    </React.Fragment>
  );
}