import React from 'react';
import './App.css';

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary bar-details">
  <div className="container-fluid bar-1 navbar-s">
    <a className="navbar-brand icon-position" href="#">Hotel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bar-2" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item nav-link-styles">
          <a className="nav-link active" aria-current="page" href="#">English</a>
        </li>
        <li className="nav-item nav-link-styles">
          <a className="nav-link active" aria-current="page" href="#">List your property</a>
        </li>
        <li className="nav-item nav-link-styles">
          <a className="nav-link active" aria-current="page" href="#">Support</a>
        </li>
        <li className="nav-item nav-link-styles">
          <a className="nav-link active" aria-current="page" href="#">Trips</a>
        </li>
        <li className="nav-item nav-link-styles">
          <a className="nav-link active" aria-current="page" href="#">Sign in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;