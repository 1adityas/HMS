import React, { useState } from 'react';

import './App.css';
import MsDashboard from './components/MsDashboard'
import PatientDetails from './components/PatientDetails'
// import NavBar from './components/Header'
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Header from './components/Header'
import Login from './components/Login'
// import Footer from './components/Footer'
// import CardItem from './components/CardItem'
import NewAdmission from './components/NewAdmission';
import HGT from './components/HGT';
import ChangeBed from './components/ChangeBed';
import PatientRelativeDetails from './components/PatientRelativeDetails';
import Reports from './components/Reports';

function App() {
  return (
    <Router>
      

      <Routes>
        {/* <Route path="/NavBar" element= {<NavBar />}/> */}
        <Route path="/" element={<Login/>}/>
        <Route path="/MsDashboard" element= {<MsDashboard />}/>
        <Route path="/NewAdmission" element= {<NewAdmission/>}/>
        
        <Route path="/PatientDetails" element= {<PatientDetails />}/>
        <Route path="/HGT" element= {<HGT/>}/>
        <Route path="/ChangeBed" element= {<ChangeBed />}/>
        <Route path="/PatientRelativeDetails" element= {<PatientRelativeDetails/>}/>
        <Route path="/Reports" element={<Reports/>}/>
</Routes>
</Router>
  );
}



export default App;