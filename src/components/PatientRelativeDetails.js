import { Button } from '@mui/material';
import React, { useState } from 'react'
import Header from './Header.js'
import MainFooter from './MainFooter.js'
import dropDown from '../Assets/Images/awesome-caret-down.png';
import DateRangeIcon from '@mui/icons-material/DateRange';//for calendar
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import './PatientRelativeDetails.css'


function PatientRelativeDetails() {

    const [patientName, setPatientName] = useState({
        firstNameOfRelative: "",
        lastNameOfRelative: "",
        relationWithPatient: "",
        mobileNo: "",
        patientType:"",
        referredFrom: "",
        consultant:"",
        Date:"",
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
    function handleSubmit(event) {
      //link your API here
      // event.preventDefault()
      // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
      // submitToApi(formData)
      console.log(patientName)
    }
    console.log(patientName)
    return (
        <body className="page-container" style={{ 'fontFamily': 'poppins' }}>

            <div>
                <Header />
            </div>
           <div className="content-wrap">
            <div >
                <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '32px', color: '#253143', marginBottom: '40px' }}>Patient Relative Details</p>
            </div>
            <div style={{ textAlign: 'center', }}>
                <button onClick={handleEvent} value={var1} style={{'border-radius': '15px','height':'60px',
                    'borderRadius': "15px,15px,15px,15px", 'textAlign':'center', 'fontWeight': '400', 'fontSize':'20px', 'background-color': '#DEE1E5', 'marginBottom': '40px', 'width': "542px",'height':'60px',
                }}><span style={{ color: '#253143' }}>Click here to see more about</span><span style={{ color: '#506F90','textDecorationLine':'underline','marginLeft':'10px'}}>Mr. Shubham Kumar{var1}</span></button>
            </div>

            <form onSubmit={handleSubmit}>
            <div class="container">

            <div class="sub">
              <par >
              First Name Of The Relative
              </par>
              <input onChange={handleChange} name="firstNameOfRelative" value={patientName.firstNameOfRelative} className='top_tField' id='plain-field' ></input>
            </div>
            <div class="sub">
              <par >
              Last Name Of The Relative
              </par>
              <input onChange={handleChange} name="lastNameOfRelative" value={patientName.lastNameOfRelative} className='top_tField' id='plain-field' ></input>
            </div>

            <div class="sub1">
              <par >
              Relation With The Patient
              </par>
              <input onChange={handleChange} name="relationWithPatient" value={patientName.relationWithPatient} className='top_tField' id='plain-field3' ></input>
              <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto',width:'22px'}}></img></button>

            </div>

            <div class="sub">
              <par >
              Mobile No.
              </par>
              <input onChange={handleChange} name="mobileNo" value={patientName.mobileNo} className='top_tField' id='plain-field' ></input>
            </div>

            <div class="sub3box">
              <par >
              Patient Type
              </par>

              <div id='btns3' style={{ gridColumn: '1/1', gridColumn: '1', gridRow: '2/3', 'text-align': 'center', fontSize: '30px', border: '2px solid #506F90CC', borderRadius: '15px 0px 0px 15px' }}><Button onClick={handleChange} name="patientType" value="General" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>General</Button></div>
              <div id='btns3' style={{ gridColumn: '1/1', margin: '0px', gridColumn: '2', gridRow: '2/3', 'text-align': 'center', height: '60px', borderTop: '2px solid #506F90CC', borderBottom: '2px solid #506F90CC', boxShadow: '5px 5px 15px #00000029;' }}><Button onClick={handleChange} name="patientType" value="VIP" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>VIP</Button></div>
              <div id='btns3' style={{ gridColumn: '1/1', margin: '0px', gridColumn: '3', gridRow: '2/3', 'border': '2px solid #506F90', 'text-align': 'center', fontSize: '30px', border: '2px solid #506F90CC', borderRadius: '0px 15px 15px 0px' }}><Button onClick={handleChange} name="patientType" value="Other" variant="text" sx={{ color: '#253143', fontSize: '20px', 'margin-top': '5px', textTransform: 'none', fontFamily: 'poppins' }}>Other</Button></div>

              {/* <input onChange={handleChange} name="sex" value={inputData.sex}className='top_tField' id='plain-field' ></input> */}
            </div>


            <div class="sub1">
              <par >
              Referred From
              </par>
              <input onChange={handleChange} name="referredFrom" value={patientName.referredFrom} className='top_tField' id='plain-field3' ></input>
              <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto',width:'22px'}}></img></button>

            </div>

            <div class="sub1">
              <par >
              Consultant
              </par>
              <input onChange={handleChange} name="consultant" value={patientName.consultant} className='top_tField' id='plain-field3' ></input>
              <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto',width:'22px'}}></img></button>

            </div>

            <div class="sub1">
              <par >
              Admission Date & Time
              </par>
              <div style={{display:'flex'}}>
              <input onChange={handleChange} name="Date" value={patientName.Date} className='top_tField' id='plain-field2'  ></input>
              <button type='submit' className='btnUi' style={{'border-top-right-radius':'0px','border-bottom-right-radius':'0px'}}><DateRangeIcon sx={{color:'#EEEEEE',width:'auto',height:'30px'}}/></button>

              </div>
              <div style={{display:'flex'}}>
              <input onChange={handleChange} name="Time" value={patientName.Time} className='top_tField' id='plain-field2' style={{'border-top-left-radius':'0px','border-bottom-left-radius':'0px'}} ></input>
              <button type='submit' className='btnUi'><QueryBuilderIcon sx={{color:'#EEEEEE',width:'auto',height:'30px'}}/></button>

              </div>
            </div>
            </div>

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
            </form>
            </div>

            <div className="footer">
                <MainFooter />
            </div>

        </body>
    )
}
export default PatientRelativeDetails;