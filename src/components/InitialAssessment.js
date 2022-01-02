import { Button } from '@mui/material';
import React, { useState } from 'react'
import Header from './Header.js'
import MainFooter from './MainFooter.js'

import './InitialAssessment.css'
import dropDown from '../awesome-caret-down.png';
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



//importing the files whose classes are used.
// import './PatientDetails.css'
// import './NewAdmission.css'

function InitialAssessment() {

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
                    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '32px', color: '#253143', marginBottom: '40px' }}>Initial Assessment</p>
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
                            <input onChange={handleChange} name="selectWard" value={patientName.selectWard} className='top_tField' id='plain-field3' ></input>
                            <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto', width: '22px' }}></img></button>

                        </div>
                        <div class="sub1">
                            <par >
                                Travel History
                            </par>
                            <input style={{ 'border-radius': "15px" }} onChange={handleChange} name="selectBed" value={patientName.selectBed} className='top_tField' id='plain-field3' ></input>


                        </div>

                    </div>
                </form>
                <div>
                    <p style={{'background-color': "#6F88A2",textAlign:"center",'border-radius': "15px 15px 0px 0px"}}>Vitals</p>
                    <Vitals/>
                </div>
                
                <div style={{ 'margin': "40px 70px 40px 70px", 'width': "1780px" }}>
                    <p style={{ 'padding-top': "15px", 'font-size': '22px', 'background-color': "#6F88A2", 'text-align': "center", 'height': "60px", 'color': "#EEEEEE", 'border-radius': "15px 15px 0px 0px" }}> History & Habits <Button style={{
                        'background-color': "#EEEEEE", 'color': "#6F88A2", 'float': "right", 'border-radius': "10px", 'margin': "11px 60px 11px 0px"
                    }}><span style={{ 'font -size': '20px' }}>+ Add</span></Button></p>
                    <HistoryHabitsDataGrid />
                </div>
                <div>
                    <CoMorbidities />
                </div>
                <div>
                    <Allergy />
                </div>
                <div>
                    <Surgery/>
                </div>
                <div>
                    <Symptoms />
                </div>
                <div>
                    <CovidStatus />
                </div>
            </div>





            <div className="footer">
                <MainFooter />
            </div>

        </body>
    )
}
export default InitialAssessment;
