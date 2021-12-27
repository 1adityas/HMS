import React from 'react'
import './MsDashboard.css'
import Header from './Header.js'
import MainFooter from './MainFooter.js'
import { Button } from '@mui/material'
import './PatientDetails.css'

// import Button from '@mui/material/Button';


// import {ReactComponent as Back} from '../background.svg';

//main-scren Dashboard

function MsDashboard() {
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
            <div className='searchBar'>

                <button style={{ 'margin-top': "40px" }}  >Filter</button>
                <input style={{ 'margin-top': "40px", 'width': "490px" }} type="text" />
                <p style={{ 'margin-top': "40px" }}>Admission count:21</p>
            </div>


            <div>
                <MainFooter />
            </div>

        </body>
    )
}
export default MsDashboard;