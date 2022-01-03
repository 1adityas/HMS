import { Button } from '@mui/material';
import React, { useState } from 'react'
import Header from './Header.js'
import MainFooter from './MainFooter.js'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import './InitialAssessment.css'
import dropDown from '../Assets/Images/awesome-caret-down.png';
import DateRangeIcon from '@mui/icons-material/DateRange';//for calendar
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
// import ChangeBedData from './ChangeBedData.js';
import HistoryHabitsDataGrid from './HistoryHabitsDataGrid.js'
import Vitals from './Vitals.js'
import CoMorbidities from './CoMorbidities'
import Allergy from './Allergy'
import Surgery from './Surgery'
import Symptoms from './Symptoms'
import CovidStatus from './CovidStatus'
import magnify from '../Assets/Images/feather-search.svg';



//importing the files whose classes are used.
// import './PatientDetails.css'
// import './NewAdmission.css'

function InitialAssessment() {

    const [inputData, setInputData] = useState({
        selectWard: "",
        selectBed: "",
        Date: "",
        Time: "",
        Nam: "",
    });

    function handleChange(event) {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))


        // setPatientName({ [event.target.name]: event.target.value })

    }

    function handleSubmit(event) {
        //link your API here
        // event.preventDefault()
        // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
        // submitToApi(formData)
        console.log(inputData)
    }

    const [var1, setvar1] = useState(null);
    function handleEvent(event) {
        setvar1({ [event.target.name]: event.target.value })

    }
    console.log(inputData)
    return (
        <body className="page-container" style={{ 'fontFamily': 'poppins' }}>

            <div>
                <Header />
            </div>
            <div className="content-wrap">
                <div >
                    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '32px', color: '#253143', marginBottom: '40px' }}>Discharge</p>
                </div>
                <div style={{ textAlign: 'center', }}>
                    <button onClick={handleEvent} value={var1} style={{
                        'border-radius': '15px', 'height': '60px',
                        'borderRadius': "15px,15px,15px,15px", 'textAlign': 'center', 'fontWeight': '400', 'fontSize': '20px', 'background-color': '#DEE1E5', 'marginBottom': '40px', 'width': "542px", 'height': '60px',
                    }}><span style={{ color: '#253143' }}>Click here to see more about</span><span style={{ color: '#506F90', 'textDecorationLine': 'underline', 'marginLeft': '10px' }}>Mr. Shubham Kumar{var1}</span></button>
                </div>


                <form onSubmit={handleSubmit}>
                    <div class="container">
                        <div class="sub1">
                            <par >
                                History Given By
                            </par>
                            <input onChange={handleChange} name="selectWard" value={inputData.selectWard} className='top_tField' id='plain-field3' ></input>
                            <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

                        </div>
                        <div class="sub1">
                            <par >
                                Travel History
                            </par>
                            <input style={{ 'border-radius': "15px" }} onChange={handleChange} name="selectBed" value={inputData.selectBed} className='top_tField' id='plain-field3' ></input>


                        </div>

                    </div>
                </form>
                <div style={{ 'margin': "40px 70px 40px 70px", 'width': "1780px" }}>
                    <p style={{ 'padding-top': "15px", 'font-size': '22px', 'background-color': "#6F88A2", 'text-align': "center", 'height': "60px", 'color': "#EEEEEE", 'border-radius': "15px 15px 0px 0px" }}> Vitals <Button style={{
                        'background-color': "#EEEEEE", 'color': "#6F88A2", 'float': "right", 'border-radius': "10px", 'margin': "11px 60px 11px 0px"
                    }}><span style={{ 'font -size': '20px' }}>+ Add</span></Button></p>
                    <Vitals/>
                </div>
                
                <div style={{ 'margin': "40px 70px 40px 70px", 'width': "1780px" }}>
                    <p style={{ 'padding-top': "15px", 'font-size': '22px', 'background-color': "#6F88A2", 'text-align': "center", 'height': "60px", 'color': "#EEEEEE", 'border-radius': "15px 15px 0px 0px" }}> History & Habits <Button style={{
                        'background-color': "#EEEEEE", 'color': "#6F88A2", 'float': "right", 'border-radius': "10px", 'margin': "11px 60px 11px 0px"
                    }}><span style={{ 'font -size': '20px' }}>+ Add</span></Button></p>
                    <HistoryHabitsDataGrid />
                </div>
                <div style={{ 'margin': "40px 70px 40px 70px", 'width': "1780px" }}>
                <p style={{ 'padding-top': "15px", 'font-size': '22px', 'background-color': "#6F88A2", 'text-align': "center", 'height': "60px", 'color': "#EEEEEE", 'border-radius': "15px 15px 0px 0px" }}> Co-Morbidities <Button style={{
                        'background-color': "#EEEEEE", 'color': "#6F88A2", 'float': "right", 'border-radius': "10px", 'margin': "11px 60px 11px 0px"
                    }}><span style={{ 'font -size': '20px' }}>+ Add</span></Button></p>
                    <CoMorbidities />
                </div>
                <div style={{ 'margin': "40px 70px 40px 70px", 'width': "1780px" }}>
                <p style={{ 'padding-top': "15px", 'font-size': '22px', 'background-color': "#6F88A2", 'text-align': "center", 'height': "60px", 'color': "#EEEEEE", 'border-radius': "15px 15px 0px 0px" }}> Allergy <Button style={{
                        'background-color': "#EEEEEE", 'color': "#6F88A2", 'float': "right", 'border-radius': "10px", 'margin': "11px 60px 11px 0px"
                    }}><span style={{ 'font -size': '20px' }}>+ Add</span></Button></p>
                    <Allergy />
                </div>
                <div style={{ 'margin': "40px 70px 40px 70px", 'width': "1780px" }}>
                <p style={{ 'padding-top': "15px", 'font-size': '22px', 'background-color': "#6F88A2", 'text-align': "center", 'height': "60px", 'color': "#EEEEEE", 'border-radius': "15px 15px 0px 0px" }}>Surgery <Button style={{
                        'background-color': "#EEEEEE", 'color': "#6F88A2", 'float': "right", 'border-radius': "10px", 'margin': "11px 60px 11px 0px"
                    }}><span style={{ 'font -size': '20px' }}>+ Add</span></Button></p>
                    <Surgery/>
                </div>
                <div style={{ 'margin': "40px 70px 40px 70px", 'width': "1780px" }}>
                <p style={{ 'padding-top': "15px", 'font-size': '22px', 'background-color': "#6F88A2", 'text-align': "center", 'height': "60px", 'color': "#EEEEEE", 'border-radius': "15px 15px 0px 0px" }}> Symptoms <Button style={{
                        'background-color': "#EEEEEE", 'color': "#6F88A2", 'float': "right", 'border-radius': "10px", 'margin': "11px 60px 11px 0px"
                    }}><span style={{ 'font -size': '20px' }}>+ Add</span></Button></p>
                    <Symptoms />
                </div>
                <div style={{ 'margin': "40px 70px 40px 70px", 'width': "1780px" }}>
                <p style={{ 'padding-top': "15px", 'font-size': '22px', 'background-color': "#6F88A2", 'text-align': "center", 'height': "60px", 'color': "#EEEEEE", 'border-radius': "15px 15px 0px 0px" }}> Covid Status <Button style={{
                        'background-color': "#EEEEEE", 'color': "#6F88A2", 'float': "right", 'border-radius': "10px", 'margin': "11px 60px 11px 0px"
                    }}><span style={{ 'font -size': '20px' }}>+ Add</span></Button></p>
                    <CovidStatus />
                </div>
                


            </div>

            <div class="sub" style={{ marginBottom:"40px", width:"400px", marginLeft:"70px"}}>
                <par >
                On Examination
                </par>
                <input onChange={handleChange} name="firstName" value={inputData.firstName} style={{ "height":"120px"}} className='top_tField' id='plain-field' ></input>
              </div>

            <div style={{ paddingBottom: '40px' }}>
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '22px', color: '#253143', marginBottom: '40px' }}>Clinical Status</p>
         

          {/* created new tag par ..  */}

          <form onSubmit={handleSubmit}>
            <div class="wrapperr">

              <div class="sub">
                <par >
                Clinic Status
                </par>
                <input onChange={handleChange} name="firstName" value={inputData.firstName} className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                Level Of Consciousness
                </par>
                <input onChange={handleChange} name="middleName" value={inputData.middleName} className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                Pupils
                </par>
                <input onChange={handleChange} name="lastName" value={inputData.lastName} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Cyanosis
                </par>
                <input onChange={handleChange} name="mobileNumber" value={inputData.mobileNumber} className='top_tField' id='plain-field' ></input>
              </div>
              
              <div class="sub">
                <par >
                Oedema
                </par>
                <input onChange={handleChange} name="age" value={inputData.age} className='top_tField' id='plain-field1' ></input>
              </div>
              <div class="sub">
                <par >
                Pallor
                </par>
                <input onChange={handleChange} name="emailId" value={inputData.emailId} className='top_tField' id='plain-field' ></input>
              </div>
              {/* <div class="sub"></div> */}
              {/* <div class="sub"></div> */}
              <div class="sub">
                <par >
                Sclera
                </par>
                <input onChange={handleChange} name="address" value={inputData.address} className='top_tField' id='plain-field' ></input>
              </div>
              
              {/* <div class="sub"></div> */}
              <div class="sub">
                <par >
                  Tongue
                </par>
                <input onChange={handleChange} name="city" value={inputData.city} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                  Neck Veins
                </par>
                <input onChange={handleChange} name="state" value={inputData.state} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Lymph Nodes
                </par>
                <input onChange={handleChange} name="country" value={inputData.country} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Peripheral Pulsation
                </par>
                <input onChange={handleChange} name="country" value={inputData.country} className='top_tField' id='plain-field' ></input>
              </div>

              {/* <div class="sub"></div> */}
            </div>
          </form>
        </div>

        <div style={{ paddingBottom: '200px' }}>
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '22px', color: '#253143', marginBottom: '40px' }}>Systematic Examination</p>
         

          {/* created new tag par ..  */}

          <form onSubmit={handleSubmit}>
            <div class="wrapperr">

              <div class="sub">
                <par >
                Respiratory System
                </par>
                <input onChange={handleChange} name="firstName" value={inputData.firstName} className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                Cardiovascular System
                </par>
                <input onChange={handleChange} name="middleName" value={inputData.middleName} className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                Alimentary System
                </par>
                <input onChange={handleChange} name="lastName" value={inputData.lastName} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Central Nervous System
                </par>
                <input onChange={handleChange} name="mobileNumber" value={inputData.mobileNumber} className='top_tField' id='plain-field' ></input>
              </div>
              
              <div class="sub">
                <par >
                Previous Investigation
                </par>
                <input onChange={handleChange} name="age" value={inputData.age} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Bladder & Bowel Habits
                </par>
                <input onChange={handleChange} name="emailId" value={inputData.emailId} className='top_tField' id='plain-field' ></input>
              </div>
              {/* <div class="sub"></div> */}
              {/* <div class="sub"></div> */}
              <div class="sub"></div>
              <div class="sub"></div>
              
              <div class="sub" style={{width:"400px"}}>
                <par >
                Plan Of Care
                </par>
                <input onChange={handleChange} name="city" value={inputData.city} style={{height:"120px"}} className='top_tField' id='plain-field' ></input>
              </div>
              

              {/* <div class="sub"></div> */}
            </div>

            <div>
                <Card style={{marginLeft:"125px",marginRight:"125px", marginTop:"40px",backgroundColor:"#E4E4E5",borderRadius:"15px"}}>
                <div class="wrapperr">
                <div class="sub1">
                <par >
                Template
                </par>
                <input onChange={handleChange} name="religion" value={inputData.religion} style={{backgroundColor:"#E4E4E5"}} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>

              <div class="sub1">
                <par >
                Discharge Reason
                </par>
                <input onChange={handleChange} name="religion" value={inputData.religion} style={{backgroundColor:"#E4E4E5"}}  className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>

              <div class="sub1">
                <par >
                Discharge Date & Time
                </par>
                <div style={{ display: 'flex' }}>
                  <input onChange={handleChange} name="admissionDateTime" style={{backgroundColor:"#E4E4E5"}} value={inputData.admissionDateTime} className='top_tField' id='plain-field3'  ></input>
                  <button type='submit' className='btnUi' style={{ 'border-top-right-radius': '0px', 'border-bottom-right-radius': '0px' }}><DateRangeIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>

                </div>
                <div style={{ display: 'flex' }}>
                  <input onChange={handleChange} name="admissionDateTime" value={inputData.admissionDateTime} className='top_tField' id='plain-field2' style={{ 'border-top-left-radius': '0px', 'border-bottom-left-radius': '0px',"backgroundColor":"#E4E4E5" }} ></input>
                  <button type='submit' className='btnUi'><QueryBuilderIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>

                </div>
              </div>
              <div class="sub"></div>


            <div class="sub" style={{width:"400px"}}>
                <par >
                Condition On Discharge
                </par>
                <input onChange={handleChange} name="city" value={inputData.city} style={{height:"120px",backgroundColor:"#E4E4E5"}} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub" style={{width:"400px"}}>
                <par >
                Course In Ward
                </par>
                <input onChange={handleChange} name="city" value={inputData.city} style={{height:"120px",backgroundColor:"#E4E4E5"}} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub" style={{width:"400px"}}>
                <par >
                Remark
                </par>
                <input onChange={handleChange} name="city" value={inputData.city} style={{height:"120px",backgroundColor:"#E4E4E5"}} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub"></div>

            <div class="sub1">
                <par >
                Follow Up Date
                </par>
                <input onChange={handleChange} style={{marginBottom:"40px",backgroundColor:"#E4E4E5"}} name="dateOfBirth" value={inputData.dateOfBirth} className='top_tField' id='plain-field2' ></input>
                <button type='submit' className='btnUi'><DateRangeIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>
              </div>

              <div class="sub1">
                <par >
                Follow Up Date
                </par>
                <input onChange={handleChange} style={{marginBottom:"40px",backgroundColor:"#E4E4E5"}} name="dateOfBirth" value={inputData.dateOfBirth} className='top_tField' id='plain-field2' ></input>
                <button type='submit' className='btnUi'><DateRangeIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>
              </div>

                </div>
                </Card>
            </div>
            

            
            <div className='flex2'>
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
          </form>
        </div>
        

            <div className="footer">
                <MainFooter />
            </div>

        </body>
    )
}
export default InitialAssessment;
