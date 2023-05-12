import { useNavigate } from 'react-router-dom';
import employeeDetail from '../../mockdata/MockDataskills';
import { useState } from 'react';
import React from 'react';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loginImage from '../../skilltracker_assets/log_in_image.svg';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface LoginFormInterface {
  username: string;
  password: string;
}
const Login = () => {
  const [values, setValues] = useState<LoginFormInterface>({ username: '', password: '' });
  const [error, setError] = useState<string>('');
  const employeeDetails = employeeDetail().employeeDetails;
  const navigate = useNavigate();
  const Forgotpassword = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/Forgotpassword');
  };

  function validateUser(username: string, password: string): boolean {
    return username === employeeDetails.userName && password === employeeDetails.password;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const [jwtToken, setJwtToken] = useLocalStorage('jwtToken', '');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateUser(values.username, values.password)) {
      // Generate a mock JWT and store it in localStorage
      const token = 'mock-jwt-token';
      setJwtToken(token);
      navigate(`/Test/${employeeDetails.employeeID}`);
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <section className="login_section">
      <div className="login_container">
        <div className="login_column">
          <div className="block_element">
            <img className="login_image" src={loginImage} alt="" />
          </div>
        </div>
        <div className="login_column">
          <h1 className="login_header">Welcome to skill View Sign In to Continue.</h1>
          <a className="login_signup_link">
            <p className="login_signup">
              Don't have an account? <u>Sign Up</u>
            </p>
          </a>
          <div className="login_email_password">
            <form className="form_container" onSubmit={handleSubmit}>
              <label className="login_lable" htmlFor="username">
                Username/Email
              </label>
              <input
                className="login_input"
                type="text"
                name="username"
                value={values.username}
                onChange={handleInputChange}
                id="username"
                placeholder="Username/Email"
              />
              <label className="login_lable" htmlFor="password">
                Password
              </label>
              <input
                className="login_input_password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                id="password"
                placeholder="Password"
              />
              <a className="login_forgot_password" href="" onClick={Forgotpassword}>
                Forgot Password?
              </a>
              {error && (
                <p className="error">
                  <FontAwesomeIcon icon={faCircleExclamation} style={{ color: '#f5390a' }} />
                  {error}
                </p>
              )}
              <input className="login_button" type="submit" value="Log In" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
