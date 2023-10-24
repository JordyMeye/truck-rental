import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddAdmin = () => {
  let navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const { name, surname, email } = admin;

  // Initialize the lastAdminId with 1 (or the highest existing ID from your database)
  const [lastAdminId, setLastAdminId] = useState(1);

  const handleInputChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const generateAdminId = () => {
    // Increment the lastAdminId and use it as the new ID
    const newAdminId = lastAdminId + 1;
    setLastAdminId(newAdminId);
    return newAdminId.toString();
  };

  const saveAdmin = async (e) => {
    e.preventDefault();

    // Construct the admin object
    const adminData = {
      adminId: generateAdminId(), // Generate a new ID
      name,
      surname,
      email,
    };

    try {
      // Send the POST request to the server
      await axios.post("http://localhost:8080/admin/create", adminData);
      navigate("/view-admin");
    } catch (error) {
      console.error("Error saving admin:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Add Admin</h2>
      <form onSubmit={(e) => saveAdmin(e)}>
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

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link to="/view-admin" className="btn btn-outline-warning btn-lg">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;
