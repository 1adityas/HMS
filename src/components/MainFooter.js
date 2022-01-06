import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import './Footer.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#253143"
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  function handleChange(event) {

    setValue({ [event.target.name]: event.target.value })
    console.log(value)


  }


  return (
    <div className="bottom-nav">
      <BottomNavigation
        style={{

          // 'position': 'absolute',
          // 'margin-top':"15px",
          'bottom': '0px',
          'height': "18vh"
          , 'font-weight': '100'
        }}

        showLabels
        className={classes.root} >



        <div style={{
          'padding': '15px',
          'color': "#EEEEEE",
          'text-align': "center",
          'height': "30%",

          'letter-spacing': "0px",
          'text-transform': "capitalize",
          'opacity': "1",
          'height': "15px",//nothing

          'font-family': "Poppins, sans-serif",
          'font-weight': "100",
          'font-style': "normal",
          'opacity': "1"

        }}>
          <a style={{textDecoration:"none"}} href='./ms-dashboard'><Button onClick={handleChange} name="Dashboard" value={value} style={{ color: 'white', fontSize: '13px', opacity: '.9', paddingRight: '22px' }}>Dashboard</Button></a>
          <Button onClick={handleChange} name="Ward Details" value={value} style={{ color: 'white', fontSize: '13px', opacity: '.9', paddingRight: '22px' }}>Ward Details</Button>
          <a style={{textDecoration:"none"}} href='PatientDetails'><Button onClick={handleChange} name="Patient Details" value={value} style={{ color: 'white', fontSize: '13px', opacity: '.9', paddingRight: '22px' }}>Patient Details</Button></a>
          <a style={{textDecoration: "none"}} href='Discharge'><Button onClick={handleChange} name="Discharged Patient" value={value} style={{ color: 'white', fontSize: '13px', opacity: '.9', paddingRight: '22px' }}>Discharged Patients</Button></a>
          <a style={{textDecoration:"none"}} href='./LabImg'><Button onClick={handleChange} name="Laboratory & Imaging" value={value} style={{ color: 'white', fontSize: '13px', opacity: '.9', paddingRight: '22px' }}>Laboratory & Imaging</Button></a>

          <br />
          <br />
          <p style={{ paddingTop: '15px', fontSize: '13px', opacity: '.9' }}>
            © 2021 Powered By Kenko Tech </p></div>
        <br />
      </BottomNavigation>
    </div>
  );
}