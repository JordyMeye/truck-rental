import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BrandView = () => {
    const [brand, setBrand] = useState([]);

    useEffect(()=>{
        loadBrand();
    }, []);

    const loadBrand = async ()=>{
        try{
            const response = await axios.get("http://localhost:8080/brand/find-all");
            if (response.status === 200){
                setBrand(response.data);
            }
        } catch (error){
            console.error("Error laoding Brand:", error);
        }
    };

    const handleDelete = async (id) =>{
        try{
            await axios.delete(`http://localhost:8080/brand/delete/${id}`);
            loadBrand();
        } catch (error){
            console.error("Error deleting Brand:", error);
        }
    };


    return (
        <section>
            <table className="table table-bordered table-hover shadow">
                <thead>
                <tr className="text-center">
                    <th>brandId</th>
                    <th>brandName</th>
                    <th>model</th>
                    <th>color</th>
                    <th colSpan="3">Actions</th>
                </tr>
                </thead>

                <tbody className="text-center">
                {brand.map((brand, index) => (
                    <tr key={brand.brandId}>
                        <th scope="row">{index + 1}</th>
                        <td>{brand.brandId}</td>
                        <td>{brand.brandName}</td>
                        <td>{brand.model}</td>
                        <td>{brand.color}</td>
                        <td className="mx-2">
                            <Link
                                to={`/brand-profile/${brand.brandId}`}
                                className="btn btn-info"
                            >
                                <FaEye/>
                            </Link>
                        </td>
                        <td className="mx-2">
                            <Link
                                to={`/edit-brand/${brand.brandId}`}
                                className="btn btn-warning"
                            >
                                <FaEdit />
                            </Link>
                        </td>
                        <td className="mx-2">
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(brand.brandId)}
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

export default BrandView;