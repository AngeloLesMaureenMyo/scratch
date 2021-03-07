import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const Signup = props => {
  const [ username, usernameOnChange ] = useInput('');
  const [ password, passwordOnChange ] = useInput('');
  const [ password2, password2OnChange ] = useInput('');
  const [ usernameError, setUserNameError ] = useState(null);
  const [ passwordError, setPasswordError ] = useState(null);
  const [ password2Error, setPassword2Error ] = useState(null);

  const SignupUser = () => {
    // check if name is empty
    if (username === '') {
      setUserNameError('required');
    } else if (password === '') {
      setPasswordError('required');
    }  else if (password2 === '') {
      setPassword2Error('required');
    } else {
      
      const body = {
        username,
        password
      };
      fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then((data) => {
//console.log(321321, data);
        })
        .then(() => {
          props.history.push('/');
        })
        .catch(err => console.log('Sign up fetch /auth/login: ERROR: ', err));
    }
  };

  // useEffect to clear nameError when `name` is changed
  useEffect(()=>{
    setUserNameError(null);
  }, [username]);

  useEffect(()=>{
    setPasswordError(null);
  }, [password]);

  useEffect(()=>{
    setPassword2Error(null);
  }, [password2]);

  return (
    <section className="mainSection">
      <header className="pageHeader">
        <h2>Sign Up</h2>
      </header>
      <article className="card createChar">
        <div className="createCharFields">
          <label htmlFor="username">Name: </label>
          <input name="username" value={username} onChange={usernameOnChange} />
          {usernameError ? (<span className="errorMsg">{usernameError}</span>) : null}
        </div>
        <div className="createCharFields">
          <label htmlFor="password">Password: </label>
          <input name="password" value={password} onChange={passwordOnChange} />
          {passwordError ? (<span className="errorMsg">{passwordError}</span>) : null}
        </div>
        <div className="createCharFields">
          <label htmlFor="password2">Confirm: </label>
          <input name="password2" value={password2} onChange={password2OnChange} />
          {password2Error ? (<span className="errorMsg">{password2Error}</span>) : null}
        </div>
        <div className="signup">
          <Link to="/" className="link">
            Login
          </Link>
          <button type="button" className="btnMain" onClick={SignupUser}>Create</button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(Signup);