import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect } from 'react';
import '../assets/css/header.css';
import '../assets/css/Anybody.css';



import logo from '../assets/img/icons/InkFlow Logo.svg';
import home from '../assets/img/icons/home.svg';
import logout from '../assets/img/icons/logout.svg';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
      tooltipTriggerEl.addEventListener('shown.bs.tooltip', function () {
        setTimeout(function () {
          tooltip.hide();
        }, 1000);
      });
      return tooltip;
    });
  }, []);

  return (
    <header className="app-header">
      <div className="brand-logo-container">
        <Link to="/">
          <img className="img-fluid brand-logo" src={logo} alt='Brand Logo' />
        </Link>
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
          <Link to="/">
            <img
              className="go-home"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              src={home}
              title="Home"
              alt="Home"
            />
          </Link>
          <Link to="/signout">
            <img
              className="sign-out"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              src={logout}
              title="Sign Out"
              alt="Sign Out"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;