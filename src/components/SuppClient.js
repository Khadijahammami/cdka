import React from "react";

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
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end", // Alignement des boutons à droite
    marginTop: "15px",
  },
  closeButton: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
  },
  addButton: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    marginRight: "10px",
  },
  message: {
    marginTop: "20px",
    marginLeft: "20px",
    fontSize: "16px",
  },
};

const SuppClient = ({ onClose, deleteClient, client }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <p style={styles.message}>
          Vous êtes sûre de vouloir supprimer ce client ?
        </p>
        <div style={styles.buttonGroup}>
          <button
            style={styles.addButton}
            onClick={() => {
              deleteClient(client._id); // Remplacer id par _id pour correspondre aux données du client
              onClose(); // Ferme la modal
            }}
          >
            Oui
          </button>
          <button style={styles.closeButton} onClick={onClose}>
            Non
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuppClient;
