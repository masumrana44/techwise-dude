import React from 'react';
import { useContext } from 'react';
import { ShareContext } from '../Contexts/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let location=useLocation();

    const {user}=useContext(ShareContext);
    if(!user){
      return<Navigate to='/login' state={{from:location}} replace/>
    }
    return children;

};

export default PrivateRoute;