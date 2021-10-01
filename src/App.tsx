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
import TopProductCard from './components/TopPrductcard/TopProductCard';


function App() {
  return (
    <>
      
      <Router>
      <Header />
        {/* <Switch> */}
        <Route exact path="/" component={Main} />
          <Route  path="/ElectronicsProducts" component={ElectronicsProducts} />
          <Route  path="/Home&Garden" exact component={Home} />
          <Route path="/Sports&Outdoors" component={Sports} />
          <Route path="/ElectronicsProducts/laptop" component = {TopProductCard}/>
          {/* <Route path="/ElectronicsProducts/tablet" component = {}/>
          <Route path="/ElectronicsProducts/mouse" component = {}/>
          <Route path="/ElectronicsProducts/moniter" component = {}/>
          <Route path="/ElectronicsProducts/curvymoniter" component = {}/>
          <Route path="/ElectronicsProducts/ram" component = {}/>
          <Route path="/ElectronicsProducts/gamingpc" component = {}/>
          <Route path="/ElectronicsProducts/harddrive" component = {}/>
          <Route path="/ElectronicsProducts/clackykeybord" component = {}/>
          <Route path="/ElectronicsProducts/ethernetcable" component = {}/>
          <Route path="/ElectronicsProducts/usbcable" component = {}/>
          <Route path="/ElectronicsProducts/instantcamera" component = {}/>
          <Route path="/ElectronicsProducts/cameralens" component = {}/>
          <Route path="/ElectronicsProducts/foldingcamera" component = {}/>
          <Route path="/ElectronicsProducts/tripod" component = {}/>
          <Route path="/ElectronicsProducts/instamaticcamera" component = {}/>
          <Route path="/ElectronicsProducts/digitalcamera" component = {}/>
          <Route path="/ElectronicsProducts/slr" component = {}/>
          <Route path="/ElectronicsProducts/compactslr" component = {}/>
          <Route path="/ElectronicsProducts/twinlenscamera" component = {}/> */}

          {/* <Route path = "/> */}
        {/* </Switch> */}
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
