import { useState } from "react"

export default function LoginPopup() {
  const [registering,setRegistering] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
  }

  return(
  <div className='login-modal width-100 height-100'>
    <form className='form-container justify-center display-flex'>
      <div className="display-flex justify-center">
        <img className='login-img width-50'src="../public/login-image.png" alt="Login Image" />
      </div>
      <label htmlFor="loginId">
        <b>Username/email</b>
      </label>
      <input type='text' name='loginId' id="loginId" placeholder="Enter Username/Email"></input>
      <label className="display-flex justify-between" htmlFor="password">
        <b>Password</b>
      </label>
      <input type='password' name='password' id="password" placeholder="Enter Password"></input>
      <button type="submit" onClick={handleLogin}>Login</button>
    </form>
  </div>
  )
}
