import { Button } from '@mui/material';
import React from 'react'
import Header from './Header.js'
import MainFooter from './MainFooter.js'

function HGT() {
    return (
        <body >

            <div>
                <Header />
            </div>

            <div className='flex2'>
                <p style={{ fontWeight: 'bold', fontSize: '28px', color: '#253143', marginTop: '40px' }}>HGT Sheet</p>
            </div>   


            <div class="wrapper">
              <div class="sub">
                <par >
                  HGT
                </par>
                <input className='top_tField' id='plain-field' ></input>
              </div>
              
              <div class="sub">
                <par >
                  Ketone
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>

              <div class="sub">
                <par >
                Insulin Requirement
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              <div class="sub">
                <par >
                Time
                  </par>
                  <input className='top_tField' id='plain-field' ></input>
              </div>
              </div>



            <div>
                <Button style={{'textTransform':'none','height':'60px','width':'192px','color':'#EEEEEE','marginLeft':'738px',
                'borderRadius':'15px','opacity':'1','boxShadow':'5px 5px 15px #00000029',
                'backgroundColor':'#506F90'}}>Submit</Button>
                <Button style={{'textTransform':'none','height':'60px','width':'192px','color':'#506f90','marginLeft':'60px',
                'borderRadius':'15px','opacity':'1','boxShadow':'5px 5px 15px #00000029','backgroundColor':'#EEEEEE'}}>Cancel</Button>
            </div>


            <div>
                <MainFooter />
            </div>

        </body>
    )
}
export default HGT;