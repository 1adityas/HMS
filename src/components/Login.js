import React from 'react'
import bg from '../background.svg';
import nurse from '../Nurse.svg';
import './Login.css'
import logo from '../logo main.png';
import CardItem from './CardItem';
// import {ReactComponent as Back} from '../background.svg';

function Login() {
    return (
        <div className= "flex-container">
            <div className= "nav-bar">
              {/* <Navbar /> */}
            </div>
            <div className="heading">
            Welcome To Malad Jumbo COVID Hospital 
                   
            </div>
            <div className="buttons">
                <button>New Admission</button>
                <button>Ward Details</button>
            </div>

            <div className="cards">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
           <div className='footer'>
               {/* <Footer /> */}
           </div>

        </div>
    )  
       
}
export default Login;

{/* <div className='bgColor  page-container'>
<div className="flex-container" >            
    <div className='flex-item1'>
    <img src={logo} height={"80px"} width={"100%"} ></img>
    </div>
    <div className="flex-item2" >
        <img src ={bg}  height={"750vh"} width={"100%"} ></img>
    </div>
    <div > <CardItem /></div>

</div>

<div className='Nurse'>
    <img src={nurse} height={'85%'} width={'100%'}></img>
</div>
</div>
    
) */}