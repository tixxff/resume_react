import React, { Component } from 'react';
import './App.css';
import MenuBar from './Layout/MenuBar';
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import Containers from './containers/containers';
import {BrowserRouter, Route } from "react-router-dom";
import Skill from './components/skill/Skill';
import Education from './components/education/Education';
import Activity from './components/activity/Activity';

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class App extends Component{
  render(){
    return (
      <div>
        <BrowserRouter>
        <MenuBar></MenuBar>
        <Containers>
          <Header></Header>
          <Route exact path="/" component={Content} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/activity" component={Activity} />
          <Content></Content>
          <Footer></Footer>
        </Containers>
        </BrowserRouter>
      </div>
    )
  }
}

export default App; 
