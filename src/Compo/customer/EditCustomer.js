import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditCustomer = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [customer, setCustomer] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    password: "",
  });

  const { name, surname, email, address, password } = customer;

  const loadCustomer = useCallback(async () => {
    const result = await axios.get(
      `http://localhost:8080/customer/read/${id}`
    );
    setCustomer(result.data);
  }, [id]);

  useEffect(() => {
    loadCustomer();
  }, [loadCustomer]);

  const handleInputChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const updateCustomer = async (e) => {
    e.preventDefault();
    await axios.post(
      `http://localhost:8080/customer/update`,
      customer
    );
    
    navigate("/customer-views");
  };


  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Edit Customer</h2>
      <form onSubmit={(e) => updateCustomer(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="name">
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="surname">
            Surname
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="surname"
            id="surname"
            required
            value={surname}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="address">
            Address
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="address"
            id="address"
            required
            value={address}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="password">
            Password
          </label>
          <input
            className="form-control col-sm-6"
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          
          <div className="col-sm-2">
            <Link
              to={"/customer-views"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCustomer;
