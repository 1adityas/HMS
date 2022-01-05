// import React from 'react'
import './NewAdmission.css'
// maybe make a new footer css file.
import Header from './Header.js'
import MainFooter from './MainFooter.js'

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BrowserRoute as Router, Switch, Route, Link } from "react-router-dom";
// import { display, padding, width } from '@mui/system';
import magnify from '../feather-search.svg';
import dropDown from '../awesome-caret-down.png';
import DateRangeIcon from '@mui/icons-material/DateRange';//for calendar
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';



// import {ReactComponent as Back} from '../background.svg';

//main-scren Dashboard

function NewAdmission() {
  const [inputData, setInputData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    dateOfBirth: "",
    age: "",
    emailId: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
    country: "",
    bloodGroup: "",
    sex: "",
    maritalStatus: "",
    religion: "",
    chooseDocument: "",
    firstNameOfRelative: "",
    lastNameOfRelative: "",
    relationToPatient: "",
    contactNo: "",
    patientType: "",
    referredFrom: "",
    consultantPreferred: "",
    ward: "",
    bed: "",
    admissionDateTime: "",

  });


  function handleChange(event) {
    const { name, value } = event.target
    setInputData(prevInputData => ({ ...prevInputData, [name]: value }))

  }
  console.log(inputData)

  function handleSubmit(event) {
    //link your API here
    // event.preventDefault()
    // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
    // submitToApi(formData)
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
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px', color: '#253143', marginBottom: '40px' }}>New Admission</p>

          <div className='top-flex'>

            <p style={{ marginRight: '10px', fontSize: '22px', 'align-items': 'center', opacity: '0.7' }}>Already a registered patient?</p>

            <div style={{ display: 'flex', 'align-items': 'center' }} >
              <input className='top_tField' placeholder='Search using mobile no. or name'></input>
              <button type='submit' className='top-btn'><img src={magnify} style={{ 'align-items': 'center', backgroundColor: '#6F88A2', height: '27px', }}></img>
              </button>
            </div>
          </div>
          <hr></hr>

          {/* created new tag par ..  */}

          <form onSubmit={handleSubmit}>
            <div class="wrapperrr">

              <div class="sub">
                <par >
                  First Name
                </par>
                <input onChange={handleChange} name="firstName" value={inputData.firstName} className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                  Middle
                </par>
                <input onChange={handleChange} name="middleName" value={inputData.middleName} className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                  Last Name
                </par>
                <input onChange={handleChange} name="lastName" value={inputData.lastName} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                  Mobile No.
                </par>
                <input onChange={handleChange} name="mobileNumber" value={inputData.mobileNumber} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub1">
                <par >
                  Date of Birth
                </par>
                <input onChange={handleChange} name="dateOfBirth" value={inputData.dateOfBirth} className='top_tField' id='plain-field2' ></input>
                <button type='submit' className='btnUi'><DateRangeIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>
              </div>
              <div class="sub">
                <par >
                  Age
                </par>
                <input onChange={handleChange} name="age" value={inputData.age} className='top_tField' id='plain-field1' ></input>
              </div>
              <div class="sub">
                <par >
                  Email Id
                </par>
                <input onChange={handleChange} name="emailId" value={inputData.emailId} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub"></div>
              <div class="sub"></div>
              <div class="sub">
                <par >
                  Address
                </par>
                <input onChange={handleChange} name="address" value={inputData.address} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub1">
                <par >
                  Pincode
                </par>
                <input onChange={handleChange} name="pinCode" value={inputData.pinCode} className='top_tField' id='plain-field1' ></input>
              </div>
              <div class="sub"></div>
              <div class="sub">
                <par >
                  City
                </par>
                <input onChange={handleChange} name="city" value={inputData.city} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                  State
                </par>
                <input onChange={handleChange} name="state" value={inputData.state} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                  Country
                </par>
                <input onChange={handleChange} name="country" value={inputData.country} className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub1">
                <par >
                  Blood Group
                </par>
                <input onChange={handleChange} name="bloodGroup" value={inputData.bloodGroup} className='top_tField' id='plain-field2' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>
              <div class="sub3box">
                <par >
                  Sex
                </par>

                <div id='btns3' style={{ gridColumn: '1/1', gridColumn: '1', gridRow: '2/3', 'text-align': 'center', fontSize: '30px', border: '2px solid #506F90CC', borderRadius: '15px 0px 0px 15px' }}><Button onClick={handleChange} name="sex" value="Male" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>Male</Button></div>
                <div id='btns3' style={{ gridColumn: '1/1', margin: '0px', gridColumn: '2', gridRow: '2/3', 'text-align': 'center', height: '60px', borderTop: '2px solid #506F90CC', borderBottom: '2px solid #506F90CC', boxShadow: '5px 5px 15px #00000029;' }}><Button onClick={handleChange} name="sex" value="Female" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>Female</Button></div>
                <div id='btns3' style={{ gridColumn: '1/1', margin: '0px', gridColumn: '3', gridRow: '2/3', 'border': '2px solid #506F90', 'text-align': 'center', fontSize: '30px', border: '2px solid #506F90CC', borderRadius: '0px 15px 15px 0px' }}><Button onClick={handleChange} name="sex" value="Transgender" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>Transgender</Button></div>

                {/* <input onChange={handleChange} name="sex" value={inputData.sex}className='top_tField' id='plain-field' ></input> */}
              </div>
              <div class="sub3box">
                <par >
                  Marital Status
                </par>
                <div id='btns3' style={{ gridColumn: '1/1', gridColumn: '1', gridRow: '2/3', 'text-align': 'center', fontSize: '30px', border: '2px solid #506F90CC', borderRadius: '15px 0px 0px 15px' }}><Button onClick={handleChange} name="maritalStatus" value="Single" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>Single</Button></div>
                <div id='btns3' style={{ gridColumn: '1/1', margin: '0px', gridColumn: '2', gridRow: '2/3', 'text-align': 'center', height: '60px', borderTop: '2px solid #506F90CC', borderBottom: '2px solid #506F90CC', boxShadow: '5px 5px 15px #00000029;' }}><Button onClick={handleChange} name="maritalStatus" value="Married" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>Married</Button></div>
                <div id='btns3' style={{ gridColumn: '1/1', margin: '0px', gridColumn: '3', gridRow: '2/3', 'text-align': 'center', fontSize: '30px', border: '2px solid #506F90CC', borderRadius: '0px 15px 15px 0px' }}><Button onClick={handleChange} name="maritalStatus" value="Divorced" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>Divorced</Button></div>
                {/* <input onChange={handleChange} name="maritalStatus" value={inputData.maritalStatus}className='top_tField' id='plain-field' ></input> */}
              </div>

              <div class="sub1">
                <par >
                  Religion
                </par>
                <input onChange={handleChange} name="religion" value={inputData.religion} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>
              <div class="sub1" >
                <par>
                  {/*because of this big name i had to use gridColumn 1/3*/}
                  Choose Document
                </par>
                <input onChange={handleChange} name="chooseDocument" value={inputData.chooseDocument} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ display: 'relative', 'align-items': 'center', height: 'auto', width: '22px', top: '0px' }}></img></button>

              </div>
              <div class="sub"></div>
              <div class="sub">
                <par >
                  First Name Of The Relative
                </par>
                <input onChange={handleChange} name="firstNameOfRelative" value={inputData.firstNameOfRelative} className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                  Last Name Of The Relative
                </par>
                <input onChange={handleChange} name="lastNameOfRelative" value={inputData.lastNameOfRelative} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                  Relation To Patient
                </par>
                <input onChange={handleChange} name="relationToPatient" value={inputData.firstName} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                  Contact No
                </par>
                <input onChange={handleChange} name="contactNo" value={inputData.contactNo} className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub"></div>
              <div class="sub"></div>

              <div class="sub1">
                <par >
                  Patient Type
                </par>
                <input onChange={handleChange} name="patiebtType" value={inputData.patientType} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>
              <div class="sub1">
                <par >
                  Referred From
                </par>
                <input onChange={handleChange} name="referredFrom" value={inputData.referredFrom} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>
              <div class="sub1">
                <par >
                  Consultant Preferred
                </par>
                <input onChange={handleChange} name="consultantPreferred" value={inputData.consultantPreferred} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>
              <div class="sub1">
                <par >
                  Ward
                </par>
                <input onChange={handleChange} name="ward" value={inputData.firstName} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>
              <div class="sub1">
                <par >
                  Bed
                </par>
                <input onChange={handleChange} name="bed" value={inputData.bed} className='top_tField' id='plain-field3' ></input>
                <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

              </div>
              <div class="sub"></div>
              <div class="sub1">
                <par >
                  Admission Date & Time
                </par>
                <div style={{ display: 'flex' }}>
                  <input onChange={handleChange} name="admissionDateTime" value={inputData.admissionDateTime} className='top_tField' id='plain-field3'  ></input>
                  <button type='submit' className='btnUi' style={{ 'border-top-right-radius': '0px', 'border-bottom-right-radius': '0px' }}><DateRangeIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>

                </div>
                <div style={{ display: 'flex' }}>
                  <input onChange={handleChange} name="admissionDateTime" value={inputData.admissionDateTime} className='top_tField' id='plain-field2' style={{ 'border-top-left-radius': '0px', 'border-bottom-left-radius': '0px' }} ></input>
                  <button type='submit' className='btnUi'><QueryBuilderIcon sx={{ color: '#EEEEEE', width: 'auto', height: '30px' }} /></button>

                </div>
              </div>


              <div class="sub"></div>
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
export default NewAdmission;