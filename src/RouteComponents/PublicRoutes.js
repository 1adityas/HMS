import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../Store/Auth';

export const PublicOutlet = (props) => {
    const context = useContext(AuthContext)

    console.log(props)
    return context.isAuthenticated ? <Navigate to="/ChangeBedData" /> : <Outlet />;
}