import React from "react";
import Logo from "../images/logo.png";

const ClientHome = () => {
  const styles = {
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
  };
  return (
    <div>
      <header style={styles.header}>
        <img src={Logo} alt="Company Logo" style={styles.logo} />
        <div style={styles.profile}>
          <span style={{ fontSize: "12px" }}>Nom et prénom</span>
          <div style={styles.profileIcon}></div>
        </div>
      </header>
      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#fff",
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
              gap: "40px", // Espacement égal entre les boutons
              flex: 1,
              marginTop: "20px",
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
              textAlign: "left",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              display: "flex", // Flexbox layout
              alignItems: "center", // Center items vertically
              gap: "10px", // Space between items
              border: "1px solid #D9D9D9",
            }}
          >
            <img
              src="https://via.placeholder.com/60"
              alt="User"
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
              }}
            />
            <div style={{ flex: "1" }}>
              {" "}
              <p
                style={{
                  fontSize: "10px",
                  color: "#666",
                  margin: "5px 0",
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
    </div>
  );
};

export default ClientHome;
