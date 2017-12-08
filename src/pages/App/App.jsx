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



class App extends Component {
  render() {
    return (
      <div className="App">
      <CataloguePage /> 
      <CheckoutPage /> 
      <ConfirmationPage /> 
      <WelcomePage /> 
      </div>
    );
  }
}

export default App;
