import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect } from 'react';
import '../assets/css/navigation.css';


import technologyIcon from '../assets/img/icons/technology.svg';
import foodIcon from '../assets/img/icons/food.svg';
import healthIcon from '../assets/img/icons/health.svg';
import financeIcon from '../assets/img/icons/finance.svg';
import artsIcon from '../assets/img/icons/arts.svg';
import loginIcon from '../assets/img/icons/login.svg';
import registerIcon from '../assets/img/icons/register.svg';
import { Link } from 'react-router-dom';

function Navigation() {
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
    <div className="vertical-nav">
      <ul className="navigation">
        <li>
          <Link to="https://example.com">
            <img
              className="nav-icons"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              src={technologyIcon}
              alt="technology"
              title="Technology"
            />
          </Link>
          <Link to="https://example.com">
            <img
              className="nav-icons"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              src={foodIcon}
              alt="food"
              title="Food"
            />
          </Link>
          <Link to="https://example.com">
            <img
              className="nav-icons"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              src={healthIcon}
              alt="health"
              title="Health"
            />
          </Link>
          <Link to="https://example.com">
            <img
              className="nav-icons"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              src={financeIcon}
              alt="finance"
              title="Finance"
            />
          </Link>
          <Link to="https://example.com">
            <img
              className="nav-icons"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              src={artsIcon}
              alt="arts"
              title="Arts"
            />
          </Link>
        </li>
      </ul>
      <div className="user-actions">
        <ul className="navigation">
          <li>
            <Link to="/signin">
              <img
                className="nav-icons"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                src={loginIcon}
                alt="finance"
                title="Sign In"
              />
            </Link>
            <Link to="https://example.com">
              <img
                className="nav-icons"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                src={registerIcon}
                alt="finance"
                title="Sign Up"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );  
}

export default Navigation;