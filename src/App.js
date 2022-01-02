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
import ChangeBedData from './components/ChangeBedData';
import HGTData from './components/HGTData';
import LabImg from './components/LabImg'
import ReportData from './components/ReportData'
import InitialAssessment from './components/InitialAssessment'
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/NavBar" element= {<NavBar />}/> */}
        <Route path="/" element={<ChangeBedData />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MsDashboard" element={<MsDashboard />} />
        <Route path="/NewAdmission" element={<NewAdmission />} />
        <Route path="/InitialAssessment" element={<InitialAssessment />} />
        <Route path="/LabImg" element={<LabImg />} />

        <Route path="/PatientDetails" element={<PatientDetails />} />
        <Route path="/HGT" element={<HGT />} />
        <Route path="/ChangeBed" element={<ChangeBed />} />
        <Route path="/PatientRelativeDetails" element={<PatientRelativeDetails />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/ChangeBedData" element={<ChangeBedData />} />
        <Route path="/HGTData" element={<HGTData />} />
        {/* <Route path="/Lab" element={<Lab />} /> */}
        <Route path="/ReportData" element={<ReportData />} />
        <Route path="/InitialAssessment" element={<InitialAssessment />} />
      </Routes>
    </Router>
  );
}



export default App;