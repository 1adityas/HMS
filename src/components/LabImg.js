// import React from 'react'
import './NewAdmission.css'
import Header from './Header.js'
import MainFooter from './MainFooter.js'
import Button from '@mui/material/Button';

import React, { useState } from 'react';
import magnify from '../feather-search.svg';
import dropDown from '../awesome-caret-down.png';
import './LabImg.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DateRangeIcon from '@mui/icons-material/DateRange';//for calendar



function LabImg() {
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
        
        <div className='bgCard'>
          <div className='tdisp'>
            <p id='boxx1' style={{'border-radius':'10px 0px 0px 0px',width:'120px'}}>Test Arrived</p>
            <p id='boxx1' style={{'border-left':'0px','border-right':'0px',width:'130px'}}>Test Pending</p>
            <p id='boxx1' style={{'border-radius':'0px 10px 0px 0px',width:'130px'}}>Test Success</p>
          </div>
          <p id='boxx2'  style={{'border-radius':'0px 0px 0px 10px',width:'120px','border-top':'0px'}}>400</p>
            <p id='boxx1' style={{'border-left':'0px','border-right':'0px',width:'130px','border-top':'0px'}}>20</p>
            <p id='boxx1' style={{'border-radius':'0px 0px 10px 0px',width:'130px','border-top':'0px'}}>300</p>
        

        <div className='gri'>
        <div class="sub1">
                <input onChange={handleChange} name="religion" value={inputData.religion} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>

        <div class="sub1">
                <input onChange={handleChange} name="bloodGroup" value={inputData.bloodGroup} className='top_tField' id='plain-field2' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>
              </div>
        <div class="sub1">
                <input onChange={handleChange} name="bloodGroup" value={inputData.bloodGroup} className='top_tField' id='plain-field2' ></input>
                <button type='submit' className='btnUi' style={{ 'border-top-right-radius': '15px', 'border-bottom-right-radius': '15px' }}><DateRangeIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>
              </div>
        <div class="sub1">
          <input onChange={handleChange} name="bloodGroup" value={inputData.bloodGroup} className='top_tField' id='plain-field2' ></input>
          <button type='submit' className='btnUi' style={{ 'border-top-right-radius': '15px', 'border-bottom-right-radius': '15px' }}><DateRangeIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>
        </div>
        <Button variant="contained" style={{
                borderRadius: '12px',
                color: '#506F90', backgroundColor: '#EEEEEE', boxShadow: '#00000029'
                , marginRight: '60px'
              }}
                sx={{ boxShadow: '5px 5px 15px #00000029;', 'text-transform': 'none', width: '192px', height: '60px', fontSize: '20px', fontWeight: '500' }} >Submit
              </Button>
        </div>  
        </div>
        </div>

      <div className="footer">
        <MainFooter />
      </div>
      
      


    </body>
  )
}
export default LabImg;