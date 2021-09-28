import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './Parts/Footer/footer';
import Header from './Parts/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'; 
import Menu from './Parts/Header/Header';
import ElectronicsProducts from './Parts/Header/menu/ElectronicsProducts';
import Sports from './Parts/Header/menu/Sports&Outdoor';
import Home from './Parts/Header/menu/Home&Garden';
import Main from './Parts/Main/Main';


function App() {
  return (
    <>
      
      <Router>
      <Header />
        <Switch>
        <Route exact path="/" component={Main} />
          <Route  path="/ElectronicsProducts" component={ElectronicsProducts} />
          <Route  path="/Home&Garden" exact component={Home} />
          <Route path="/Sports&Outdoors" component={Sports} />
        </Switch>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
