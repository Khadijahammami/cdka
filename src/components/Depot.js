import React, { useState } from "react";

const Depot = () => {
  // Exemple de données
  const [depots, setDepots] = useState([
    { code: "001", adresse: "Adresse 1", telephone: "123456789", fax: "987654321", gerant: "Gérant 1" },
    { code: "002", adresse: "Adresse 2", telephone: "234567890", fax: "876543210", gerant: "Gérant 2" },
    { code: "003", adresse: "Adresse 3", telephone: "345678901", fax: "765432109", gerant: "Gérant 3" },
  ]);

  // Fonction pour ajouter un dépôt
  const handleAdd = () => {
    alert("Ajouter un dépôt");
  };

  // Fonction pour modifier un dépôt
  const handleEdit = () => {
    alert("Modifier le dépôt sélectionné");
  };

  // Fonction pour supprimer un dépôt
  const handleDelete = () => {
    alert("Supprimer le dépôt sélectionné");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4", height: "100vh" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Liste des Dépôts
      </h1>

      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <table
            style={{
              width: "70%",
              borderCollapse: "collapse",
              backgroundColor: "#fff",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px 12px",
                    textAlign: "left",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  Code
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px 12px",
                    textAlign: "left",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  Adresse
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px 12px",
                    textAlign: "left",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  Téléphone
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px 12px",
                    textAlign: "left",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  Fax
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px 12px",
                    textAlign: "left",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  Gérants
                </th>
              </tr>
            </thead>
            <tbody>
              {depots.map((depot, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ddd", padding: "8px 12px" }}>{depot.code}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px 12px" }}>{depot.adresse}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px 12px" }}>{depot.telephone}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px 12px" }}>{depot.fax}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px 12px" }}>{depot.gerant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Conteneur des boutons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Espacement entre les boutons
            alignItems: "center",
            marginLeft: "20px",
            height: "auto", // Ajuste la hauteur pour occuper l'espace
            position: "relative", // Permet de garder le conteneur à la même hauteur
          }}
        >
          <button
            onClick={handleAdd}
            style={{
              padding: "12px 30px", // Agrandir le bouton en ajoutant du padding
              backgroundColor: "#0065BB",
              color: "white",
              border: "none",
              borderRadius: "8px", // Ajout du border-radius pour un effet arrondi
              cursor: "pointer",
              marginBottom: "10px", // Ajout d'un peu plus d'espace entre les boutons
              width: "250px", // Largeur augmentée
            }}
          >
            Ajouter 
          </button>
          <button
            onClick={handleEdit}
            style={{
              padding: "12px 16px",
              backgroundColor: "#0065BB",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "10px",
              width: "250px",
            }}
          >
            Modifier 
          </button>
          <button
            onClick={handleDelete}
            style={{
              padding: "12px 16px",
              backgroundColor: "#0065BB",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              width: "250px",
            }}
          >
            Supprimer 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Depot;
