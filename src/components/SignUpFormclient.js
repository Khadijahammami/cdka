import React, { useState } from "react";
import google from "../images/google.png";

const SignupFormclient = () => {
  // États pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    passwordConf: "",
    adresse: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  // Fonction pour gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConf, nom, adresse, phone } = formData;

    // Simulation de validation (à remplacer par un appel API réel)
    if (email === "test@example.com" && password === "password123" && password === passwordConf) {
      setMessage("Inscription réussie !");
    } else {
      setMessage("Erreur dans les informations fournies.");
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
          S'inscrire
        </legend>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="nom">
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  color: "#1E2E46",
                  marginLeft: "5px",
                }}
              >
                Nom complet :
              </p>
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
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
            <label htmlFor="email">
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  color: "#1E2E46",
                  marginLeft: "5px",
                }}
              >
                E-Mail :
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
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="passwordConf">
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  color: "#1E2E46",
                  marginLeft: "5px",
                }}
              >
                Confirmer mot de passe :
              </p>
            </label>
            <input
              type="password"
              id="passwordConf"
              name="passwordConf"
              value={formData.passwordConf}
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
            <label htmlFor="adresse">
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  color: "#1E2E46",
                  marginLeft: "5px",
                }}
              >
                Adresse :
              </p>
            </label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              value={formData.adresse}
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
            <label htmlFor="phone">
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  color: "#1E2E46",
                  marginLeft: "5px",
                }}
              >
                Numéro de téléphone :
              </p>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
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
              width: "50%", // Garder la taille initiale du bouton "S'inscrire"
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
            S'inscrire
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

export default SignupFormclient; 