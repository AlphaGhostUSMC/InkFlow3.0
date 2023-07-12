import React from 'react';
import { close, mail, lockClosed, image, person } from 'ionicons/icons';

import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'

import '../assets/css/login-register.css';


const SignupCard = () => {
  return (
    <div className="login-card">
      <span className="close-icon">
        <i className="icon" onClick={() => {}}>
          <ion-icon icon={close} />
        </i>
      </span>
      <div className="form-box login">
        <h2>Sign Up</h2>
        <form action="#">
          <div className="input-box">
            <span className="icons">
              <i className="icon" onClick={() => {}}>
                <ion-icon icon={person} />
              </i>
            </span>
            <input className="form-control username-signup" type="text" required />
            <label className="form-label">Username</label>
          </div>
          <div className="input-box">
            <span className="icons">
              <i className="icon" onClick={() => {}}>
                <ion-icon icon={mail} />
              </i>
            </span>
            <input className="form-control email-signup" type="email" required />
            <label className="form-label">Email</label>
          </div>
          <div className="input-box">
            <span className="icons">
              <i className="icon" onClick={() => {}}>
                <ion-icon icon={lockClosed} />
              </i>
            </span>
            <input className="form-control password-signup" type="password" required />
            <label className="form-label">Password</label>
          </div>
          <div className="input-box">
            <span className="icons">
              <i className="icon" onClick={() => {}}>
                <ion-icon icon={lockClosed} />
              </i>
            </span>
            <input className="form-control passwordcnf-signup" type="password" required />
            <label className="form-label">Confirm Password</label>
          </div>
          <div className="input-box">
            <span className="icons">
              <i className="icon" onClick={() => {}}>
                <ion-icon icon={image} />
              </i>
            </span>
            <input className="form-control profile-image-signup" type="file" required />
          </div>
          <button className="btn btn-primary" type="submit">Register</button>
          <div className="register-link">
            <p>Already a user? <a className="Login-link" href="https://example.com/">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupCard;
