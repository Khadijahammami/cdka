import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importation de useNavigate
import google from "../images/google.png";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();  // Initialisation de useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Simulation de connexion (à remplacer par un appel API réel)
    if (email === "directeur@example.com" && password === "password123") {
      setMessage("Connexion réussie !");
      // Redirection vers la page du directeur
      navigate("/directhome");
    } else if (email === "gerant@example.com" && password === "password123") {
      setMessage("Connexion réussie !");
      // Redirection vers la page du gérant
      navigate("/geranthome");
    } else if (email === "client@example.com" && password === "password123") {
      setMessage("Connexion réussie !");
      // Redirection vers la page du client
      navigate("/clienthome");
    } else {
      setMessage("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <fieldset
        style={{
          borderRadius: "8px",
          border: "1px solid #0065BB",
          padding: "20px",
          width: "400px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <legend
          style={{
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "#1E2E46",
            padding: "0 10px",
          }}
        >
          Connexion
        </legend>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="email">
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  color: "#1E2E46",
                  marginLeft: "5px",
                }}
              >
                E-Mail ou Nom Utilisateur :
              </p>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #0065BB",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password">
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  color: "#1E2E46",
                  marginLeft: "5px",
                }}
              >
                Mot de passe :
              </p>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "90%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #0065BB",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "50%",
              backgroundColor: "#0065BB",
              color: "#fff",
              border: "none",
              padding: "8px",
              borderRadius: "8px",
              fontSize: "14px",
              cursor: "pointer",
              marginBottom: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Se connecter
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "85%",
              marginTop: "30px",
              marginLeft: "20px",
              border: "1px solid #D7D7D7",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "#F5F5F5",
            }}
          >
            <img
              src={google}
              alt="Google logo"
              style={{
                height: "20px",
                width: "20px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
            <div
              style={{
                flexGrow: 1,
                textAlign: "center",
                color: "#000000",
                fontSize: "14px",
                paddingLeft: "20px",
                borderLeft: "1px solid #D7D7D7",
              }}
            >
              Continue avec Google
            </div>
          </div>
        </form>
      </fieldset>
      {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
    </div>
  );
};

export default SignIn;
