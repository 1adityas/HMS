import React from 'react'
import bg from '../background.svg';
import nurse from '../Nurse.svg';
import './Login.css'
import logo from '../logo main.png';
// import {ReactComponent as Back} from '../background.svg';

function Login() {
    return (
    <div>
        <div className="flex-container" >            
            <div className='flex-item1'>
            <img src={logo} height={"80px"} width={"100%"} ></img>
            </div>

            <div className="flex-item2" >
                <img src ={bg}  height={"700vh"} width={"100%"} ></img>
            </div>

            <div className='nurseImg'>
            <img src={nurse}></img>
            </div>
            
        </div>
   </div>
    )
}
export default Login;