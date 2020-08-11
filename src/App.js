import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Home from './Home';
import {Switch,Route, Redirect} from 'react-router-dom';
import Navb from './Navb';
import Footer from './Footer';
const App=()=>{
  return(
    <>
    <Navb/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/"></Redirect>
    </Switch>
    <Footer/>
    </>
  )
}

export default App;