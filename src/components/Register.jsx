/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { regEmailAndPassword } from '../firebase';

export default function Register ()
{
    const navigate = useNavigate();
    const [ state, setState ] = React.useState( {
        email: '',
        password: '',
    } );

    console.log(state)
    const handleSubmit = async( event ) =>
    {
        event.preventDefault();
        try
        {
            const user = await regEmailAndPassword( state.email, state.password );
            console.log(user);
            navigate('/login')
        }
        catch ( err )
        {
            console.log(err)
        }
        
    }
    return (
        <div className="flex flex-col p-4 justify-center items-center">
            <h1 className="text-3xl my-2">Register</h1>
            <form className="flex flex-col">
                <div className="my-1">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={ state.email }
                        onChange={ ( e ) =>
                        {
                            setState( ( prevState ) =>
                            ( {
                                ...prevState,
                                email: e.target.value
                            } ) )
                        } }
                        required
                        placeholder="Email address"
                        className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={ state.password }
                        onChange={ ( e ) =>
                        {
                            setState( prevState => ( {
                                ...prevState,
                                password: e.target.value
                            } ) )
                        } }
                        required
                        placeholder="Password"
                        className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
                    />
                </div>
                <button
                    type="submit"
                    onClick={ handleSubmit }
                    className="bg-black text-white p-1 rounded-md m-auto">
                    Register
                </button>
            </form>
            <p className="my-2">
                Already Have an Account? { ' ' }
                <NavLink to="/login" className="underline">
                    Sign In
                </NavLink>
            </p>
        </div>
    );
}
