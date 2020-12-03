import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Home from './Home';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Services from './Services';

const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Services" component={Services}/>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;