import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import axios from 'axios';
import AjoutClient from "./AjoutClient";
import ModifClient from "./ModifClient";
import SuppClient from "./SuppClient";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0px auto",
    maxWidth: "1200px",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "2px solid #e6e6e6",
    paddingBottom: "10px",
  },
  logo: {
    height: "60px",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  profileIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#e6e6e6",
  },
  tableContainer: {
    marginTop: "20px",
    border: "1px solid #000",
    borderRadius: "10px",
    overflow: "hidden",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
  },
  th: {
    backgroundColor: "#fff",
    fontWeight: "bold",
    padding: "15px",
    borderBottom: "1px solid #000",
    textAlign: "center",
    fontSize: "12px",
  },
  td: {
    padding: "15px",
    borderBottom: "1px solid #000",
    textAlign: "center",
    fontSize: "12px",
    cursor: "pointer", // Make cells clickable
  },
  actionButtons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginRight: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "10px",
    border: "1px solid #000",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  addButton: {
    backgroundColor: "#fff",
    color: "#000",
  },
  editButton: {
    backgroundColor: "#fff",
    color: "#000",
  },
  deleteButton: {
    backgroundColor: "#fff",
    color: "#000",
  },
};

function GererClient() {
  const [modalType, setModalType] = useState(null); // Etat pour contrôler quel modal est affiché
  const [selectedClient, setSelectedClient] = useState(null); // Track selected client
  const [clients, setClients] = useState([]); // Liste vide initialement

  // Fonction pour récupérer les clients depuis le backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/clients")
      .then(response => {
        setClients(response.data); // Met à jour l'état avec les clients récupérés
      })
      .catch(error => console.error("Erreur lors de la récupération des clients:", error));
  }, []); // Le tableau vide [] indique que cette action se produit au montage du composant uniquement

  const openModal = (type) => {
    setModalType(type); // Set modal type to open
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedClient(null); // Reset selection after modal close
  };

  const selectClient = (client) => {
    setSelectedClient(client); // Set the selected client
  };

  const addClient = (newClient) => {
    axios.post("http://localhost:5000/api/clients", newClient)
      .then(response => setClients([...clients, response.data]))
      .catch(error => console.error("Erreur lors de l'ajout:", error));
  };

  const modifyClient = (updatedClient) => {
    axios.put(`http://localhost:5000/api/clients/${updatedClient._id}`, updatedClient) // Remplacez id par _id
      .then(response => {
        setClients(clients.map(client =>
          client._id === updatedClient._id ? updatedClient : client // Remplacez id par _id
        ));
      })
      .catch(error => console.error("Erreur lors de la modification:", error));
  };

  const deleteClient = (clientId) => {
    axios.delete(`http://localhost:5000/api/clients/${clientId}`)
      .then(() => {
        setClients(clients.filter(client => client._id !== clientId)); // Remplacez id par _id
      })
      .catch(error => console.error("Erreur lors de la suppression:", error));
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={Logo} alt="Company Logo" style={styles.logo} />
        <div style={styles.profile}>
          <span style={{ fontSize: "12px" }}>Nom et prénom</span>
          <div style={styles.profileIcon}></div>
        </div>
      </header>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nom</th>
              <th style={styles.th}>Prénom</th>
              <th style={styles.th}>Adresse</th>
              <th style={styles.th}>Téléphone</th>
              <th style={styles.th}>MF</th>
              <th style={styles.th}>Fax</th>
              <th style={styles.th}>Adresse-e</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client._id} // Utilisez _id ici
                onClick={() => selectClient(client)}
                style={{
                  backgroundColor:
                    selectedClient?._id === client._id ? "#e6f7ff" : "", // Remplacez id par _id
                }}
              >
                <td style={styles.td}>{client.nom}</td>
                <td style={styles.td}>{client.prenom}</td>
                <td style={styles.td}>{client.adresse}</td>
                <td style={styles.td}>{client.telephone}</td>
                <td style={styles.td}>{client.mf}</td>
                <td style={styles.td}>{client.fax}</td>
                <td style={styles.td}>{client.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.actionButtons}>
        <button
          style={{ ...styles.button, ...styles.addButton }}
          onClick={() => openModal("ajout")}
        >
          + Ajouter
        </button>
        <button
          style={{ ...styles.button, ...styles.editButton }}
          onClick={() => selectedClient && openModal("modification")}
          disabled={!selectedClient}
        >
          * Modifier
        </button>
        <button
          style={{ ...styles.button, ...styles.deleteButton }}
          onClick={() => selectedClient && openModal("suppression")}
          disabled={!selectedClient}
        >
          - Supprimer
        </button>
      </div>

      {/* Modals */}
      {modalType === "ajout" && (
        <AjoutClient onClose={closeModal} addClient={addClient} />
      )}
      {modalType === "modification" && selectedClient && (
        <ModifClient
          client={selectedClient}
          onClose={closeModal}
          modifyClient={modifyClient}
        />
      )}

      {modalType === "suppression" && selectedClient && (
        <SuppClient
          client={selectedClient}
          onClose={closeModal}
          deleteClient={deleteClient}
        />
      )}
    </div>
  );
}

export default GererClient;
