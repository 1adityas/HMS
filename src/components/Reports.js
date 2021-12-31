import { Button } from '@mui/material';
import React, { useState } from 'react'
import Header from './Header.js'
import MainFooter from './MainFooter.js'
import './Reports.css'
import dropDown from '../awesome-caret-down.png';
import DateRangeIcon from '@mui/icons-material/DateRange';//for calendar
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


function Reports() {

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

    const [var1, setvar1] = useState(null);
    function handleEvent(event){
        setvar1({[event.target.name]:event.target.value})

    }
    console.log(patientName)
    return (
        <body  style={{ 'fontFamily': 'poppins' }}>

            <div>
                <Header />
            </div>
        
            <div >
                <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '32px', color: '#253143', marginBottom: '40px' }}>Reports</p>
            </div>
            <div style={{ textAlign: 'center', }}>
                <button onClick={handleEvent} value={var1} style={{'border-radius': '15px','height':'60px',
                    'borderRadius': "15px,15px,15px,15px", 'textAlign':'center', 'fontWeight': '400', 'fontSize':'20px', 'background-color': '#DEE1E5', 'marginBottom': '40px', 'width': "542px",'height':'60px',
                }}><span style={{ color: '#253143' }}>Click here to see more about</span><span style={{ color: '#506F90','textDecorationLine':'underline','marginLeft':'10px'}}>Mr. Shubham Kumar{var1}</span></button>
            </div>

            {/* <div>
                <Button variant="contained" style={{
                    borderRadius: '15px',
                    color: '#506F90', backgroundColor: '#E4E4E5', boxShadow: '#00000029'
                }}
                    sx={{ boxShadow: '5px 5px 15px #00000029;', 'text-transform': 'none', width: '210px', height: '60px', fontSize: '20px', fontWeight: '500' }} >Select All
                </Button>
            

            <div class="container">
            <div class="sub1">
              <par >
              Select Ward
              </par>
              <input onChange={handleChange} name="selectWard" value={patientName.selectWard} className='top_tField' id='plain-field3' ></input>
              <button type='submit' className='btnUi'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto',width:'22px'}}></img></button>

            </div>
            </div>

            </div> */}

            <div className='mainflex'>
                
            <Button variant="contained" style={{
                    borderRadius: '15px',
                    color: '#506F90', backgroundColor: '#E4E4E5', boxShadow: '#00000029'
                }}
                    sx={{ boxShadow: '5px 5px 15px #00000029;', 'text-transform': 'none', width: '210px', height: '60px', fontSize: '20px', fontWeight: '500' }} >Select All
            </Button>
                
            <div style={{ display: 'flex', 'align-items': 'center' }}>
            <input className='top_tField' placeholder='Select Test Name/Type'></input>
            <button type='submit' className='top-btn'><img src={dropDown} style={{ 'align-items': 'center', height: 'auto',width:'22px'}}></img>
            </button>
          </div>
                
                
            </div>


            <div>
                <MainFooter />
            </div>

        </body>
    )
}
export default Reports;