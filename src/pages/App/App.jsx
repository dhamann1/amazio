import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'; 
import logo from '../../logo.svg';
import './App.css';
import CataloguePage from '../CataloguePage/CataloguePage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import Navbar from '../../components/Navbar/Navbar';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar /> 
      <Router>
      <Switch> 

        <Route exact path='/catalogue' render={() => 
          <CataloguePage />
          }/> 
        <Route exact path='/checkout' render={() => 
          <CheckoutPage />
          }/>
        <Route exact path='/confirmation' render={() => 
          <ConfirmationPage />
          }/>
        <Route exact path='/' render={() => 
        <WelcomePage /> 
        }/>
      </Switch> 
      </Router>
      </div>
    );
  }
}

export default App;
