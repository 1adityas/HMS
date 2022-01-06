// import React from 'react'
// import './MsDashboard.css'
import Header from './Header.js'
import MainFooter from './MainFooter.js'
import card1 from '../Assets/Images/card1.svg'
import card2 from '../Assets/Images/card2.svg'
import card3 from '../Assets/Images/card3.svg'
import card4 from '../Assets/Images/card4.png'
import card5 from '../Assets/Images/card5.png'

import React, { useState, useContext, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./NewAdmission"
import { Col, Row } from 'react-bootstrap'
import { Container } from '@mui/material'
import AuthContext from '../Store/Auth'
import { log } from '../helperFunctions.js'
import cookies from 'js-cookie'
import { COOKIES_CONSTANTS } from '../constants.js'

// import {ReactComponent as Back} from '../Assets/Images/background.svg';

//main-scren Dashboard

function MsDashboard() {
    const context = useContext(AuthContext)
    const token = cookies.get(COOKIES_CONSTANTS.TOKEN)

    useEffect(async () => {

        let response = await context.getMasterData(token)
        log("response", response)

    }, [])

    var [b1Color, setb1Color] = useState('#EEEEEE');
    var [b2Color, setb2Color] = useState('#506F90');
    const [data, setData] = useState({
        newAdmission: "",
        admitted: "",
        discharged: "",
        icu: "",
        deaths: ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setData(prevInputData => ({ ...prevInputData, [name]: value }))
    }

    return (
        //using body tag to get bg color
        <body className="page-container">

            <nav>
                <Header />
            </nav>

            <div className="content-wrap">
                <div>
                    <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px', color: '#253143' }}>Welcome to the Dashboard</p>

                    <Row>
                        <Col className='d-flex justify-content-end'>
                            <Button variant="contained" style={{
                                color: `${b1Color}`, backgroundColor: `${b2Color}`, boxShadow: '#00000029', borderRadius: '12px'
                            }}
                                sx={{ boxShadow: '5px 5px 15px #00000029;' }} onClick={() => { if (b1Color === '#EEEEEE') { setb2Color('#EEEEEE'); setb1Color('#506F90') }; window.location.href = '/new-admission'; }} >New Admission
                            </Button>
                        </Col>
                        <Col className='d-flex justify-content-start'>
                            <Button variant="contained" style={{ color: `${b2Color}`, backgroundColor: `${b1Color}`, borderRadius: '12px', }} sx={{ boxShadow: '5px 5px 15px #00000029;' }} onClick={() => { if (b2Color === '#EEEEEE') { setb1Color('#EEEEEE'); setb2Color('#506F90') } }}>Ward Details</Button>
                        </Col>
                    </Row>
                </div>

                <Container style={{ padding: "9vw", paddingTop: "4vw" }}>
                    <div className="cards">
                        <Col style={{ padding: "40px" }} >
                            <Row style={{ marginBottom: "40px" }}>
                                <Col className='d-flex justify-content-center'><div className="card cardAlignment" ><img src={card1} style={{ 'width': "5vw" }} /> <p style={{ 'margin-top': '8px', 'fontWeight': '700', 'color': '#253143' }}>0</p><p style={{ 'margin': "0px", 'fontWeight': '500', 'color': '#253143' }}>New Admissions</p> </div></Col>
                                <Col className='d-flex justify-content-center'><div className="card cardAlignment" ><img src={card2} style={{ 'width': "5vw" }} /> <p style={{ 'margin-top': '8px', 'fontWeight': '700', 'color': '#253143' }}>0</p><p style={{ 'margin': "0px", 'fontWeight': '500', 'color': '#253143' }}>Admitted</p></div></Col>
                                <Col className='d-flex justify-content-center'><div className="card cardAlignment" ><img src={card3} style={{ 'width': "3vw", 'padding-top': "15%" }} /> <p style={{ 'margin-top': '8px', 'fontWeight': '700', 'color': '#253143' }}>0</p><p style={{ 'margin': "0px", 'fontWeight': '500', 'color': '#253143' }}>Discharged</p></div></Col>
                            </Row>
                            <Row>
                                <Col className='d-flex justify-content-end' style={{ marginRight: '20px' }}><div className="card cardAlignment" ><img src={card4} /> <p style={{ 'margin-top': '8px', 'fontWeight': '700', 'color': '#253143' }}>0</p><p style={{ 'margin': "0px", 'fontWeight': '500', 'color': '#253143' }}>ICU</p></div></Col>
                                <Col className='d-flex justify-content-start' style={{ marginLeft: '20px' }}><div className="card cardAlignment" ><img src={card5} /> <p style={{ 'margin-top': '8px', 'fontWeight': '700', 'color': '#253143' }}>0</p><p style={{ 'margin': "0px", 'fontWeight': '500', 'color': '#253143' }}>Deaths</p></div></Col>
                            </Row>
                        </Col>

                    </div>
                </Container>
                <div className="footer">
                    <MainFooter />
                </div>

            </div>
        </body>
    )
}
export default MsDashboard;