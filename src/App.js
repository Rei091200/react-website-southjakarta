import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Redirect } from 'react-router-dom';


import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/pages/Profile';
import Hometown from './components/pages/Hometown';
import Food from './components/pages/Food';
import Tourist from './components/pages/Tourist';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/quiz1' exact component={Home} />
          <Redirect exact from='/' to='/quiz1' />
          <Route path='/quiz1/profile' component={Profile} /> 
          <Route path='/quiz1/hometown' component={Hometown} />
          <Route path='/quiz1/food' component={Food} /> 
          <Route path='/quiz1/tourist' component={Tourist} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;