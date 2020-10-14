import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import Nav from './Nav';
import {Route, Switch} from "react-router-dom";

function App() {

  const Name=()=>{
    return(
      <h1>
        Name Page
      </h1>
    );
  }


  return (
    <div className="App">
      <Nav/>

      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact/name" component={Name} />
        <Route component={Error}/>
      </Switch>
      {/* <About/>
      <Contact/> */}
    
    </div>
  );
}

export default App;
