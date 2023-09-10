import React, { useState, useEffect } from "react";
import axios from "axios"


function Register() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   surname: "",
  //   email: "",
  //   address: "",
  //   licenseNumber: "",
  // });

  const [name, setName] = useState("")
  const [surname, setSurname]= useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [licenseNumber , setLicenseNumber ] = useState("")

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/customer/create", {
        name: name,
        surname: surname,
        email: email,
        address: address,
        licenseNumber: licenseNumber,
      });
      if (response.status === 200) {
        alert("User Registration Successfully");
      // Reset form fields by setting them to empty strings
      setName("");
      setSurname("");
      setEmail("");
      setAddress("");
      setLicenseNumber("");
    } else {
      alert("Registration Failed!");
    }
    } catch (err) {
      alert("Registration Failed!");
      console.error(err); // Log the error for debugging
    }
  }
  


  //  const [registrationComplete, setRegistrationComplete] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       // Registration was successful
  //       setRegistrationComplete(true);
  //     } else {
  //       // Handle registration error here
  //       console.error("Registration failed");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      
        {/* <p style={{ fontSize: "15px" }}>Registration complete!</p> */}
     
        <form onSubmit={save}
          
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <div className="form-group" style={{ marginBottom: "20px", width: "100%" }}>
            <label
              htmlFor="name"
              style={{
                fontSize: "15px",
              }}
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) =>{
                setName(event.target.value);
              }} 
              style={{
                fontSize: "10px",
                padding: "10px",
                width: "100%",
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px", width: "100%" }}>
            <label
              htmlFor="surname"
              style={{
                fontSize: "15px",
              }}
            >
              Surname:
            </label>
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={(event) =>{
                setSurname(event.target.value);
              }} 
              style={{
                fontSize: "10px",
                padding: "10px",
                width: "100%",
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px", width: "100%" }}>
            <label
              htmlFor="email"
              style={{
                fontSize: "15px",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) =>{
                setEmail(event.target.value);
              }} 
              style={{
                fontSize: "10px",
                padding: "10px",
                width: "100%",
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px", width: "100%" }}>
            <label
              htmlFor="address"
              style={{
                fontSize: "15px",
              }}
            >
              Address:
            </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(event) =>{
                setAddress(event.target.value);
              }} 
              style={{
                fontSize: "10px",
                padding: "10px",
                width: "100%",
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px", width: "100%" }}>
            <label
              htmlFor="licenseNumber"
              style={{
                fontSize: "15px",
              }}
            >
              License Number:
            </label>
            <input
              type="text"
              name="licenseNumber"
              value={licenseNumber}
              onChange={(event) =>{
                setLicenseNumber(event.target.value);
              }} 
              style={{
                fontSize: "15px",
                padding: "10px",
                width: "100%",
              }}
            />
          </div>

          <button type="submit"
            class="btn-4" 
            style={{
              fontSize: "15px",
            }} onclick = {save} 
          >
            Register
          </button>
        </form>
      
      
    </div>
    

    
  );

  
}

export default Register;
