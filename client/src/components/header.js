import React from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/header.css';

import logo from '../assets/img/icons/InkFlow Logo.svg';
import home from '../assets/img/icons/home.svg';
import logout from '../assets/img/icons/logout.svg';

import '../assets/js/bs-init.js'

function Header() {
  return (
    <header className="app-header">
      <div className="brand-logo-container">
        <a href="https://example.com">
          <img className="img-fluid brand-logo" src={logo} alt='Brand Logo' />
        </a>
      </div>
      <div className="article-search-container">
        <form className="get-article">
          <input
            id="article-search-input"
            className="form-control article-search-input"
            type="search"
            placeholder="Article"
            spellCheck={false}
          />
        </form>
        <div className="exit-container">
          <img
            className="go-home"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            src={home}
            title="Home"
            alt="Home"
          />
          <img
            className="sign-out"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            src={logout}
            title="Sign Out"
            alt="Sign Out"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;