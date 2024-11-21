import React from "react"; 

const ClientHome = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Dashboard (Sidebar) */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* Boutons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "100px", // Espacement égal entre les boutons
            flex: 1, // Permet de distribuer l'espace
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              border: "2px solid #0065BB", // Bordure bleue
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Matériels
          </button>
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              border: "2px solid #0065BB", // Bordure bleue
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Historique
          </button>
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              border: "2px solid #0065BB", // Bordure bleue
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Réclamation
          </button>
        </div>

        {/* Bloc Utilisateur */}
        <div
          style={{
            backgroundColor: "#F0F0F0",
            borderRadius: "8px",
            padding: "15px",
            textAlign: "center",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="https://via.placeholder.com/60"
            alt="User"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
              width: "60px",
              height: "60px",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              margin: "5px 0",
              color: "#333",
            }}
          >
            Nom Prénom
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            utilisateur@gmail.com
          </p>
          <button
            style={{
              backgroundColor: "#FF5C5C",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Contenu Principal */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Espacement entre les éléments pour aligner le bouton en bas
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Liste des Matériels
          </h1>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    textAlign: "left",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  Nom
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    textAlign: "left",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  État
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    textAlign: "left",
                    backgroundColor: "#f8f8f8",
                  }}
                >
                  Prix
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Exemple de données */}
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  Matériel 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  Disponible
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  100€
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end", // Aligne le bouton à droite
            marginTop: "auto", // Pousse le bouton vers le bas
          }}
        >
          <button
            style={{
              backgroundColor: "#0065BB",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Louer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientHome;
