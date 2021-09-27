import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './Parts/Footer/footer';
import Header from './Parts/Header/Header';
import {Route, Switch} from "react-router-dom";
import Menu from './Parts/Header/Header';
import ElectronicsProducts from './Parts/Header/ElectronicsProducts';
import Sports from './Parts/Header/Sports&Outdoor';
import Home from './Parts/Header/Home&Garden';


function App() {
  return (
    <>
    <Menu/>
    <Switch>
                <Route path="/" component={ElectronicsProducts} exact />
                <Route path="/Sports&Outdoor" component={Sports} />
                <Route path="/Home&Garden" component={Home} />
            </Switch>
    <Footer/>
    </>
  );
}

export default App;
