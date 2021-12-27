// import React from 'react'
// import './MsDashboard.css'
import Header from './Header.js'
import MainFooter from './MainFooter.js'
import card1 from '../card1.svg'
import card2 from '../card2.svg'
import card3 from '../card3.svg'
import card4 from '../card4.png'
import card5 from '../card5.png'

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import  "./NewAdmission"

import {BrowserRoute as Router , Switch, Route,Link} from "react-router-dom";

// import {ReactComponent as Back} from '../background.svg';

//main-scren Dashboard

function MsDashboard() {

    var [b1Color, setb1Color] = useState('#EEEEEE');
    var [b2Color, setb2Color] = useState('#506F90');
    return (
        //using body tag to get bg color
        <body className="page-container">

            {/* <nav>
                <Header />
            </nav> */}

            <div className="content-wrap">
                <div>
                    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px', color: '#253143' }}>Welcome To Malad Jumbo COVID Hospital</p>

                    <Button variant="contained" style={{
                        marginRight: '60px', marginLeft: '38vw', borderRadius: '12px',
                        color: `${b1Color}`, backgroundColor: `${b2Color}`, boxShadow: '#00000029'
                    }}
                        sx={{ boxShadow: '5px 5px 15px #00000029;' }} onClick={() => { if (b1Color === '#EEEEEE') { setb2Color('#EEEEEE'); setb1Color('#506F90') };window.location.href='./NewAdmission.js';  }} >New Admission
                        </Button>

                    <Button variant="contained" style={{ color: `${b2Color}`, backgroundColor: `${b1Color}`, borderRadius: '12px', }} sx={{ boxShadow: '5px 5px 15px #00000029;' }} onClick={() => { if (b2Color === '#EEEEEE') { setb1Color('#EEEEEE'); setb2Color('#506F90') } }}>Ward Details</Button>
                    {/* hooks to be used for buttons */}
                </div>

                <div className="cards">
                    <div className="card cardAlignment" style={{ 'margin-left': '25%', 'marginTop': '25%' }}><img src={card1} style={{ 'width': "5vw" }} /> <p style={{'margin-top':'8px','fontWeight':'700','color':'#253143'}}>Hello</p><p style={{ 'margin': "0px",'fontWeight':'500','color':'#253143' }}>Hello</p> </div>
                    <div className="card cardAlignment" style={{ 'margin-left': '25%', 'marginTop': '25%' }}><img src={card2} style={{ 'width': "5vw" }} /> <p style={{'margin-top':'8px','fontWeight':'700','color':'#253143'}}>Hello</p><p style={{ 'margin': "0px",'fontWeight':'500','color':'#253143' }}>Hello</p></div>
                    <div className="card cardAlignment" style={{ 'margin-left': '25%', 'marginTop': '25%' }}><img src={card3} style={{ 'width': "3vw", 'padding-top': "15%" }} /> <p style={{'margin-top':'8px','fontWeight':'700','color':'#253143'}}>Hello</p><p style={{ 'margin': "0px",'fontWeight':'500','color':'#253143' }}>Hello</p></div>
                    <div className="card cardAlignment" style={{ 'margin-left': '88%', 'marginBottom': '25%' }}><img src={card4} /> <p style={{'margin-top':'8px','fontWeight':'700','color':'#253143'}}>Hello</p><p style={{ 'margin': "0px" ,'fontWeight':'500','color':'#253143'}}>Hello</p></div>
                    <div className="card cardAlignment" style={{ 'margin-left': '90%', 'marginBottom': '25%' }}><img src={card5} /> <p style={{'margin-top':'8px','fontWeight':'700','color':'#253143'}}>Hello</p><p style={{ 'margin': "0px" ,'fontWeight':'500','color':'#253143'}}>Hello</p></div>
                </div>
            <div className="footer">
                <MainFooter />
            </div>

</div>
        </body>
    )
}
export default MsDashboard;