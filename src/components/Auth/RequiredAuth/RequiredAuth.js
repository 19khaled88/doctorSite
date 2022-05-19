import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import auth from '../firebase.init';

const RequiredAuth = ({children}) => {
    const [ user, loading, error ] = useAuthState(auth);
    let location = useLocation()
    let navigate = useNavigate()

    if(loading){
        return (
            <div className="flex flex-row mt-28 mx-auto justify-center items-center">
                <Loading />
            </div>
        ) 
    }
    if(!user){
        return <Navigate to="/register" state={{from:location}} replace />;
    }
  return children
}

export default RequiredAuth;
