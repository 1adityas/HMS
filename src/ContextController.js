import React, { Component } from "react";
import Router from './Router'
import cookies from "js-cookie";
import AuthContext from "./Store/Auth";
import { login, requestHook } from './requestHooks'
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
