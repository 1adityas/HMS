import React, { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';
// import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer'
import CardItem from './components/CardItem'
import msDashboard from './components/msDashboard'

function App() {
  return (
    <div>
    <CardItem />
    <Login />
    <Footer />
    </div>

  )
}


export default App;