import React, { Component } from "react";
import Router from './Router'
import cookies from "js-cookie";
import AuthContext from "./Store/Auth";


class ContentStoreController extends Component {
    state = {
        isAuthenticated: false
    };

    componentWillMount = () => {
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


    render() {
        return (
            <AuthContext.Provider value={this.state}>
                <Router/>
            </AuthContext.Provider>
        );
    }
}


export default ContentStoreController
