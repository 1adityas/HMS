import React, { useContext } from 'react';
import MsDashboard from './components/MsDashboard'
import PatientDetails from './components/PatientDetails'
// import NavBar from './components/Header'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// import Header from './components/Header'
import Login from './components/Login'
// import Footer from './components/Footer'
// import CardItem from './components/CardItem'
import NewAdmission from './components/NewAdmission';
import HGT from './components/HGT';
import ChangeBed from './components/ChangeBed';
import PatientRelativeDetails from './components/PatientRelativeDetails';
import Reports from './components/Reports';
import ChangeBedData from './components/ChangeBedData';
import HGTData from './components/HGTData';
import LabImg from './components/LabImg'
import ReportData from './components/ReportData'
import InitialAssessment from './components/InitialAssessment'
import Discharge from './components/Discharge'
import DailyRounds from './components/DailyRounds';
import { PrivateOutlet } from './RouteComponents/PrivateRoutes';
import { PublicOutlet } from './RouteComponents/PublicRoutes';


export default function Router(props) {
    return (

        <BrowserRouter>
            <Routes>
                {/* <Route path="/NavBar" element= {<NavBar />}/> */}
                <Route path="" element={<PublicOutlet />}>
                    <Route path="/" element={<Login />} />
                </Route>
                <Route path="" element={<PrivateOutlet />}>
                    <Route path="/ChangeBedData" element={<ChangeBedData />} />
                    <Route path="/MsDashboard" element={<MsDashboard />} />
                    <Route path="/NewAdmission" element={<NewAdmission />} />
                    <Route path="/InitialAssessment" element={<InitialAssessment />} />
                    <Route path="/LabImg" element={<LabImg />} />

                    <Route path="/PatientDetails" element={<PatientDetails />} />
                    <Route path="/HGT" element={<HGT />} />
                    <Route path="/DailyRounds" element={<DailyRounds />} />
                    <Route path="/ChangeBed" element={<ChangeBed />} />
                    <Route path="/PatientRelativeDetails" element={<PatientRelativeDetails />} />
                    <Route path="/Reports" element={<Reports />} />
                    <Route path="/ChangeBedData" element={<ChangeBedData />} />
                    <Route path="/HGTData" element={<HGTData />} />
                    {/* <Route path="/Lab" element={<Lab />} /> */}
                    <Route path="/ReportData" element={<ReportData />} />
                    <Route path="/InitialAssessment" element={<InitialAssessment />} />
                    <Route path="/Discharge" element={<Discharge />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
