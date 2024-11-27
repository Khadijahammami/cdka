import React from "react";
import Logo from "../images/logo.png";

const GerantHome = () => {
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
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          padding: "20px",
          backgroundColor: "#fff", // Fond général de la page
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around", // Espacement uniforme horizontal entre les cartes
            width: "80%",
            maxWidth: "1000px",
            marginBottom: "200px",
            gap: "80px",
          }}
        >
          {/* Carte 1: Gérer Clients */}
          <div
            style={{
              width: "200px", // Chaque carte a une largeur fixe pour rester carrée
              aspectRatio: "1", // Maintien de la forme carrée
              padding: "20px",
              backgroundColor: "#FFFFFF",
              border: "2px solid rgba(0, 101, 187)",
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
            <h2
              style={{ fontSize: "19px", fontWeight: "bold", color: "#1E2E46" }}
            >
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
              border: "2px solid rgba(0, 101, 187)",
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
            <h2
              style={{ fontSize: "19px", fontWeight: "bold", color: "#1E2E46" }}
            >
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
              border: "2px solid rgba(0, 101, 187)",
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
            <h2
              style={{ fontSize: "19px", fontWeight: "bold", color: "#1E2E46" }}
            >
              Contrôle matériels
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GerantHome;
