import React, { useState, useEffect } from "react";
import AjouterMateriel from "./AjouterMateriel"; // Composant pour ajouter un matériel
import EditMaterialForm from "./EditMaterialForm"; // Composant pour modifier un matériel
import axios from "axios"; // Axios pour les requêtes HTTP

const GererMateriels = () => {
  const [materiels, setMateriels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedMaterielCode, setSelectedMaterielCode] = useState(null);

  const API_URL = "http://localhost:5002/api/materiels"; // URL de l'API

  // Charger les matériels depuis l'API
  const fetchMateriels = async () => {
    try {
      const response = await axios.get(API_URL);
      setMateriels(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des matériels:", error);
    }
  };

  useEffect(() => {
    fetchMateriels();
  }, []);

  // Ajouter un matériel via l'API
  const handleAddMateriel = async (nouveauMateriel) => {
    try {
      const response = await axios.post(API_URL, nouveauMateriel, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMateriels((prevMateriels) => [...prevMateriels, response.data]);
      setShowForm(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout du matériel:", error);
      alert(`Erreur lors de l'ajout du matériel. Détails : ${error.message}`);
    }
  };

  // Modifier un matériel via l'API
  const handleUpdateMateriel = async (updatedMateriel) => {
    try {
      const response = await axios.put(
        `${API_URL}/${updatedMateriel.code}`,
        updatedMateriel,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setMateriels((prevMateriels) =>
        prevMateriels.map((m) =>
          m.code === response.data.code ? response.data : m
        )
      );
      setShowEditForm(false);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la mise à jour du matériel");
    }
  };

  // Supprimer un matériel via l'API
  const handleDeleteMateriel = async (code) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce matériel ?")) {
      return;
    }
    try {
      await axios.delete(`${API_URL}/${code}`);
      setMateriels((prevMateriels) =>
        prevMateriels.filter((materiel) => materiel.code !== code)
      );
      setSelectedMaterielCode(null);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Erreur lors de la suppression du matériel.");
    }
  };

  const handleCloseForm = () => setShowForm(false);
  const handleCloseEditForm = () => setShowEditForm(false);

  return (
    <div style={styles.container}>
       <header style={styles.header}>
        <img src="logo.png" alt="Logo" />
        <div>Nom et prénom</div>
      </header>
      <h1>Gestion des Matériels</h1>
      <div style={styles.mainContent}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCell}>Code</th>
              <th style={styles.tableCell}>Désignation</th>
              <th style={styles.tableCell}>Catégorie</th>
              <th style={styles.tableCell}>État</th>
              <th style={styles.tableCell}>Capacité</th>
              <th style={styles.tableCell}>Prix</th>
            </tr>
          </thead>
          <tbody>
            {materiels.map((materiel) => (
              <tr
                key={materiel.code}
                style={
                  materiel.code === selectedMaterielCode
                    ? { ...styles.row, ...styles.rowSelected }
                    : styles.row
                }
                onClick={() => setSelectedMaterielCode(materiel.code)}
              >
                <td style={styles.tableCell}>{materiel.code}</td>
                <td style={styles.tableCell}>{materiel.designation}</td>
                <td style={styles.tableCell}>{materiel.category}</td>
                <td style={styles.tableCell}>{materiel.etat}</td>
                <td style={styles.tableCell}>{materiel.capacite}</td>
                <td style={styles.tableCell}>{materiel.prix}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={styles.actions}>
          <button style={styles.buttonA} onClick={() => setShowForm(true)}>
            + Ajouter
          </button>
          <button
            style={styles.buttonM}
            disabled={!selectedMaterielCode}
            onClick={() => setShowEditForm(true)}
          >
            * Modifier
          </button>
          <button
            style={styles.buttonS}
            disabled={!selectedMaterielCode}
            onClick={() => handleDeleteMateriel(selectedMaterielCode)}
          >
            - Supprimer
          </button>
        </div>
      </div>
      {showForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <AjouterMateriel onAddMateriel={handleAddMateriel} />
            <button style={styles.button} onClick={handleCloseForm}>
              Fermer
            </button>
          </div>
        </div>
      )}
      {showEditForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <EditMaterialForm
              materiel={materiels.find((m) => m.code === selectedMaterielCode)}
              onUpdateMateriel={handleUpdateMateriel}
            />
            <button style={styles.button} onClick={handleCloseEditForm}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: "20px",
    fontFamily: "Arial, sans-serif",
  },
  mainContent: {
    display: "flex",
    alignItems: "flex-start",
  },
  actions: {
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
  },
  buttonA: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#050C9C",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px",
  },
  buttonM: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#3572EF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px",
  },
  buttonS: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#3ABEF9",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px",
  },
  table: {
    width: "90%",
    borderCollapse: "collapse",
    backgroundColor: "#f4f4f4",
  },
  tableHeader: {
    backgroundColor: "#d3d3d3",
  },

  tableCell: {
    padding: "10px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  row: {
    cursor: "pointer",
  },
  rowSelected: {
    backgroundColor: "#e0e0e0",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
  },
  
};

export default GererMateriels;
