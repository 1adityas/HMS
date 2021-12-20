// import React from 'react'
import './MsDashboard.css'
import Header from './Header.js'
import MainFooter from './MainFooter.js'

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// import {ReactComponent as Back} from '../background.svg';

//main-scren Dashboard

function MsDashboard() {

    var [b1Color, setb1Color] = useState('#EEEEEE');
    var [b2Color, setb2Color] = useState('#506F90');
    return (
    //using body tag to get bg color
        <body>
            
            <div>
            <Header/> 
            </div>
            
            <div>
                
            </div>

            <div>
            <MainFooter />
            </div>
             <Header/> 
             <p style={{border:'2px dashed', textAlign:'center',fontWeight:'bold', fontSize:'28px', color:'#253143'}}>Welcome To Malad Jumbo COVID Hospital</p>

             <Button variant="contained" style={{marginRight:'60px',marginLeft:'38vw',borderRadius: '12px',
                 color:`${b1Color}`,backgroundColor:`${b2Color}`,boxShadow:'#00000029'}} 
                 sx={{ boxShadow: '5px 5px 15px #00000029;' }} onClick={()=>{if(b1Color==='#EEEEEE'){setb2Color('#EEEEEE');setb1Color('#506F90')}}} >New Admission</Button>

             <Button variant="contained" style={{color:`${b2Color}`,backgroundColor:`${b1Color}`,borderRadius: '12px',}} sx={{ boxShadow: '5px 5px 15px #00000029;' }} onClick={()=>{if(b2Color==='#EEEEEE'){setb1Color('#EEEEEE');setb2Color('#506F90')}}}>Ward Details</Button>
{/* hooks to be used for buttons */}
        </body>
        )
}
export default MsDashboard;