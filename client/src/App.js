import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AboutMe from '../src/pages/AboutMe';
import ContactMe from '../src/pages/ContactMe';
import ProjectPage from '../src/pages/ProjectPage';
// import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';


function App() {
  return (
    <>
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path ='/' component = {AboutMe}/>
        <Route  path ='/About' component = {AboutMe}/>
        <Route  path ='/Portfolio' component = {ProjectPage}/>
        <Route  path ='/Contact' component = {ContactMe}/>
      </Switch>
      {/* <Footer /> */}
    </div>
  </Router>
  </>
  )
};

export default App;
