import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import '../App.css';
import LoginPopup from '../components/Login';

export async function loader() {
}

export default function Root() {
  const [loggingIn,setLoggingIn] = useState(false)
  return(
    <div className='background-orange'>
      {loggingIn && <LoginPopup />}
    <div className='title-container'>
      <Link to='page1'>Link to page</Link>
      <h1 className='title Oswald'>What Eat</h1>
    </div>

    </div>
  )
}
