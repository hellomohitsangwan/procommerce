import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import cart from "../assets/cart.svg";
import "../assets/navbar.css";
import dropdown from "../assets/dropdown.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      {location.pathname === "/iuyf" ? null : (
        <nav className="navbar">
          <div className="nav-center">
            <Link to="/profile">
              <img
                src="https://static.vecteezy.com/system/resources/previews/028/071/362/non_2x/shop-logo-with-bag-icon-for-e-commerce-and-store-logo-vector.jpg"
                alt="logo"
                className="logo"
              />
            </Link>

            <ul className="nav-links">
              {userInfo ? (
                <div className="info">
                  <button className="info-button">
                    Hi! {userInfo.name.split(" ")[0]}{" "}
                    <img src={dropdown} alt="" />
                  </button>
                  <ul>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <p onClick={logoutHandler} className="logout">
                        Logout
                      </p>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login">SignIn</Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <>
                  <div>
                    <Link to="/compare">Compare</Link>
                  </div>
                  <div>
                    <Link to="/dashboard">Dashboard</Link>
                  </div>
                </>
              )}
              <li>
                <Link to="/cart">
                  <img src={cart} alt="" width={"48px"} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
