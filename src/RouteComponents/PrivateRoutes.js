import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../Store/Auth';

export const PrivateOutlet = (props) => {
  const context = useContext(AuthContext)

  console.log(props)
  return context.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}