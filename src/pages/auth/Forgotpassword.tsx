import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import employeeDetail from '../../mockdata/MockDataskills';
import loginImage from '../../skilltracker_assets/log_in_image.svg';

interface ForgotPasswordFormInterface {
  newPassword: string;
  retypePassword: string;
}
const ForgotPassword = () => {
  const [values, setValues] = useState<ForgotPasswordFormInterface>({
    newPassword: '',
    retypePassword: ''
  });
  const [error, setError] = useState<string>('');
  const employeeDetails = employeeDetail().employeeDetails;
  const navigate = useNavigate();
  const validatePasswords = (newPassword: string, retypePassword: string) => {
    return newPassword !== '' && newPassword === retypePassword;
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validatePasswords(values.newPassword, values.retypePassword)) {
      // TODO: Update the user's password in the system
      console.log('Passwords match');
      employeeDetails.password = values.newPassword; // update the password
      navigate('/Login');
    } else {
      setError('Passwords do not match');
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
          <h1 className="login_header">Forgot Password</h1>
          <a className="login_signup_link">
            <p className="login_signup"></p>
          </a>
          <div className="login_email_password">
            <form className="form_container" onSubmit={handleSubmit}>
              <label className="login_lable" htmlFor="username">
                Enter your new password
              </label>
              <input
                className="login_input"
                type="password"
                name="newPassword"
                value={values.newPassword}
                onChange={handleInputChange}
                id="newPassword"
                placeholder="*************"
              />
              <label className="forgot_password_label" htmlFor="retypePassword">
                Retype your Password
              </label>
              <input
                className="login_input_password"
                type="password"
                name="retypePassword"
                value={values.retypePassword}
                onChange={handleInputChange}
                id="retypePassword"
                placeholder="*************"
              />
              {error && (
                <p className="error">
                  <FontAwesomeIcon icon={faCircleExclamation} style={{ color: '#f5390a' }} />
                  {error}
                </p>
              )}
              <input className="login_button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
