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

function App() {
  return (
    <div>
       {/* <NavBar /> */}
      <MsDashboard />
      {/* <Login/> */}
      <NewAdmission/>
     {/* <PatientDetails /> */}
     <HGT/>     
    </div>

  )
}



export default App;