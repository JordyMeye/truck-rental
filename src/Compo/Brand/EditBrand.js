import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditBrand = () => {
    let navigate = useNavigate();

    const {id} =useParams();

    const [brand, setBrand] = useState({
        brandId: "",
        brandName: "",
        model: "",
        color: ""
    });
    const { brandId, brandName, model, color} = brand;

    useEffect(() => {
        loadBrand();
    }, []);

    const loadBrand = async ()=>{
        const response = await axios.get(`http://localhost:8080/brand/brand/${id}`);
        setBrand(response.data);
    };

    const handleInputChange = (e) => {
        setBrand({
            ...brand,
            [e.target.brandId]: e.target.value,
        });
    };

    const updateBrand = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/brand/update${id}`, brand);
        navigate("/view-brand");
    };

    return(
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Edit Brand</h2>
            <form onSubmit={(e) => updateBrand(e)}>
                
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="brandId">
                        Brand ID
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="number"
                        name="brandId"
                        id="brandId"
                        required
                        value={brandId}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="brandName">
                        Brand Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="brandName"
                        id="brandName"
                        required
                        value={brandName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="model">
                        Model
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="model"
                        id="model"
                        required
                        value={brandName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="color">
                        Color
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="color"
                        id="color"
                        required
                        value={brandName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-outline-success btn-lg"
                        >
                            Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link
                            to={"/view-brand"}
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
}

export default EditBrand