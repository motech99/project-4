import { Link } from 'react-router-dom';
import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import "./LoginForm.css";

export default function LoginForm({ setUser, showSignUp, toggleSignUp }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <>
      <div className='container'>
        <div className='form-container sign-in-container'>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <h1 className="p-8">Sign in</h1>
            <label>Email</label>
            <input
              type='text'
              name='email'
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <button className="bg-[#ff9041]" type='submit'>Sign In</button>
            <Link to="/"> <button id="back" type='button'>Back</button> </Link>
            <br />
            <h4 className='error-message'>{error}</h4>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'></div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className='ghost' onClick={toggleSignUp}>
                {showSignUp ? "Log In" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
