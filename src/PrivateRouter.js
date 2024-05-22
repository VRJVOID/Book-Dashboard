import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
return <Component {...rest} />;
};

export default PrivateRoute;