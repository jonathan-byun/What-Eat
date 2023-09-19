import {Link} from 'react-router-dom'
import { useEffect, useState, useCallback, createContext } from 'react';
import '../App.css';
import LoginPopup from '../components/Login';

export default function Root() {
  const [loggingIn,setLoggingIn] = useState(false);

  function toggleLogin() {
    setLoggingIn(!loggingIn);
  }

  return(
    <div className='background-brown width-100 height-100'>
      {loggingIn && <LoginPopup />}
    <div className='title-container'>
      <Link to='page1'>Link to page</Link>
      <h1 className='title Oswald'>What Eat</h1>
    </div>
    <div className='display-flex justify-center'>
      <button className='login-popup-button'>Log In</button>
    </div>
    </div>
  )
}
