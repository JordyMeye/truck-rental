import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminView = () => {
    const [admin, setAdmin] = useState([]);

    useEffect(()=>{
        loadAdmin();
    }, []);

    const loadAdmin = async ()=>{
        try{
            const response = await axios.get("http://localhost:8080/admin/getAll",{
            validateStatus: ()=>{
                return true;
            }
        }
            );
            if (response.status === 200){
                setAdmin(response.data);
            }
        } catch (error){
            console.error("Error laoding Admin:", error);
        }
    };

    const handleDelete = async (id) =>{
        try{
            await axios.delete(`http://localhost:8080/admin/delete/${id}`);
            loadAdmin();
        } catch (error){
            console.error("Error deleting Admin:", error);
        }
    };


    return(
        <section>
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {admin.map((admin, index) => (
                        <tr key={admin.adminId}>
                            <td>{admin.adminId}</td>
                            <td>{admin.name}</td>
                            <td>{admin.surname}</td>
                            <td>{admin.email}</td>
                            <td className="mx-2">
                                <Link
                                to={`/admin-profile/${admin.adminId}`}
                                className="btn btn-info"
                                >
                                    <FaEye/>
                                </Link>
                                </td>
                                <td className="mx-2">
                                  <Link
                                    to={`/edit-admin/${admin.adminId}`}
                                     className="btn btn-warning"
                                >
                           <FaEdit />
                          </Link>
                             </td>
                              <td className="mx-2">
                            <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(admin.adminId)}
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

export default AdminView;