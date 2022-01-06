import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../Store/Auth';

export const PublicOutlet = (props) => {
    const context = useContext(AuthContext)
    return context.isAuthenticated ? <Navigate to="/ms-dashboard" /> : <Outlet />;
}