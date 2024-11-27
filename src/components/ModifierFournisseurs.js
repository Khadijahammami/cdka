import React, { useState, useEffect } from "react";

const ModifierFournisseurs = ({ fournisseur, onUpdateFournisseur }) => {
  const [formData, setFormData] = useState(fournisseur || {});

  useEffect(() => {
    setFormData(fournisseur || {});
  }, [fournisseur]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (!formData.code || !formData.nom || !formData.prenom) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    onUpdateFournisseur(formData);
  };

  // Styles réutilisés depuis la page AjoutMateriel
  const formStyles = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "20px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const fieldStyles = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  };

  const inputStyles = {
    padding: "4px",
    border: "1px solid #007acc",
    borderRadius: "8px",
    outline: "none",
  };

  const buttonStyles = {
    backgroundColor: "#007acc",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyles = {
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <legend style={{ color: "#007acc" }}>
        <h2>Modifier Fournisseur</h2>
      </legend>
      <div style={fieldStyles}>
        <label>Code</label>
        <input
          type="text"
          name="code"
          value={formData.code || ""}
          onChange={handleChange}
          style={inputStyles}
          required
        />
      </div>
      <div style={fieldStyles}>
        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={formData.nom || ""}
          onChange={handleChange}
          style={inputStyles}
          required
        />
      </div>
      <div style={fieldStyles}>
        <label>Prénom</label>
        <input
          type="text"
          name="prenom"
          value={formData.prenom || ""}
          onChange={handleChange}
          style={inputStyles}
          required
        />
      </div>
      <div style={fieldStyles}>
        <label>Adresse</label>
        <input
          type="text"
          name="adresse"
          value={formData.adresse || ""}
          onChange={handleChange}
          style={inputStyles}
        />
      </div>
      <div style={fieldStyles}>
        <label>Téléphone</label>
        <input
          type="text"
          name="telephone"
          value={formData.telephone || ""}
          onChange={handleChange}
          style={inputStyles}
        />
      </div>
      <div style={fieldStyles}>
        <label>Fax</label>
        <input
          type="text"
          name="fax"
          value={formData.fax || ""}
          onChange={handleChange}
          style={inputStyles}
        />
      </div>
      <div style={fieldStyles}>
        <label>Adresse Email</label>
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          style={inputStyles}
        />
      </div>
      <div>
        <button
          type="submit"
          style={buttonStyles}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
        >
          Modifier
        </button>
      </div>
    </form>
  );
};

export default ModifierFournisseurs;
