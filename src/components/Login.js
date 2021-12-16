import React from 'react'
import bg from '../background.svg';
import './Login.css'
import logo from '../logo main.png';
// import {ReactComponent as Back} from '../background.svg';
function Login() {

    return (
        <div>

        
        <div className="grid-container" >
            <div className="grid-item1" >
            <img src ={bg}  height={"700rem"} width={"100%"} ></img>
            </div>
            </div>

                <div className='logoItem'>
            <img src={logo} height={""} width={"auto"} ></img>
            {/* <img src={logo} height={"100px"} width={"auto"}></img> */}
            

            </div>


            </div>
       
    )

}
export default Login;



