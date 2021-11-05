import React from "react";
import './Header.css';
const Header = () =>{
    return(
        <nav>
            <div className='div-header'>
                <div id="back">
                    <button className="button-header">Dashboard</button>
                    <button className="button-header">Ward Details</button>
                    <button className="button-header">Patience Details</button>
                    <button className="button-header">Discharged Patience</button>
                    <button className="button-header">Laboratory & Imaging</button>
                </div>
            </div>
        </nav>
    )
}
export default Header;