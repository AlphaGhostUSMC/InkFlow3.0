import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect } from 'react';
import '../assets/css/header.css';
import '../assets/css/Anybody.css';



import logo from '../assets/img/icons/InkFlow Logo.svg';
import home from '../assets/img/icons/home.svg';
import logout from '../assets/img/icons/logout.svg';

function Header() {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

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