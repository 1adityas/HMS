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

// import {ReactComponent as Back} from '../background.svg';

//main-scren Dashboard

function NewAdmission() {

    var [b1Color, setb1Color] = useState('#EEEEEE');
    var [b2Color, setb2Color] = useState('#506F90');
    return (
    //using body tag to get bg color
        <body>
            
            <nav>
            <Header/> 
            </nav>
            
            <div>
                <div>
            <p style={{border:'2px dashed', textAlign:'center',fontWeight:'bold', fontSize:'28px', color:'#253143'}}>New Admission</p>
            <div style={{ marginLeft:'40vh',fontWeight:'bold',opacity:'70%', fontSize:'15px', color:'#253143'}}><p>Already a registered patient?</p>
            <TextField
  label="With normal TextField"
  InputProps={{
      style:{border:'none'},
    endAdornment: (
        <IconButton>
          <SearchIcon />
        </IconButton>
    )
  }}
/>
            </div>

            
            <div class="wrapper">
            <div class="one">One</div>
            <div class="two">Two</div>
            <div class="three">Three</div>
            <div class="four">Four</div>
            <div class="five">Five</div>
            <div class="six">Six</div>
            </div>




            </div>

            <div className=".cards">
              <div className= "card"></div>
              <div className= "card"></div>
              <div className= "card"></div>
              <div className= "card"></div>
              <div className= "card"></div>
              

           </div>
            </div>


            

            <div>
            <MainFooter />
            </div>
             
            
        </body>
        )
}
export default NewAdmission;