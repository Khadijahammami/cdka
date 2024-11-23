import React, { useState } from "react";
import Logo from "../images/logo.png";
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
  const [clients, setClients] = useState([
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      adresse: "123 Rue Principale",
      telephone: "123-456-7890",
      mf: "123456789",
      fax: "123-456-7891",
      email: "jean.dupont@example.com",
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Sophie",
      adresse: "45 Avenue des Fleurs",
      telephone: "098-765-4321",
      mf: "987654321",
      fax: "098-765-4322",
      email: "sophie.martin@example.com",
    },
    {
      id: 3,
      nom: "Bernard",
      prenom: "Lucas",
      adresse: "78 Boulevard Saint-Michel",
      telephone: "555-123-4567",
      mf: "555666777",
      fax: "555-123-4568",
      email: "lucas.bernard@example.com",
    },
  ]);

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

  // Fonction pour ajouter un client au tableau
  const addClient = (newClient) => {
    setClients([...clients, newClient]); // Ajoute le client à la liste
  };

  const modifyClient = (updatedClient) => {
    setClients(
      clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
  };

  const deleteClient = (clientId) => {
    setClients(clients.filter((client) => client.id !== clientId));
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
                key={client.id}
                onClick={() => selectClient(client)}
                style={{
                  backgroundColor:
                    selectedClient?.id === client.id ? "#e6f7ff" : "",
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
