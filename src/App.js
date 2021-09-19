import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import PrimarySearchAppBar from './Components/AppBarSearch';
import Hotels from './Pages/Hotels';
import Hostels from './Pages/Hostels';
import Stay from './Pages/Stayingoa';
import GuestPrivate from './Pages/GuestPrivateHouse';
import AppFooter from './Components/Footer';
import Contactus from './Components/Contactus';
import SimpleAccordion from './Components/Languages';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      <Contactus/>
      <SimpleAccordion/>
      <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
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
