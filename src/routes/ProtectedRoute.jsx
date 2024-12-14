import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
      const location = useLocation();
         const {user,loading} = useContext(AuthContext);
         if(loading){
            return <span className="loading loading-bars loading-lg"></span>
         }
         if(user){
            return children;
         }
    return (
       <Navigate to="/signIn" state={location?.pathname}></Navigate>
    );
};

export default ProtectedRoute;