import { useState } from "react"

export default function LoginPopup({toggleLogin}) {
  const [registering,setRegistering] = useState(false);

  function handleSubmit(e) {
    e.preventdefault();

  }

  function handleClose(e) {
    if (e.target.id == 'login-modal') {
      toggleLogin()
    }
  }

  return(
  <div id="login-modal" className='modal width-100 height-100' onClick={handleClose}>
    <form className="modal-content">
      <div className="login-imgcontainer">
        <img src="../public/login-image.png" alt="Login Image" className="login-img"></img>
      </div>
      <div className="container">
        <label htmlFor="loginId border-solid">
          <input type='text' name='loginId' id="loginId" placeholder="Username/Email" className="login-input" required></input>
        </label>
        <label htmlFor="password">
          <input type='password' name='password' id="password" placeholder="Password" className="login-input" required></input>
        </label>
        <button type="submit" onClick={handleSubmit} className="login-button width-100">Login</button>
      </div>
      <div className="container background-grey">
        <button type="reset" className="close-button" onClick={toggleLogin}>Close</button>
      </div>
    </form>
  </div>
  )
}
