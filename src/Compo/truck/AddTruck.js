import { useState } from "react";
import {
	Link,
	useNavigate,
} from "react-router-dom";
import axios from "axios";

const AddTruck = () => {
    let navigate = useNavigate();
    const [truck, setTruck] = useState({
      model: "",
      year: "",
      availability: "",
      licensePlate: "",
      currentMileage: "",
      brandId: "",
    });
    const {model, year, availability, licensePlate, currentMileage, brandId} = truck;
  
    const handleInputChange = (e) => {
      setTruck({
        ...truck,
        [e.target.name]: e.target.value,
      });
    };

    const saveTruck = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/truck/create", truck);
        navigate("/view-trucks");
      };

      return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
          <h2 className="mt-5">Add Truck</h2>
          <form onSubmit={(e) => saveTruck(e)}>
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
    o
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="year">
                Year
              </label>
              <input
                className="form-control col-sm-6"
                type="year"
                name="year"
                id="year"
                required
                value={year}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
    
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="availability">
              Availability
              </label>
              <input
                className="form-control col-sm-6"
                type="availability"
                name="availability"
                id="availability"
                required
                value={availability}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
    
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="licensePlate">
              LicensePlate
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="licensePlate"
                id="licensePlate"
                required
                value={licensePlate}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
    
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="currentMileage">
              CurrentMileage
              </label>
              <input
                className="form-control col-sm-6"
                type="currentMileage"
                name="currentMileage"
                id="currentMileage"
                required
                value={currentMileage}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="brandId">
              BrandId
              </label>
              <input
                className="form-control col-sm-6"
                type="brandId"
                name="brandId"
                id="brandId"
                required
                value={brandId}
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
                  to={"/view-trucks"}
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
    
    export default AddTruck;
    