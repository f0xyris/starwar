import React from 'react';

import './header.css';

import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header container-fluid">
      <div className="container d-flex align-items-center header-wrapper">
        <h4 className="header-logo flex-grow-1">
          <Link to="/starwar">
            Star Wars
          </Link>
        </h4>
        <ul className="d-flex header-nav">
          <li>
          <Link to="/favorites">Favorite</Link>
          </li>
          <li>
            <Link to="/peoples">People</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;