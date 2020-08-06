import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Homepage from './components/Homepage'
import Resume from './components/Resume'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component= {Homepage}/>
      <Route path="/resume" component= {Resume}/>
      <Route path="/projects" component= {Projects}/>
      <Route path="/contactme" component= {ContactMe}/>
    </div>
  );
}

export default App;
