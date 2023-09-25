import { useState } from 'react';

export default function LoginPopup({ toggleLogin }) {
  const [registering, setRegistering] = useState(false);
  const [useEmailForUser, setUseEmailForUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  function handleSubmit(e) {
    e.preventdefault();
    const userData = {
      userName: userName,
      email: email,
      password: password,
    };
    if (registering) {
      fetch(`/api/registerUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }).then((res) => res.json());
    }
  }

  function handleClose(e) {
    if (e.target.id == 'login-modal') {
      toggleLogin();
    }
  }

  return (
    <div
      id="login-modal"
      className="modal width-100 height-100 display-flex justify-center align-center"
      onClick={handleClose}>
      <form className="modal-content">
        <div className="login-imgcontainer">
          <img
            src="/login-image.png"
            alt="Login Image"
            className="login-img"></img>
        </div>
        <div className="container">
          <label htmlFor="loginId border-solid">
            <input
              type="text"
              value={email}
              name="loginId"
              id="loginId"
              placeholder="Email"
              className="login-input"
              onChange={(e) => setEmail(e.value)}
              required></input>
          </label>
          {registering && (
            <>
              {!useEmailForUser && (
                <label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.value)}
                    name="loginId-Username"
                    id="loginId-Username"
                    placeholder="Username"
                    className="login-input"
                    required></input>
                </label>
              )}

              <label>
                <input
                  type="checkbox"
                  name="emailForUser"
                  id="emailForUser"
                  checked={useEmailForUser}
                  onChange={() =>
                    setUseEmailForUser(!useEmailForUser)
                  }></input>{' '}
                Use Email for Username?
              </label>
            </>
          )}
          <label htmlFor="password">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.value)}
              name="password"
              id="password"
              placeholder="Password"
              className="login-input"
              required></input>
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
            className="login-button width-100">
            {registering ? 'Register' : 'Login'}
          </button>
        </div>
        <div className="container background-grey display-flex justify-between">
          <button type="reset" className="close-button" onClick={toggleLogin}>
            Close
          </button>
          <div>
            {registering
              ? 'Already have an account?'
              : "Don't have an account?"}
            <button
              type="reset"
              className="register-login-button"
              onClick={() => setRegistering(!registering)}>
              {registering ? 'Login Page' : 'Register'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
