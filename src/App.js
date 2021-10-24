import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import PrimarySearchAppBar from './Components/AppBarSearch';
import Hotels from './Pages/Hotels';
import Hostels from './Pages/Hostels';
import Stay from './Pages/Stayingoa';
import GuestPrivate from './Pages/GuestPrivateHouse';
import AppFooter from './Components/Footer';
import Contactus from './Components/Contactus';
import SimpleMenu01 from './Components/Languages';
import { Grid } from '@material-ui/core';
import Header from './Components/Goahomepage/Header';
import BasicButtonGroup from './Components/Goahomepage/Desktopmenu';
import Hidden from '@material-ui/core/Hidden';



function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <Grid container spacing={1}>
        <Grid item xl={11} xs={9}>
      <Contactus/>
      </Grid>
      <Grid item xl={1} xs={3}>
      <SimpleMenu01/>
      </Grid>
      </Grid>
      
      </header>
      <Hidden smUp> <Grid item xs={12}>
      <PrimarySearchAppBar/>
      </Grid> </Hidden>
      <Hidden mdDown> <Grid item lg={12}>
      <Header/>
      </Grid> </Hidden>
      <Hidden mdDown> <Grid item lg={12}>
      <BasicButtonGroup/>
      </Grid> </Hidden>
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/stayingoa'} > <Stay/> </Route>
            <Route path={process.env.PUBLIC_URL + '/hotels'} > <Hotels/> </Route>
            <Route path={process.env.PUBLIC_URL + '/hostels'} > <Hostels/> </Route>
            <Route path={process.env.PUBLIC_URL + '/guestprivatehouses'} > <GuestPrivate/> </Route>
          </Switch>
          <AppFooter/>

    </div>
  );
  }

export default App;
