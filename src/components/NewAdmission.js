// import React from 'react'
import './NewAdmission.css'
import './MsDashboard.css'
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
import { display, padding } from '@mui/system';
import magnifying from '../Magnifying_glass.png';


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
    <body>

       <nav>
            <Header/> 
            </nav> 

      <div>
        <p style={{ border: '2px dashed', textAlign: 'center', fontWeight: 'bold', fontSize: '28px', color: '#253143', marginBottom: '40px' }}>New Admission</p>

        <div className='top-flex'>

          <p style={{ marginRight: '10px', fontSize: '22px' }}>Already a registered patient?</p>

          <div >
            <input className='top_tField' placeholder='Search using mobile no. or name'></input>
            <button type='submit' className='top-btn'><img src={magnifying} style={{ backgroundColor: '#6F88A2', height: '20px' }}></img>
            </button>
          </div>
        </div>
        <hr></hr>
        {/* created new tag par ..  */}
        <form onSubmit={handleSubmit}>
          <div class="wrapper">

            <div class="sub">
              <par >
                First Name
              </par>
              <input onChange={handleChange} name="firstName" value={inputData.firstName} className='top_tField' id='plain-field' ></input>
            </div>

            <div class="sub">
              <par >
                Middle Name
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
              <input onChange={handleChange} name="mobileNumber" value={inputData.mobileNumber}className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Date of Birth
              </par>
              <input onChange={handleChange} name="dateOfBirth" value={inputData.dateOfBirth} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Age
              </par>
              <input onChange={handleChange} name="age" value={inputData.age} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Email Id
              </par>
              <input onChange={handleChange} name="emailId" value={inputData.emailId}className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">Four</div>
            <div class="sub">Five</div>
            <div class="sub">
              <par >
                Address
              </par>
              <input onChange={handleChange} name="address" value={inputData.address}className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Pincode
              </par>
              <input onChange={handleChange} name="pinCode" value={inputData.pinCode} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">Six</div>
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

            <div class="sub">
              <par >
                Blood Group
              </par>
              <input onChange={handleChange} name="bloodGroup" value={inputData.bloodGroup}className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Sex
              </par>
              <input onChange={handleChange} name="sex" value={inputData.sex}className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Marital Status
              </par>
              <input onChange={handleChange} name="maritalStatus" value={inputData.maritalStatus}className='top_tField' id='plain-field' ></input>
            </div>

            <div class="sub">
              <par >
                Religion
              </par>
              <input onChange={handleChange} name="religion" value={inputData.religion} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Choose Document
              </par>
              <input onChange={handleChange} name="chooseDocument" value={inputData.chooseDocument} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">Six</div>
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
            <div class="sub">Six</div>
            <div class="sub">Six</div>

            <div class="sub">
              <par >
                Patient Type
              </par>
              <input onChange={handleChange} name="patiebtType" value={inputData.patientType} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Referred From
              </par>
              <input onChange={handleChange} name="referredFrom" value={inputData.referredFrom} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Consultant Preferred
              </par>
              <input onChange={handleChange} name="consultantPreferred" value={inputData.consultantPreferred} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Ward
              </par>
              <input onChange={handleChange} name="ward" value={inputData.firstName} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
                Bed
              </par>
              <input onChange={handleChange} name="bed" value={inputData.bed}className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">Six</div>

            <div class="sub">
              <par >
                Admission Date & Time
              </par>
              <input onChange={handleChange} name="admissionDateTime" value={inputData.admissionDateTime} className='top_tField' id='plain-field' ></input>
            </div>


            <div class="sub">Six</div>


          </div>
        </form>

      </div>
      <div>
        <MainFooter />
      </div>


    </body>
  )
}
export default NewAdmission;