/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeu9kZx8-KS84L5JLQ3uB3IUWvi6g6Hzk",
  authDomain: "guestbook-1a69a.firebaseapp.com",
  projectId: "guestbook-1a69a",
  storageBucket: "guestbook-1a69a.appspot.com",
  messagingSenderId: "499108718336",
  appId: "1:499108718336:web:dd909b76d095ebc3ebf5e5"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
console.log( app )

// auth instance
const auth = getAuth( app );
console.log( auth )

const emailAndPassword = async ( email, password ) =>
{
    try
    {
        const response = await createUserWithEmailAndPassword( auth, email, password );
        const user = response.user
        console.log( "response", response, "user", user );
        return user;
    }
    catch ( error )
    {
        throw ( error );
    }
};

export { emailAndPassword };
