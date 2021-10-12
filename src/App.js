import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NotFound from './components/pages/NotFound';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import User from './components/Users/User';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { useState } from 'react';
import Counter from './components/Counter';
import CounterContextProvider from './context/CounterContext';
import Component1 from './components/Component1';

function App() {
  // const [name, setName] = useState("hello")

  return (
    <>
    <CounterContextProvider>
    <h3><Counter/></h3>
    <Component1/>
    </CounterContextProvider>
    {/* <ComponentA name = {name}/>
    <ComponentB name = {name}/> */}
      {/* <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/users/add" component={AddUser} />
            <Route exact path="/users/edit/:id" component={EditUser} />
            <Route exact path="/users/:id" component={User} />
            <Route component={NotFound} />
          </Switch>


        </div>
      </Router> */}
    </>
  );
}

export default App;
