import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TruckView = () => {
  const [truck, setTruck] = useState([]);

  useEffect(() => {
    loadTruck();
  }, [],);

  const loadTruck = async () => {
    try {
      const response = await axios.get("http://localhost:8080/truck/getAll", {
        validateStatus: ()=>{
          return true;
        } // Prevent Axios from following redirects
      }
      );
  
      if (response.status === 200) {
        setTruck(response.data);
      }
    } catch (error) {
      console.error("Error loading truck:", error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/truck/delete/${id}`);
      loadTruck();
    } catch (error) {
      console.error("Error deleting truck:", error);
    }
  };

  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
              <th>Truck Id</th>
                <th>Model</th>
                <th>Year</th>
                <th>Availability</th>
                <th>License plate</th>
                <th>Current Mileage</th>
                <th>Brand Id</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {truck.map((truck, index) => (
            <tr key={truck.truckId}>
                 <td>{truck.truckId}</td>
                  <td>{truck.model}</td>
                  <td>{truck.year}</td>
                  <td>{truck.availability? 'true':'false' }</td>
                  <td>{truck.licensePlate}</td>
                  <td>{truck.currentMileage}</td>
                  <td>{truck.brandId}</td>
              <td className="mx-2">
                <Link
                  to={`/truck-profile/${truck.truckId}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-truck/${truck.truckId}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(truck.truckId)}
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

export default TruckView;
