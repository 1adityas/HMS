import { Button } from '@mui/material';
import React, { useState } from 'react'
import Header from './Header.js'
import MainFooter from './MainFooter.js'

import './ChangeBed.css'
import dropDown from '../awesome-caret-down.png';
import DateRangeIcon from '@mui/icons-material/DateRange';//for calendar
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';



//importing the files whose classes are used.
// import './PatientDetails.css'
// import './NewAdmission.css'

function ChangeBed() {

    const [patientName, setPatientName] = useState(null)

    function handleChange(event) {
        setPatientName({ [event.target.name]: event.target.value })

    }
    return (
        <body style={{ 'fontFamily': 'poppins' }}>

            <div>
                <Header />
            </div>

            <div >
                <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '32px', color: '#253143', marginBottom: '40px' }}>Change Bed</p>
            </div>
            <div style={{ textAlign: 'center', }}>
                <button onClick={handleChange} style={{
                    borderRadius: "15px,15px,15px,15px", textAlign: 'center', fontWeight: '400', fontSize: '20px', color: '#DEE1E5', marginBottom: '40px', width: "288px",
                    height: "28px"
                }}><span style={{ color: '#253143' }}>Click here to see more about</span><span style={{ color: '#506F90' }}>{patientName}</span></button>
            </div>
            {/* 
            <div className='top'>

          <p style={{ marginRight: '10px', fontSize: '22px' }}>Already a registered patient?</p>

          <div >
            <input className='field' placeholder='Search using mobile no. or name'></input>
            <button type='submit' className='btn'><img src={magnifying} style={{ backgroundColor: '#6F88A2', height: '20px' }}></img>
            </button>
          </div>
        </div> */}


            <div class="container">
            <div class="sub1">
              <par >
              Select Ward
              </par>
              <input onChange={handleChange} name="bed" className='top_tField' id='plain-field3' ></input>
              <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto',width:'22px'}}></img></button>

            </div>
            <div class="sub1">
              <par >
              Select Bed
              </par>
              <input onChange={handleChange} name="bed" className='top_tField' id='plain-field3' ></input>
              <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto',width:'22px'}}></img></button>

            </div>

            <div class="sub1">
              <par >
                Date & Time
              </par>
              <div style={{display:'flex'}}>
              <input onChange={handleChange} name="admissionDateTime" value={inputData.admissionDateTime} className='top_tField' id='plain-field2'  ></input>
              <button type='submit' className='btnUi' style={{'border-top-right-radius':'0px','border-bottom-right-radius':'0px'}}><DateRangeIcon sx={{color:'#EEEEEE',width:'auto',height:'30px'}}/></button>

              </div>
              <div style={{display:'flex'}}>
              <input onChange={handleChange} name="admissionDateTime" value={inputData.admissionDateTime} className='top_tField' id='plain-field2' style={{'border-top-left-radius':'0px','border-bottom-left-radius':'0px'}} ></input>
              <button type='submit' className='btnUi'><QueryBuilderIcon sx={{color:'#EEEEEE',width:'auto',height:'30px'}}/></button>

              </div>
            </div>
            </div>



            {/* <div style={{ 'marginTop': '80px' }}>
        <Button style={{
          'font-size': '20px', 'fontWeight': '500px', 'textTransform': 'none', 'height': '60px', 'width': '192px', 'color': '#EEEEEE', 'marginLeft': '738px',
          'borderRadius': '15px', 'opacity': '1', 'boxShadow': '5px 5px 15px #00000029',
          'backgroundColor': '#506F90'
        }}>Submit</Button>
        <Button style={{
          'font-size': '20px', 'fontWeight': '500px', 'textTransform': 'none', 'height': '60px', 'width': '192px', 'color': '#506f90', 'marginLeft': '60px',
          'borderRadius': '15px', 'opacity': '1', 'boxShadow': '5px 5px 15px #00000029', 'backgroundColor': '#EEEEEE'
        }}>Cancel</Button>
      </div> */}
            <div className='align'>
                <Button variant="contained" style={{
                    borderRadius: '12px',
                    color: '#EEEEEE', backgroundColor: '#506F90', boxShadow: '#00000029'
                    , marginRight: '60px'
                }}
                    sx={{ boxShadow: '5px 5px 15px #00000029;', 'text-transform': 'none', width: '192px', height: '60px', fontSize: '20px', fontWeight: '500' }} >Submit
                </Button>
                <Button variant="contained" style={{
                    borderRadius: '12px',
                    color: '#EEEEEE', backgroundColor: '#506F90', boxShadow: '#00000029'
                }}
                    sx={{ boxShadow: '5px 5px 15px #00000029;', 'text-transform': 'none', width: '192px', height: '60px', fontSize: '20px', fontWeight: '500' }} >Cancel
                </Button>
            </div>

            <div>
                <MainFooter />
            </div>

        </body>
    )
}
export default ChangeBed;