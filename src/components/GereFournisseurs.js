import React, { useState, useEffect } from 'react';
import AjoutFournisseurs from './AjoutFournisseurs'; // Assurez-vous que ce fichier existe et est correctement importé
import ModifierFournisseurs from './ModifierFournisseurs'; // Assurez-vous que ce fichier existe et est correctement importé

const GereFournisseur = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedFournisseurId, setSelectedFournisseurId] = useState(null);
  const [fournisseurs, setFournisseurs] = useState([]);

  // Charger la liste des fournisseurs depuis l'API
  useEffect(() => {
    fetch("http://localhost:5002/api/fournisseurs")
      .then((response) => response.json())
      .then((data) => setFournisseurs(data))
      .catch((error) => console.error("Erreur lors de la récupération des fournisseurs:", error));
  }, []);

  // Gestion de l'affichage du formulaire d'ajout
  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Ajout d'un fournisseur
  const handleAddFournisseur = (nouveauFournisseur) => {
    setFournisseurs([...fournisseurs, nouveauFournisseur]);
    setShowForm(false);
  };

  // Editer un fournisseur
  const handleEditFournisseur = (fournisseurId) => {
    setSelectedFournisseurId(fournisseurId);
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setSelectedFournisseurId(null);
  };

  // Mettre à jour un fournisseur
  const handleUpdateFournisseur = (updatedFournisseur) => {
    setFournisseurs((prev) =>
      prev.map((f) =>
        f.code === updatedFournisseur.code ? updatedFournisseur : f
      )
    );
    handleCloseEditForm();
  };

  // Supprimer un fournisseur
  const handleDeleteFournisseur = (fournisseurId) => {
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce fournisseur ?");
    
    if (isConfirmed) {
      fetch(`http://localhost:5002/api/fournisseurs/${fournisseurId}`, {
        method: 'DELETE',
      })
      .then(() => {
        setFournisseurs((prev) => prev.filter((f) => f.code !== fournisseurId));
      })
      .catch((error) => console.error("Erreur lors de la suppression du fournisseur:", error));
    }
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      borderBottom: "1px solid #ccc",
    },
    container: {
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#fff",
      maxWidth: "90%",
    },
    actions: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "20px",
      gap: "10px",
    },
    button: {
      padding: "8px 15px",
      fontSize: "14px",
      border: "1px solid #333",
      backgroundColor: "#fff",
      cursor: "pointer",
      borderRadius: "5px",
    },
    dataTable: {
      display: "grid",
      gap: "0px",
    },
    tableRow: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      padding: "10px 0",
      borderBottom: "1px solid #ccc",
    },
    lastRow: {
      borderBottom: "none",
    },
    tableCell: {
      padding: "10px",
      backgroundColor: "#fff",
    },
    tableHeader: {
      fontWeight: "bold",
      borderBottom: "2px solid #000",
    },
    modal: {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      width: "450px",
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <img src="logo.png" alt="Logo" />
        <div>Nom et prénom</div>
      </header>
      <div style={styles.container}>
        <div style={styles.actions}>
          <button style={styles.button} onClick={handleShowForm}>
            + Ajouter
          </button>
          <button
            style={styles.button}
            disabled={!selectedFournisseurId}
            onClick={() => handleEditFournisseur(selectedFournisseurId)}
          >
            {selectedFournisseurId ? "* Modifier" : "Sélectionner un fournisseur"}
          </button>
          <button
            style={styles.button}
            disabled={!selectedFournisseurId}
            onClick={() => handleDeleteFournisseur(selectedFournisseurId)}
          >
            - Supprimer
          </button>
        </div>
        <div style={styles.dataTable}>
          <div style={{ ...styles.tableRow, ...styles.tableHeader }}>
            <span style={styles.tableCell}>Code</span>
            <span style={styles.tableCell}>Nom</span>
            <span style={styles.tableCell}>Prénom</span>
            <span style={styles.tableCell}>Adresse</span>
            <span style={styles.tableCell}>Téléphone</span>
            <span style={styles.tableCell}>Fax</span>
            <span style={styles.tableCell}>Adresse-e</span>
          </div>
          {fournisseurs.map((fournisseur) => (
            <div
              key={fournisseur.code}
              style={
                fournisseur.code === selectedFournisseurId
                  ? { ...styles.tableRow, backgroundColor: "#f0f0f0" }
                  : styles.tableRow
              }
              onClick={() => setSelectedFournisseurId(fournisseur.code)}
            >
              <span style={styles.tableCell}>{fournisseur.code}</span>
              <span style={styles.tableCell}>{fournisseur.nom}</span>
              <span style={styles.tableCell}>{fournisseur.prenom}</span>
              <span style={styles.tableCell}>{fournisseur.adresse}</span>
              <span style={styles.tableCell}>{fournisseur.telephone}</span>
              <span style={styles.tableCell}>{fournisseur.fax}</span>
              <span style={styles.tableCell}>{fournisseur.email}</span>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <AjoutFournisseurs onAddFournisseur={handleAddFournisseur} onClose={handleCloseForm} />
            <button onClick={handleCloseForm} style={styles.button}>
              
            </button>
          </div>
        </div>
      )}

      {showEditForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <ModifierFournisseurs
              fournisseur={fournisseurs.find(f => f.code === selectedFournisseurId)}
              onUpdateFournisseur={handleUpdateFournisseur}
              onClose={handleCloseEditForm}
            />
            <button onClick={handleCloseEditForm} style={styles.button}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GereFournisseur;
