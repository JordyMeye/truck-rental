import { useState } from "react";
import {
    Link,
    useNavigate,
} from "react-router-dom";
import axios from "axios";


const AddBrand = () => {
    let navigate = useNavigate();
    const [brand, setBrand] = useState({
        brandId: "",
        brandName: "",
        model: "",
        color: "",
        locationId: "",
    });
    const { brandId, brandName, model, color} = brand;

    const handleInputChange = (e) => {
        setBrand({
            ...brand,
            [e.target.name]: e.target.value,
        });
    };

    const saveBrand = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/brand/save", brand);
        navigate("/view-brand");
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Add Brand</h2>
            <form onSubmit={(e) => saveBrand(e)}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="brandId">
                        BrandId
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
                    <label className="input-group-text" htmlFor="brand name">
                        Brand Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
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
                        type="text"
                        name="model"
                        id="model"
                        required
                        value={model}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="color">
                        Color
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="color"
                        id="color"
                        required
                        value={color}
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
};

export default AddBrand;
