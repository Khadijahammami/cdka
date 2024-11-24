import React, { useState, useEffect } from "react";

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
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "450px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "left",
    fontSize: "12px",
  },
  fieldset: {
    border: "1px solid #000",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  legend: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#000",
  },
  formGroup: {
    marginBottom: "15px",
    marginTop: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "12px",
  },
  input: {
    width: "75%",
    padding: "8px",
    border: "1px solid rgba(0, 101, 187, 0.6)",
    borderRadius: "5px",
    fontSize: "12px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  halfWidth: {
    width: "48%",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "15px",
  },
  closeButton: {
    backgroundColor: "rgba(0, 101, 187, 0.6)",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
  },
  addButton: {
    backgroundColor: "rgba(0, 101, 187, 0.6)",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    marginRight: "10px",
  },
};

const ModifClient = ({ onClose, client, modifyClient }) => {
  const [formData, setFormData] = useState(client || {});

  useEffect(() => {
    if (client) {
      setFormData(client);
    }
  }, [client]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modifyClient) {
      modifyClient(formData);
    }
    onClose();
  };

  if (!client) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Modifier</legend>
          <form onSubmit={handleSubmit}>
            <div style={styles.row}>
              <div style={styles.halfWidth}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Nom :</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom || ""}
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
                    value={formData.prenom || ""}
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
                value={formData.adresse || ""}
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
                    value={formData.telephone || ""}
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
                    value={formData.mf || ""}
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
                value={formData.fax || ""}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>E-Mail :</label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.buttonGroup}>
              <button type="submit" style={styles.addButton}>
                Modifier
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

export default ModifClient;
