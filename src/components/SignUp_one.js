import React from "react";
import client from "../images/client.png";
import direc from "../images/direc.png";
import gerant from "../images/ger.png";
import { useNavigate } from "react-router-dom";

const SignupOne = () => {
  const navigate = useNavigate();

  // Gestion des clics sur les cartes
  const handleCardClick = (selectedRole) => {
    if (selectedRole === "directeur") {
      navigate(`/signupForm`, { state: { role: selectedRole } });
    } else if (selectedRole === "gerant") {
      navigate(`/signupgerat`, { state: { role: selectedRole } });
    } else if (selectedRole === "client") {
      navigate(`/signupclient`, { state: { role: selectedRole } });
    }
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Continuez en tant que :</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "100px" }}>
        {/* Carte Directeur */}
        <div
          onClick={() => handleCardClick("directeur")}
          style={{
            width: "200px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "transform 0.2s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={direc} alt="Directeur" style={{ width: "80px", height: "80px", marginBottom: "10px" }} />
          <h3>Directeur</h3>
        </div>

        {/* Carte Gérant */}
        <div
          onClick={() => handleCardClick("gerant")}
          style={{
            width: "200px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "transform 0.2s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={gerant} alt="Gérant" style={{ width: "80px", height: "80px", marginBottom: "10px" }} />
          <h3>Gérant</h3>
        </div>

        {/* Carte Client */}
        <div
          onClick={() => handleCardClick("client")}
          style={{
            width: "200px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "transform 0.2s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={client} alt="Client" style={{ width: "80px", height: "80px", marginBottom: "10px" }} />
          <h3>Client</h3>
        </div>
      </div>
    </div>
  );
};

export default SignupOne;
