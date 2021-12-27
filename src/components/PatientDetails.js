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
            
            <div>
                <Header/> 
            </div>
            
        <div className='flexcontainer'>                

            <div className='flex1'>
                <p style={{ fontWeight: 'bold', fontSize: '28px', color: '#253143',marginTop:'40px' }}>Admitted Patient Details</p>
            </div>

            <div className='flex2'>
                
                    <Button style={{'marginTop':'40px','borderRadius':'15px 0px 0px 15px','height':'60px','width':'213px','backgroundColor':'#506F90','color':'white','opacity':'1'}}>Admitted</Button>
                    <Button style={{'borderRadius':'0px 15px 15px 0px','height':'60px','width':'235px','border': '2px solid #506F90','color':'black','opacity':'1'}}>Discharged</Button>
            </div>

        </div>

            <div>
                <MainFooter />
            </div>
        </body>
        )
}
export default MsDashboard;