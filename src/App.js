import React, { useState } from 'react';

import './App.css';
import MsDashboard from './components/MsDashboard'
import PatientDetails from './components/PatientDetails'
// import NavBar from './components/Header'
import ContentStoreController from './ContextController';
function App() {
  return (
    <>
      <ContentStoreController />
    </>
  );
}



export default App;