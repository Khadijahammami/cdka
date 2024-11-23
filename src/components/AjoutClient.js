import React, { useState } from "react";

const styles = {
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "450px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "left",
    fontSize: "12px", // Taille de police réduite
  },
  formGroup: {
    marginBottom: "15px",
    marginTop: "15px", // Ajout de marginTop pour espacer les champs
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "12px", // Taille de police réduite
  },
  input: {
    width: "75%", // Réduction de la taille des champs de texte
    padding: "8px",
    border: "1px solid rgba(0, 101, 187, 0.6)", // Bordure en couleur spécifiée
    borderRadius: "5px",
    fontSize: "12px", // Taille de police réduite
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end", // Alignement des boutons à droite
    marginTop: "15px",
  },
  closeButton: {
    backgroundColor: "rgba(0, 101, 187, 0.6)", // Couleur de fond du bouton Fermer
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px", // Taille de police réduite
  },
  addButton: {
    backgroundColor: "rgba(0, 101, 187, 0.6)", // Couleur de fond du bouton Ajouter
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px", // Taille de police réduite
    marginRight: "10px", // Espacement entre les boutons
  },
  fieldset: {
    border: "1px solid #000", // Bordure noire pour le fieldset
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  legend: {
    fontWeight: "bold",
    fontSize: "24px", // Taille du texte du legend
    color: "#000", // Couleur noire pour le légende
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px", // Espacement entre les champs de texte sur la même ligne
  },
  halfWidth: {
    width: "48%",
  },
};

const AjoutClient = ({ onClose, addClient }) => {
  const [client, setClient] = useState({
    id: "",
    nom: "",
    prenom: "",
    adresse: "",
    telephone: "",
    mf: "",
    fax: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({
      ...client,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient(client); // Ajouter le client à la liste
    onClose(); // Fermer la modale
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Ajout</legend>
          <form onSubmit={handleSubmit}>
            <div style={styles.row}>
              <div style={styles.halfWidth}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Nom :</label>
                  <input
                    type="text"
                    name="nom"
                    value={client.nom}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>
              <div style={styles.halfWidth}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Prénom :</label>
                  <input
                    type="text"
                    name="prenom"
                    value={client.prenom}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Adresse :</label>
              <input
                type="text"
                name="adresse"
                value={client.adresse}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.row}>
              <div style={styles.halfWidth}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Téléphone :</label>
                  <input
                    type="text"
                    name="telephone"
                    value={client.telephone}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>
              <div style={styles.halfWidth}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>MF :</label>
                  <input
                    type="text"
                    name="mf"
                    value={client.mf}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Fax :</label>
              <input
                type="text"
                name="fax"
                value={client.fax}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>E-Mail :</label>
              <input
                type="email"
                name="email"
                value={client.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.buttonGroup}>
              <button type="submit" style={styles.addButton}>
                Ajouter
              </button>
              <button
                type="button"
                style={styles.closeButton}
                onClick={onClose}
              >
                Fermer
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default AjoutClient;
