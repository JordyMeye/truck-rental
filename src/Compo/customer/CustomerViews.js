import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomerViews = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/customer/getAll", {
        validateStatus: ()=>{
          return true;
        } // Prevent Axios from following redirects
      }
      );
  
      if (response.status === 302) {
        setCustomers(response.data);
      }
    } catch (error) {
      console.error("Error loading customers:", error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/customer/delete/${id}`);
      loadCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Address</th>
            <th>Password</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {customers.map((customer, index) => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.name}</td>
              <td>{customer.surname}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.password}</td>
              <td className="mx-2">
                <Link
                  to={`/customer-profile/${customer.customerId}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-customer/${customer.customerId}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(customer.customerId)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CustomerViews;
