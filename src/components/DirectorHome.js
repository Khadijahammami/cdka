import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

const DirectorHome = () => {
  const navigate = useNavigate(); // Initialisation du hook useNavigate
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
  const cardStyle = {
    flex: 1, // Force chaque carte à prendre une largeur égale
    aspectRatio: "1", // Forme carrée pour maintenir la proportion
    backgroundColor: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s, background-color 0.2s",
    maxWidth: "270px", // Limite la largeur des cartes
    border: "2px solid rgba(0, 101, 187)",
  };

  const textStyle = {
    fontWeight: "bold", // Texte en gras
    fontSize: "19px", // Taille du texte
    color: "#333",
    textAlign: "center",
  };

  // Fonction qui gère le clic sur une carte
  const handleCardClick = (title) => {
    if (title === "Gérer Dépôts") {
      navigate("/depot"); // Redirige vers la page Depot.js
    } else {
      console.warn(`Aucune route définie pour ${title}`);
    }
    if (title === "Gérer Clients") {
      navigate("/client"); // Redirige vers la page Depot.js
    } else {
      console.warn(`Aucune route définie pour ${title}`);
    }
    if (title === "Gérer Gérants") {
      navigate("/gerants"); // Redirige vers la page Depot.js
    } else {
      console.warn(`Aucune route définie pour ${title}`);
    }
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
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          gap: "25px", // Espacement vertical entre les lignes
        }}
      >
        {/* Lignes contenant les cartes */}
        {[
          ["Gérer Dépôts", "Gérer Gérants", "Gérer Matériels"],
          ["Gérer Fournisseurs", "Gérer Clients"],
        ].map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "space-between", // Espacement horizontal entre les cartes
              gap: "20px", // Espacement uniforme entre les cartes
              width: rowIndex === 1 ? "60%" : "80%", // Ajuste la largeur des lignes
            }}
          >
            {row.map((title, cardIndex) => (
              <div
                key={cardIndex}
                style={cardStyle}
                onClick={() => handleCardClick(title)} // Appel de la fonction handleCardClick
              >
                <h3 style={textStyle}>{title}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorHome;
