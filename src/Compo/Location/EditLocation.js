import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditLocation = () => {
    let navigate = useNavigate();

    const {id} =useParams();

    const [location, setLocation] = useState({
        locationId: "",
        locationName: "",
        address: ""
    });
    const { locationId, locationName, address } = location;

    useEffect(() => {
        loadLocation();
    }, []);

    const loadLocation = async ()=>{
        const response = await axios.get(`http://localhost:8080/location/location/${id}`);
        setLocation(response.data);
    };

    const handleInputChange = (e) => {
        setLocation({
            ...location,
            [e.target.name]: e.target.value,
        });
    };

    const updateLocation = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/location/update${id}`, location);
        navigate("/view-location");
    };

    return(
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Edit Location</h2>
            <form onSubmit={(e) => updateLocation(e)}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="locationId">
                        Location Id
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="number"
                        name="locationId"
                        id="locationId"
                        required
                        value={locationId}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="locationName">
                        Location Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="locationName"
                        id="locationName"
                        required
                        value={locationName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="address">
                        Address
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="address"
                        name="address"
                        id="address"
                        required
                        value={address}
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
                            to={"/view-location"}
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

export default EditLocation