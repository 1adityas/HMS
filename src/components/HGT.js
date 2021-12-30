import { Button } from '@mui/material';
import React, { useState } from 'react'
import Header from './Header.js'
import MainFooter from './MainFooter.js'

import './HGT.css'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';



//importing the files whose classes are used.
// import './PatientDetails.css'
// import './NewAdmission.css'

function HGT() {

  const [patientName, setPatientName] = useState({
    HGT: "",
    Ketone: "",
    InsulinRequirement:"",
    Time:"",
  });

  function handleChange(event) {
    const { name, value } = event.target
    setPatientName(prevInputData => ({ ...prevInputData, [name]: value }))

  }

  const [var1, setvar1] = useState(null);
    function handleEvent(event){
        setvar1({[event.target.name]:event.target.value})

    }
    console.log(patientName)
  return (
    <body style={{ 'fontFamily': 'poppins' }}>

      <div>
        <Header />
      </div>

      <div >
        <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '32px', color: '#253143', marginBottom: '40px' }}>HGT Sheet</p>
      </div>
      <div style={{ textAlign: 'center', }}>
                <button onClick={handleEvent} value={var1} style={{'border-radius': '15px','height':'60px',
                    'borderRadius': "15px,15px,15px,15px", 'textAlign':'center', 'fontWeight': '400', 'fontSize':'20px', 'background-color': '#DEE1E5', 'marginBottom': '40px', 'width': "542px",'height':'60px',
                }}><span style={{ color: '#253143' }}>Click here to see more about</span><span style={{ color: '#506F90','textDecorationLine':'underline','marginLeft':'10px'}}>Mr. Shubham Kumar{var1}</span></button>
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
        <div class="sub">
          <par style={{ 'font-size': '20px', 'fontWeight': '500px' }}>
            HGT
          </par>
          <input onChange={handleChange} name='HGT' value={patientName.HGT} className='top_tField' id='plain-field' ></input>
        </div>

        <div class="sub">
          <par style={{ 'font-size': '20px', 'fontWeight': '500px' }}>
            Ketone
          </par>
          <input onChange={handleChange} name='Ketone' value={patientName.Ketone} className='top_tField' id='plain-field' ></input>
        </div>

        <div class="sub">
          <par style={{ 'font-size': '20px', 'fontWeight': '500px' }}>
            Insulin Requirement
          </par>
          <input onChange={handleChange} name='InsulinRequirement' value={patientName.InsulinRequirement} className='top_tField' id='plain-field' ></input>
        </div>
        <div class="sub">
              <par >
                Time
              </par>
              
              <div style={{display:'flex'}}>
              <input onChange={handleChange} name="Time" value={patientName.Time} className='top_tField' id='plain-field2' style={{width:'245px'}}></input>
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
          color: '#506F90', backgroundColor: '#EEEEEE', boxShadow: '#00000029'
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
export default HGT;