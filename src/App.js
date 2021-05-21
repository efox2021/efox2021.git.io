import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component }  from 'react';
import Particles from 'react-particles-js';
import Button from 'react-bootstrap/Button';

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import particlesConfig from './config/configParticles';
import MipsMicroprocessor from "./components/MipsMicroprocessor";
import ReactGoGame from "./components/ReactGoGame";
import SeniorDesign from "./components/SeniorDesign";
import RestaurantSuggestion from "./components/RestaurantSuggestion";








function App() {
  return(
    <BrowserRouter>
    <NavBar />
    <div style={{
    backgroundColor: '#a0d2eb',
    width: 'full',
    height: 'full'
  }}>
    <Particles height="100vh" width="100vw" params={particlesConfig} />
      <div
        // style={{
        //   position: "absolute",
        //   top: 600,
        //   left: 600,
        //   width: "100%",
        //   height: "100%"
        // }}
      >

        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' />
          <Route component={Projects} path='/projects' />
          <Route component={Contact} path='/contact' />
          <Route component={SeniorDesign} path='/seniorDesign'/>
          <Route component={ReactGoGame} path='/reactGoGame'/>
          <Route component={MipsMicroprocessor} path='/mipsMicroprocessor'/>
          <Route component={RestaurantSuggestion} path='/restaurantSuggestion'/>
        </Switch>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        </div>
        <Footer />



    </BrowserRouter>
  )
}

export default App;
