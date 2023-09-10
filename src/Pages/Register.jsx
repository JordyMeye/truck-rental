import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    licenseNumber: "",
  });

  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration was successful
        setRegistrationComplete(true);
      } else {
        // Handle registration error here
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {registrationComplete ? (
        <p style={{ fontSize: "15px" }}>Registration complete!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.surname}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.address}
              onChange={handleChange}
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
              value={formData.licenseNumber}
              onChange={handleChange}
              style={{
                fontSize: "15px",
                padding: "10px",
                width: "100%",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              fontSize: "15px",
            }}
          >
            Register
          </button>
        </form>
      )}
      
    </div>
    

    
  );

  
}

export default Register;
