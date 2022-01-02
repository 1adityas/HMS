// import React from 'react'
import './NewAdmission.css'
import Header from './Header.js'
import MainFooter from './MainFooter.js'

import React, { useState } from 'react';
import magnify from '../feather-search.svg';
import dropDown from '../awesome-caret-down.png';
import './Lab'



function NewAdmission() {
  const [inputData, setInputData] = useState({
    firstName: "",
    

  });


  function handleChange(event) {
    const { name, value } = event.target
    setInputData(prevInputData => ({ ...prevInputData, [name]: value }))

  }
  console.log(inputData)

  function handleSubmit(event) {
    console.log(inputData)
  }
  return (

    //using body tag to get bg color
    <body className="page-container">

      <nav>
        <Header />
      </nav>
      {/* <div className="content-wrap"> */}
        <div style={{ paddingBottom: '200px' }}>
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px', color: '#253143', marginBottom: '40px' }}>Laboratory & Imaging</p>

          <div className='top-flex'>

            <div style={{ display: 'flex', 'align-items': 'center' }} >
              <input className='top_tField' placeholder='Search using mobile no. or name'></input>
              <button type='submit' className='top-btn'><img src={magnify} style={{ 'align-items': 'center', backgroundColor: '#6F88A2', height: '27px', }}></img>
              </button>
            </div>
          </div>
          

          {/* created new tag par ..  */}

        </div>

      <div className="footer">
        <MainFooter />
      </div>


    </body>
  )
}
export default NewAdmission;