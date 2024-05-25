import { signOut } from 'firebase/auth';
// import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';


export default function Home ()
{
  const navigate = useNavigate();
  const [ user, loading, error ] = useAuthState( auth );

  if ( loading ) return <p>loading...</p>;
  if ( error ) return <p>{ error }</p>;

  const handleLogout = () =>
  {
    signOut( auth ).then( () =>
    {
      navigate( '/login' );
    } )
      .catch( error )
    {
      console.log(error)
    }
  }

  return (
     <>
      <div>Welcome, {user.email}</div>
      <button
        className='bg-black text-white tounded p-1'
        onClick={handleLogout}>Logout</button>
    </>
  )
}
