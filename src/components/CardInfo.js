import React, { useState } from 'react';
import './CardInfo.css';
import { Button } from '@mui/material';
import CustomizedMenus from './DropUp'
import { StyledEngineProvider } from '@mui/material/styles';

function CardInfo(){
    return(
    <body>
        <div className='containerr'>
            <div className='timeTop'>
                <p id='time'>09-Sep-2021 03:56 PM</p> {/** use api to call date and time */} 
            </div>
        <div className='Grid'>

            <div className='left'>
            <p id='lefttext' >
                Name
            </p>
            <p id='lefttext' >
                Code
            </p>
            <p id='lefttext' >
                Referred by
            </p>
            <p id='lefttext' >
                Consultant
            </p>
            <p id='lefttext' >
                Covid Status
            </p>
            <p id='lefttext' >
                Covid On Date
            </p>
            <p id='lefttext' >
                Vaccine Done
            </p></div>
            <div className='left2'>
            <p id='lefttext2' >
                Moblile
            </p>
            <p id='lefttext2' >
                Bed
            </p>
            <p id='lefttext2' >
               Ward
            </p>
            <p id='lefttext2' >
                Age
            </p>
            <p id='lefttext2' >
                Sex
            </p>
            
            </div>

            <div className='right'>
            <p id='righttext' >
                - Prateik Sunny Mhaske
            </p>
            <p id='righttext' >
                - Dem219299
            </p>
            <p id='righttext' >
                - 
            </p>
            <p id='righttext' >
                - Dr. Aatish gp Rathod
            </p>
            <p id='righttext' >
                - Positive
            </p>
            <p id='righttext' >
                - 10-Sep-2021
            </p>
            <p id='righttext' >
                - Yes Both
            </p>
            </div>
            <div className='right2'>
            <p id='righttext' >
                - 9004310500
            </p>
            <p id='righttext' >
                - BMC - bmc11
            </p>
            <p id='righttext' >
                - 1st
            </p>
            <p id='righttext' >
                - 25
            </p>
            <p id='righttext' >
                - M
            </p>
            </div>
        <div className='space'>

        </div>
        <Button variant="contained" style={{
            gridColumn:'2/5',
            gridRow:'7',
            marginRight:'100px',
              borderRadius: '12px',
              color: '#EEEEEE', backgroundColor: '#506F90', boxShadow: '#00000029',
                // marginLeft:'200px'
            }}
              sx={{ boxShadow: '5px 5px 15px #00000029;', 'text-transform': 'none', width: '160px', height: '50px', fontSize: '20px', fontWeight: '500' }} >Daily Rounds
            </Button>
        {/* <CustomizedMenus /> */}
        </div>
        </div>
        
        
        


    </body>

    )
}


export default CardInfo;