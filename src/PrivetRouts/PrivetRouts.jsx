import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Component/Spinner';
import { UserAuth } from '../contex/AuthProvider';

const PrivetRouts = ({children}) => {
    const {user,loading} = useContext(UserAuth)
   const location = useLocation()
    if(loading){
        return <Spinner/>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivetRouts;