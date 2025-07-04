import React from "react";
import Logo from "../assets/logo.svg";
import CartTop from "../assets/cart-top.svg";
import ProfileIcon from "../assets/profile-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="navigation_flex">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Kryovance" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <div className="right-panel d-flex">
                
                {/* <!-- Search Bar --> */}
                <form className="input-group w-auto my-auto">
                  <input
                    autocomplete="off"
                    type="search"
                    className="form-control"
                    placeholder="Search Here..."
                  />
                  <span className="input-group-text d-none d-lg-flex">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </form>

                {/* <!-- Cart --> */}  
                <div className="cart_flex">
                  <a href="#">
                    <img src={CartTop} alt="" />
                    <div className="cartNo">0</div>
                  </a>
                </div>

                {/* <!-- Profile --> */}
                <div className="profile_flex">
                  <ul class="nav usercta">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src={ProfileIcon} alt="" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Sign Up
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
