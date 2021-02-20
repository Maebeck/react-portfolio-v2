import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AboutMe from '../src/pages/AboutMe';
import ContactMe from '../src/pages/ContactMe';
import ProjectPage from '../src/pages/ProjectPage';
import Footer from '../src/components/Footer';
// import Home from '../src/pagse/Home';
import Navbar from '../src/components/Navbar';


function App() {
  return (
    <>
  <Router>
    <div>
      <Navbar />
      <Switch>
        {/* <Route exact path='/' component = {Home}/> */}
        <Route exact path ='/About' component = {AboutMe}/>
        <Route exact path ='/Portfolio' component = {ProjectPage}/>
        <Route exact path ='/Contact' component = {ContactMe}/>
      </Switch>
      <Footer />
    </div>
  </Router>
  </>
  )
};

export default App;
