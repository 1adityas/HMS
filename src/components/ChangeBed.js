import { Button } from '@mui/material';
import React, { useState } from 'react'
import Header from './Header.js'
import MainFooter from './MainFooter.js'



import './ChangeBed.css'
import dropDown from '../Assets/Images/awesome-caret-down.png';
import DateRangeIcon from '@mui/icons-material/DateRange';//for calendar
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ChangeBedData from './ChangeBedData.js';



//importing the files whose classes are used.
// import './PatientDetails.css'
// import './NewAdmission.css'

function ChangeBed() {

    const [patientName, setPatientName] = useState({
        selectWard: "",
        selectBed: "",
        Date: "",
        Time: "",
        Nam: "",
    });

    function handleChange(event) {
        const { name, value } = event.target
        setPatientName(prevInputData => ({ ...prevInputData, [name]: value }))


        // setPatientName({ [event.target.name]: event.target.value })

    }

    function handleSubmit(event) {
        //link your API here
        // event.preventDefault()
        // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
        // submitToApi(formData)
        console.log(patientName)
    }

    const [var1, setvar1] = useState(null);
    function handleEvent(event) {
        setvar1({ [event.target.name]: event.target.value })

    }
    console.log(patientName)
    return (
        <body className="page-container" style={{ 'fontFamily': 'poppins' }}>

            <div>
                <Header />
            </div>
            <div className="content-wrap">
                <div >
                    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '32px', color: '#253143', marginBottom: '40px' }}>Change Bed</p>
                </div>
                <div style={{ textAlign: 'center', }}>
                    <button onClick={handleEvent} value={var1} style={{
                        'border-radius': '15px', 'height': '60px',
                        'borderRadius': "15px,15px,15px,15px", 'textAlign': 'center', 'fontWeight': '400', 'fontSize': '20px', 'background-color': '#DEE1E5', 'marginBottom': '40px', 'width': "542px", 'height': '60px',
                    }}><span style={{ color: '#253143' }}>Click here to see more about</span><span style={{ color: '#506F90', 'textDecorationLine': 'underline', 'marginLeft': '10px' }}>Mr. Shubham Kumar{var1}</span></button>
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

                <form onSubmit={handleSubmit}>
                    <div class="container">
                        <div class="sub1">
                            <par >
                                Select Ward
                            </par>
                            <input onChange={handleChange} name="selectWard" value={patientName.selectWard} className='top_tField' id='plain-field3' ></input>
                            <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

                        </div>
                        <div class="sub1">
                            <par >
                                Select Bed
                            </par>
                            <input onChange={handleChange} name="selectBed" value={patientName.selectBed} className='top_tField' id='plain-field3' ></input>
                            <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

                        </div>

                        <div class="sub1">
                            <par >
                                Date & Time
                            </par>
                            <div style={{ display: 'flex' }}>
                                <input onChange={handleChange} name="Date" value={patientName.Date} className='top_tField' id='plain-field2'  ></input>
                                <button type='submit' className='btnUi' style={{ 'border-top-right-radius': '0px', 'border-bottom-right-radius': '0px' }}><DateRangeIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>

                            </div>
                            <div style={{ display: 'flex' }}>
                                <input onChange={handleChange} name="Time" value={patientName.Time} className='top_tField' id='plain-field2' style={{ 'border-top-left-radius': '0px', 'border-bottom-left-radius': '0px' }} ></input>
                                <button type='submit' className='btnUi'><QueryBuilderIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>

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

                    <div style={{ borderTop: "2px solid #999B9D ", marginLeft: 20, marginRight: 20, marginTop: 50 }}></div>

                    <div>
                        <p style={{ color: '#999B9D', marginTop: '40px', marginLeft: "872px" }}>No Results Found</p>
                    </div>
                </form>
            </div>

            <div className="footer">
                <MainFooter />
            </div>

        </body>
    )
}
export default ChangeBed;