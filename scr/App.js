import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import chart from './pages/Dashbord';
import Reports from './pages/report';
import Assets from './pages/Assets';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={chart} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/Assets' exact component={Assets} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
