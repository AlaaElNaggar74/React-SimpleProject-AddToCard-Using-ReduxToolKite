import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const AppNavbar = () => {
  let cartarr=useSelector(state=>state.cart);
  return (
    <div className="AppNavbar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
                      
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link " aria-current="page" to="/Cart">
                  Cart: {cartarr.length} 
                </Link>
              </li>
            </ul>

        
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
