import React from 'react'
import './MsDashboard.css'
import Header from './Header.js'
import MainFooter from './MainFooter.js'


// import {ReactComponent as Back} from '../Assets/Images/background.svg';

//main-scren Dashboard

function MsDashboard() {


    return (
        //using body tag to get bg color
        <body>

            <div>
                <Header />
            </div>

            <div>

            </div>

            <div>
                <MainFooter />
            </div>
        </body>
    )
}
export default MsDashboard;