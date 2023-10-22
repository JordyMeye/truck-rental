import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Your Customer App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/view-customers"}
              >
                View All Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-customers"}>
                Add New Customer
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/view-admin"}>
                  View All Admin
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/add-admin"}>
                  Add New Admin
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
