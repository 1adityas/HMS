import React, { useState } from 'react';

import './App.css';
import MsDashboard from './components/MsDashboard'
import PatientDetails from './components/PatientDetails'
// import NavBar from './components/Header'

// import Header from './components/Header'
import Login from './components/Login'
// import Footer from './components/Footer'
// import CardItem from './components/CardItem'
import NewAdmission from './components/NewAdmission';
import HGT from './components/HGT';
import ChangeBed from './components/ChangeBed';
import PatientRelativeDetails from './components/PatientRelativeDetails';

function App() {
  return (
    <div>
       {/* <NavBar /> */}
      {/* <MsDashboard /> */}
      {/* < NewAdmission/> */}
      {/* <Login/> */}
     {/* <PatientDetails /> */}
     {/* <HGT/>      */}
     {/* <ChangeBed /> */}
     <PatientRelativeDetails/>
    </div>

  )
}



export default App;