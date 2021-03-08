import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from './Navbar.jsx';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

const Login = (props) => {
  const [username, usernameOnChange] = useInput('');
  const [password, passwordOnChange] = useInput('');
  const [usernameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const loginUser = () => {
    // check if name is empty
    if (username === '') {
      setUserNameError('required');
    } else if (password === '') {
      setPasswordError('required');
    } else {
      const body = {
        username,
        password,
      };
      fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify(body),
      })
        .then((resp) => resp.json())
        .then((data) => {
          //console.log(321321, data);
        })
        .then(() => {
          props.history.push('/feed');
          // history.push('/hello');
        })
        .catch((err) => console.log('Login fetch /auth/login: ERROR: ', err));
    }
  };

  // useEffect to clear nameError when `name` is changed
  useEffect(() => {
    setUserNameError(null);
  }, [username]);

  useEffect(() => {
    setPasswordError(null);
  }, [password]);

  return (
    <section className="">
      <Navbar />
      <div className="Login">
        <article className="card createChar">
          <div className="createCharFields">
            <label htmlFor="username">Name: </label>
            <input
              name="username"
              value={username}
              onChange={usernameOnChange}
            />
            {usernameError ? (
              <span className="errorMsg">{usernameError}</span>
            ) : null}
          </div>
          <div className="createCharFields">
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={passwordOnChange}
            />
            {passwordError ? (
              <span className="errorMsg">{passwordError}</span>
            ) : null}
          </div>
          <div className="signup">
            <Link to="/signup" className="link">
              Sign Up
            </Link>
            <button type="button" className="btnMain" onClick={loginUser}>
              Login
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default withRouter(Login);
