import React from "react";
import "./Screen.css";
import { Link } from "react-router-dom";
import dashArrow from "../assets/dashArrow.svg";
import dashFarmer from "../assets/dashboardBackground.svg";
import { useSelector } from "react-redux";

const DashboardScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      {userInfo && userInfo.isAdmin && (
        <div>
          <div className="background">
            <img src={dashFarmer} alt="" />
          </div>
          <div className="dashboard">
            <div className="amount-dashboard">
              <div className="amount-rect">
                <div className="rect-details">
                  <div className="gap"></div>
                  <div className="heading">
                    <p className="amt-title">Admin's Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="products-dashboard">
                <div className="products-rect">
                  <div className="rect-details">
                    <div className="gap"></div>
                    <div className="heading">
                      <p>Products</p>
                    </div>
                    <div className="dashArrow">
                      <Link to={"/admin/productlist"}>
                        <button className="dashBtn">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="orders-dashboard">
                <div className="orders-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Compare Products</p>
                    </div>
                    <div className="dashArrow">
                      <Link to={"/admin/compare"}>
                        <button className="dashBtn">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row3">
              <div className="users-dashboard">
                <div className="user-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Delete Product</p>
                    </div>
                    <div className="dashArrow1 ">
                      <Link to={"/admin/productlist"}>
                        <button className="dashBtn3">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviews-dashboard">
                <div className="reviews-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Reviews</p>
                    </div>
                    <div className="dashArrow">
                    <Link to={"/admin/reviews"}>
                        <button className="dashBtn3">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stock-dashboard">
                <div className="stock-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Out of Stock</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DashboardScreen;
