// import React from 'react'
import './NewAdmission.css'
import './MsDashboard.css'
// maybe make a new footer css file.
// import Header from './Navbar.js'
import MainFooter from './MainFooter.js'

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {BrowserRoute as Router , Switch, Route,Link} from "react-router-dom";
import { display, padding } from '@mui/system';
import magnifying from '../Magnifying_glass.png';


// import {ReactComponent as Back} from '../background.svg';

//main-scren Dashboard

function NewAdmission() {
    return (
      
    //using body tag to get bg color
        <body>
            
            {/* <nav>
            <Header/> 
            </nav> */}
            
            <div>
            <p style={{border:'2px dashed', textAlign:'center',fontWeight:'bold', fontSize:'28px', color:'#253143',marginBottom:'40px'}}>New Admission</p>
            
            <div className='top-flex'>

              <p style={{marginRight:'10px',fontSize:'22px'}}>Already a registered patient?</p>

              <div >
                <input className='top_tField' placeholder='Search using mobile no. or name'></input>
                <button type='submit' className='top-btn'><img src={magnifying} style={{backgroundColor:'#6F88A2',height:'20px'}}></img>
                </button>
              </div>
        </div>
        <hr></hr>
        {/* created new tag par ..  */}
            <div class="wrapper">
              <div class="sub">
                <par >
                  First Name
                </par>
                <input className='top_tField' id='plain-field' ></input>
              </div>
              
              <div class="sub">
                <par >
                    Middle Name
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                    Last Name
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Mobile No.
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Date of Birth
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Age
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Email Id
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">Four</div>
              <div class="sub">Five</div>
              <div class="sub">
                <par >
                    Address
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Pincode
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">Six</div>
              <div class="sub">
                <par >
                    City
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    State
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Country
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                    Blood Group
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Sex
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Marital Status
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                    Religion
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Choose Document
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">Six</div>
              <div class="sub">
                <par >
                    First Name Of The Relative
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                Last Name Of The Relative
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Relation To Patient
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                    Contact No
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">Six</div>
              <div class="sub">Six</div>

              <div class="sub">
                <par >
                Patient Type
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Referred From
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Consultant Preferred
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Ward
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Bed
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">Six</div>

              <div class="sub">
                <par >
                Admission Date & Time
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>


              <div class="sub">Six</div>  
            </div>
              
            </div>
            <div>
            <MainFooter />
            </div>
             
            
        </body>
        )
}
export default NewAdmission;