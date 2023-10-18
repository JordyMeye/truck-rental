import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditAdmin = () => {
    let navigate = useNavigate();

    const {id} =useParams();

    const [admin, setAdmin] = useState({
      name: "",
      surname: "",
      email: ""
    });
    const { name, surname, email } = admin;

    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async ()=>{
            const response = await axios.get(`http://localhost:8080/admin/admin/${id}`);
                setAdmin(response.data);
    };
  
    const handleInputChange = (e) => {
      setAdmin({
        ...admin,
        [e.target.name]: e.target.value,
      });
    };
  
    const updateAdmin = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/admin/update${id}`, admin);
      navigate("/view-admin");
    };

    return(
<div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Edit Admin</h2>
      <form onSubmit={(e) => updateAdmin(e)}>
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
            <button
              type="submit"
              className="btn btn-outline-success btn-lg"
            >
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-admin"}
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

export default EditAdmin