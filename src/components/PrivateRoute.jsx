// import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase';

export default function PrivateRoute ()
{
    // const navigate = useNavigate();
    const [ user, loading, error ] = useAuthState( auth );
    if ( loading ) return <p>loading</p>
    if ( error ) return <p>{ error }</p>
    return (
        <div>
          
            { user ? <Outlet /> : <Navigate to={ '/login' } /> }
        </div>
    );
}
