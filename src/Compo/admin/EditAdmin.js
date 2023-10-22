import React, { useCallback, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAdmin = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [admin, setAdmin] = useState({
    name: "",
    surname: "",
    email: ""
  });
  const { name, surname, email } = admin;

  const loadAdmin = useCallback(async () => {
    const response = await axios.get(`http://localhost:8080/admin/read/${id}`);
    setAdmin(response.data);
  }, [id]);

  useEffect(() => {
    loadAdmin();
  }, [loadAdmin]);

  const handleInputChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  };

  const updateAdmin = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/admin/update`, admin);
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      {/* Your form rendering code here */}
    </div>
  );
};

export default EditAdmin;
