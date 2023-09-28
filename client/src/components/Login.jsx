import { useState } from 'react';

export default function LoginPopup({ toggleLogin }) {
  const [registering, setRegistering] = useState(false);
  const [useEmailForUser, setUseEmailForUser] = useState(true);
  const [useUsername, setUseUsername] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const userData = registering
      ? {
          userName: useEmailForUser ? email : userName,
          email: email,
          password: password,
        }
      : {
          loginId: useUsername ? userName : email,
          password: password,
          usingUsername: useUsername,
        };
    if (registering) {
      fetch(`/api/registerUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            alert(data.error);
          }
        });
    } else {
      fetch(`/api/loginUser`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
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
      <form className="modal-content flex-direction-column">
        <div className="login-imgcontainer">
          <img
            src="/login-image.png"
            alt="Login Image"
            className="login-img"></img>
        </div>
        <div className="container">
          {useUsername ? (
            <label>
              Username
              <input
                value={userName}
                id="loginId"
                className="login-input"
                onChange={(e) => setUserName(e.target.value)}></input>
            </label>
          ) : (
            <label>
              Email
              <input
                value={email}
                id="loginId"
                className="login-input"
                onChange={(e) => setEmail(e.target.value)}></input>
            </label>
          )}

          {registering ? (
            <>
              {!useEmailForUser && (
                <label>
                  UserName:
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    name="loginId-Username"
                    id="loginId-Username"
                    className="login-input"
                    required></input>
                </label>
              )}
              <div className="display-flex justify-right">
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
              </div>
            </>
          ) : (
            <div className="display-flex justify-right">
              <button
                type="button"
                onClick={() => setUseUsername(!useUsername)}>
                {useUsername ? 'Use Email' : 'Use Username'}
              </button>
            </div>
          )}
          <label htmlFor="password" className="display-block">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              className="login-input"
              required></input>
          </label>
          <button
            type="button"
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
