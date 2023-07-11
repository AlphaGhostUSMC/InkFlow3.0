import React from 'react';
import { close, mail, lockClosed } from 'ionicons/icons';

import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'


import '../assets/css/login-register.css';

const LoginCard = () => {
  return (
    <div className="login-card">
      <span className="close-icon">
        <i className="icon" onClick={() => { }}>
          <ion-icon icon={close} />
        </i>
      </span>
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icons">
              <i className="icon" onClick={() => { }}>
                <ion-icon icon={mail} />
              </i>
            </span>
            <input className="form-control username-login" type="email" required />
            <label className="form-label">Email</label>
          </div>
          <div className="input-box">
            <span className="icons">
              <i className="icon" onClick={() => { }}>
                <ion-icon icon={lockClosed} />
              </i>
            </span>
            <input className="form-control password-login" type="password" required />
            <label className="form-label">Password</label>
          </div>
          <div className="remember-forget">
            <div className="form-check">
              <input id="formCheck-1" className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="formCheck-1">Remember me</label>
            </div>
            <a href="https://example.com">Forgot Password?</a>
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a className="register-link" href="https://example.com">register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
