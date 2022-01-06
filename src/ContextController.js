import React, { Component } from "react";
import Router from './Router'
import cookies from "js-cookie";
import AuthContext from "./Store/Auth";
import { getGender, getPincode, login, newAdmission, requestHook } from './requestHooks'
import { log } from "./helperFunctions";
import { COOKIES_CONSTANTS } from "./constants";


class ContentStoreController extends Component {
    state = {
        isAuthenticated: false,
    };



    componentWillMount = async () => {
        this.updateLoginStatus();
    };

    updateLoginStatus = () => {
        const token = cookies.get("token");
        if (token === undefined) {
            this.setState({
                isAuthenticated: false,
            });
        } else {
            this.setState({
                isAuthenticated: true,
            });
        }
    };

    getMasterData = async (payload, token) => {
        try {
            let headers = { Authorization: token }
            let genderResponse = await getGender({}, headers)
            let pincodeResponse = await getPincode({}, headers)
            let response = { genderResponse: genderResponse.data, pincodeResponse: pincodeResponse.data }
            return response
        } catch (error) {
            return error
        }
    }

    getWardsAndWardBedIds = async (payload, token) => {
        try {
            let headers = { Authorization: token }
            let genderResponse = await getGender({}, headers)
            let pincodeResponse = await getPincode({}, headers)
            let response = { genderResponse: genderResponse.data, pincodeResponse: pincodeResponse.data }
            return response
        } catch (error) {
            return error
        }
    }
    addNewAdmission = async (payload, token) => {
        try {
            payload = {
                "firstName": "Patient",
                "middlename": "",
                "lastName": "",

                "mobile": 9898989898,
                "dob": "1988-09-09",
                "emailId": "",
                "address": "",
                "pincodeMaster": {
                    "id": 1
                },
                "bloodGroupMaster": {
                    "id": 1
                },
                "genderMaster": {
                    "id": 1
                },
                "maritalMaster": {
                    "id": 1
                },
                "religionMaster": {
                    "id": 1
                },
                "documentTypeMaster": {
                    "id": 1
                },
                "documentNumber": "",
                "admittedByFirstName": "Relative",
                "admittedByLastName": "",
                "admittedByRelationMaster": {
                    "id": 1
                },
                "admittedByContactNumber": "",
                "patientTypeMaster": {
                    "id": 1
                },
                "hospitalUserMapping": {
                    "id": 1
                },
                "hospitalWards": {
                    "id": 2
                },
                "hospitalWardBeds": {
                    "id": 2
                },
                "countryCodeMobileMaster": {
                    "id": 1
                }
            }
            let headers = { Authorization: token }
            let response = await newAdmission(payload, headers)
            return response
        } catch (error) {
            return error
        }
    }

    loginUser = async ({ username, password }) => {
        try {
            let response = await login({ username, password })
            let { token } = response.data.data
            cookies.set(COOKIES_CONSTANTS.TOKEN, token)
            token && this.updateLoginStatus()
            return response
        } catch (error) {
            return error
        }
    }

    logOutUser = () => {
        try {
            cookies.remove(COOKIES_CONSTANTS.TOKEN)
            this.updateLoginStatus()
        } catch (error) {
            return error
        }
    }

    render() {
        const {
            isAuthenticated
        } = this.state
        return (
            <ContextControllerJSX
                isAuthenticated={isAuthenticated}
                updateLoginStatus={this.updateLoginStatus}
                loginUser={this.loginUser}
                logOutUser={this.logOutUser}
                getMasterData={this.getMasterData}
                addNewAdmission={this.addNewAdmission}
            />
        );
    }
}



export const ContextControllerJSX = (props) => {
    return (
        <AuthContext.Provider value={props}>
            <Router />
        </AuthContext.Provider>
    )
}


export default ContentStoreController
