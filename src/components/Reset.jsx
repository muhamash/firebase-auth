/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { resetPassword } from '../firebase';

export default function Reset ()
{
  const navigate = useNavigate();
  const [ state, setState ] = React.useState( "" )
  
  const sendPasswordReset = async() =>
  {
    await resetPassword(state);
    navigate( '/login' );
  }
  return (
   <div className="flex flex-col p-4 justify-center items-center">
        <h1 className="text-3xl my-2">Reset Your Password</h1>
        <div>
            <input
                type="email"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
                placeholder="Enter email address"/>
             <button
                className="bg-black text-white p-1 rounded-md"
                onClick={() => sendPasswordReset()}>Send Password Reset Email</button>
        </div>
        <p>
            Don't you have an account?
            <NavLink to="/register" className="underline"> Register</NavLink>
        </p>
    </div>
  )
}
