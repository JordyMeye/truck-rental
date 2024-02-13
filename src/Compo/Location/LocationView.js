import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LocationView = () => {
    const [location, setLocation] = useState([]);

    useEffect(()=>{
        loadLocation();
    }, []);

    const loadLocation = async ()=>{
        try{
            const response = await axios.get("http://localhost:8080/location/find-all");
            if (response.status === 200){
                setLocation(response.data);
            }
        } catch (error){
            console.error("Error laoding Location:", error);
        }
    };

    const handleDelete = async (id) =>{
        try{
            await axios.delete(`http://localhost:8080/location/delete/${id}`);
            loadLocation();
        } catch (error){
            console.error("Error deleting Location:", error);
        }
    };


    return(
        <section>
            <table className="table table-bordered table-hover shadow">
                <thead>
                <tr className="text-center">
                    <th>LocationId</th>
                    <th>LocationName</th>
                    <th>Address</th>
                    <th colSpan="3">Actions</th>
                </tr>
                </thead>

                <tbody className="text-center">
                {location.map((location, index) => (
                    <tr key={location.locationId}>
                        <th scope="row">{index + 1}</th>
                        <td>{location.locationId}</td>
                        <td>{location.locationName}</td>
                        <td>{location.adress}</td>
                        <td className="mx-2">
                            <Link
                                to={`/admin-profile/${location.locationId}`}
                                className="btn btn-info"
                            >
                                <FaEye/>
                            </Link>
                        </td>
                        <td className="mx-2">
                            <Link
                                to={`/edit-location/${location.locationId}`}
                                className="btn btn-warning"
                            >
                                <FaEdit />
                            </Link>
                        </td>
                        <td className="mx-2">
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(location.locationId)}
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

export default LocationView;