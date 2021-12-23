import React from 'react'
import bg from '../background.svg';
import nurse from '../Nurse.svg';
import './Login.css'
import logo from '../logo main.png';
import CardItem from './CardItem';
// import {ReactComponent as Back} from '../background.svg';

function Login() {
    return (
        <div className='bgColor  page-container'>
        <div className="flex-container" >            
            <div className='flex-item1'>
            <img src={logo} height={"80px"} width={"100%"} ></img>
            </div>
            <div className="flex-item2" >
                <img src ={bg}  height={"750vh"} width={"100%"} ></img>
            </div>
            <div > <CardItem /></div>
       
        </div>
        {/* flex terminate */}
        <div className='Nurse'>
            <img src={nurse} height={'85%'} width={'100%'}></img>
        </div>
        </div>
            
    )
}
export default Login;