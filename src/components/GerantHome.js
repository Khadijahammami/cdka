import React from "react";

const GerantHome = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#f4f4f4", // Fond général de la page
      }}
    >
     
      <div
        style={{
          display: "flex",
          justifyContent: "space-around", // Espacement uniforme horizontal entre les cartes
          width: "80%",
          maxWidth: "1200px", // Limite la taille des cartes
        }}
      >
        {/* Carte 1: Gérer Clients */}
        <div
          style={{
            width: "200px", // Chaque carte a une largeur fixe pour rester carrée
            aspectRatio: "1", // Maintien de la forme carrée
            padding: "20px",
            backgroundColor: "#FFFFFF",
            border: "5px solid #99c1e3",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px", // Espacement interne pour centrer le texte
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#1E2E46" }}>
            Gérer Clients
          </h2>
        </div>

        {/* Carte 2: Contrats */}
        <div
          style={{
            width: "200px",
            aspectRatio: "1",
            padding: "20px",
            backgroundColor: "#FFFFFF",
            border: "5px solid #99c1e3",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#1E2E46" }}>
            Contrats
          </h2>
        </div>

        {/* Carte 3: Contrôle Matériels */}
        <div
          style={{
            width: "200px",
            aspectRatio: "1",
            padding: "20px",
            backgroundColor: "#FFFFFF",
            border: "5px solid #99c1e3",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#1E2E46" }}>
            Contrôle matériels
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GerantHome;
