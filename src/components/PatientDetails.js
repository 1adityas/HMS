import React from 'react'
import './MsDashboard.css'
import Header from './Header.js'
import MainFooter from './MainFooter.js'
import { Button } from '@mui/material'
import './PatientDetails.css'
import magnifying from '../Magnifying_glass.png';
import PatientCard from './PatientCard'

// import Button from '@mui/material/Button';


// import {ReactComponent as Back} from '../background.svg';

//main-scren Dashboard

function PatientDetails() {
    return (
        //using body tag to get bg color
        <body >

            <div className='flex1'>
                <Header />
            </div>



            <div className='flex2'>
                <p style={{ fontWeight: 'bold', fontSize: '28px', color: '#253143', marginTop: '40px' }}>Admitted Patient Details</p>
            </div>

            <div className='flex3'>

                <Button style={{ 'marginTop': '40px', 'borderRadius': '15px 0px 0px 15px', 'height': '60px', 'width': '213px', 'backgroundColor': '#506F90', 'color': 'white', 'opacity': '1' }}>Admitted</Button>
                <Button style={{ 'marginTop': '40px', 'borderRadius': '0px 15px 15px 0px', 'height': '60px', 'width': '235px', 'border': '2px solid #506F90', 'color': 'black', 'opacity': '1' }}>Discharged</Button>
            </div>
            <div className='flex1'>
                <p style={{'fontWeight':'500','fontSize':'22px','margin-top': "40px", 'float': "left", }}>Admission count :<span style={{'fontWeight':'700'}}> 21</span></p>
                <button style={{'fontWeight':'500','color': '#506F90','fontSize':'20px','marginLeft':'65px','margin-top': "40px", 'float': "left"}}>Filter</button>

                {/* <input style={{ 'margin-top': "40px",  'width':"490px",'height':"60px", 'border':"2px solid #6f88a2"}} type="text" /> */}
                
                <div >
                <input className='top_tField' placeholder='Search using mobile no. or name'></input>
                <button style={{'margin-top':'40px'}} type='submit' className='top-btn'><img src={magnifying} style={{backgroundColor:'#6F88A2',height:'20px'}}></img>
                </button>
                </div>

            </div>

            <div>
                <PatientCard/>
            </div>


            <div>
                <MainFooter />
            </div>

        </body>
    )
}
export default PatientDetails;