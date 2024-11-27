import React, { useState } from "react";

const AjoutFournisseurs = ({ onAddFournisseur, onClose }) => {
  const [formData, setFormData] = useState({
    code: "",
    nom: "",
    prenom: "",
    adresse: "",
    telephone: "",
    fax: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5002/api/fournisseurs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddFournisseur(data);
      })
      .catch((error) => console.error("Erreur lors de l'ajout du fournisseur", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>
            <h2>Ajouter un fournisseur</h2>
          </legend>
          <div style={styles.field}>
            <label>Code</label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label>Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label>Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label>Adresse</label>
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label>Téléphone</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label>Fax</label>
            <input
              type="text"
              name="fax"
              value={formData.fax}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.buttons}>
            <button type="submit" style={styles.button}>Ajouter</button>
            <button type="button" onClick={onClose} style={styles.buttonCancel}>Annuler</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

const styles = {
  fieldset: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "20px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  input: {
    padding: "4px",
    border: "1px solid #007acc",
    borderRadius: "8px",
    outline: "none",
  },
  legend: {
    color: "#007acc",
  },
  button: {
    backgroundColor: "#007acc",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginRight: "10px",
  },
  buttonCancel: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default AjoutFournisseurs;
