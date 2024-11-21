import React, { useState } from "react";
import google from "../images/google.png";

const SignUpFormgereant = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    passwordconf: "",
    licence: "",
    entreprise: "",
    telephone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordconf } = formData;

    if (password !== passwordconf) {
      setMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    // Simulation de traitement
    if (email === "test@example.com" && password === "password123") {
      setMessage("Inscription réussie !");
    } else {
      setMessage("Veuillez vérifier vos informations.");
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
            fontSize: "18px",  // Réduire la taille de la police
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "#1E2E46",
            padding: "0 10px",
            marginBottom: "20px", // Un peu d'espacement pour éviter que le texte soit collé
          }}
        >
          S'inscrire
        </legend>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Nom Utilisateur :"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          <InputField
            label="E-Mail :"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Mot de passe :"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputField
            label="Confirmer Mot de passe :"
            id="passwordconf"
            name="passwordconf"
            type="password"
            value={formData.passwordconf}
            onChange={handleChange}
          />
         
          <InputField
            label="Nom de l'entreprise :"
            id="entreprise"
            name="entreprise"
            value={formData.entreprise}
            onChange={handleChange}
          />
          <InputField
            label="Numéro de téléphone de l'entreprise :"
            id="telephone"
            name="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
          />
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
            S'inscrire
          </button>
          <GoogleButton />
        </form>
      </fieldset>
      {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
    </div>
  );
};

const InputField = ({ label, id, name, value, onChange, type = "text" }) => (
  <div style={{ marginBottom: "20px" }}>
    <label htmlFor={id}>
      <p
        style={{
          fontSize: "14px",
          fontFamily: "Arial, sans-serif",
          color: "#1E2E46",
          marginLeft: "5px",
        }}
      >
        {label}
      </p>
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
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
);

const GoogleButton = () => (
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
);

export default SignUpFormgereant;
