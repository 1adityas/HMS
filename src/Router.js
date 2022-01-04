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
import WardDetails from './components/WardDetails';
import AuthContext from './Store/Auth';
import { PrivateOutlet } from './RouteComponents/PrivateRoutes';
import { PublicOutlet } from './RouteComponents/PublicRoutes';


export default function Router(props) {
    return (
        <AuthContext.Consumer>
            {(context) => (
                <BrowserRouter>
                    <Routes>
                        {/* <Route path="/NavBar" element= {<NavBar />}/> */}
                        <Route path="" element={<PublicOutlet context={context} />}>
                            <Route path="/" element={<Login context={context} />} />
                        </Route>
                        <Route path="" element={<PrivateOutlet />}>
                            <Route path="/ChangeBedData" element={<ChangeBedData context={context} />} />
                            <Route path="/MsDashboard" element={<MsDashboard context={context} />} />
                            <Route path="/NewAdmission" element={<NewAdmission context={context} />} />
                            <Route path="/InitialAssessment" element={<InitialAssessment context={context} />} />
                            <Route path="/LabImg" element={<LabImg context={context} />} />
                            <Route path="/PatientDetails" element={<PatientDetails context={context} />} />
                            <Route path="/HGT" element={<HGT context={context} />} />
                            <Route path="/DailyRounds" element={<DailyRounds context={context} />} />
                            <Route path="/ChangeBed" element={<ChangeBed context={context} />} />
                            <Route path="/ward-details" element={<WardDetails context={context} />} />
                            <Route path="/PatientRelativeDetails" element={<PatientRelativeDetails context={context} />} />
                            <Route path="/Reports" element={<Reports context={context} />} />
                            <Route path="/ChangeBedData" element={<ChangeBedData context={context} />} />
                            <Route path="/HGTData" element={<HGTData context={context} />} />
                            {/* <Route path="/Lab" element={<Lab />} /> */}
                            <Route path="/ReportData" element={<ReportData context={context} />} />
                            <Route path="/InitialAssessment" element={<InitialAssessment context={context} />} />
                            <Route path="/Discharge" element={<Discharge context={context} />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            )}
        </AuthContext.Consumer>
    )
}
