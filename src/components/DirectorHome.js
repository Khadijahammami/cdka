import React from "react";
import { useNavigate } from "react-router-dom"; // Import du hook useNavigate

const DirectorHome = () => {
  const navigate = useNavigate(); // Initialisation du hook useNavigate

  const cardStyle = {
    flex: 1, // Force chaque carte à prendre une largeur égale
    aspectRatio: "1", // Forme carrée pour maintenir la proportion
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s, background-color 0.2s",
    maxWidth: "350px", // Limite la largeur des cartes
  };

  const textStyle = {
    fontWeight: "bold", // Texte en gras
    fontSize: "15px", // Taille du texte
    color: "#333",
    textAlign: "center",
  };

  // Fonction qui gère le clic sur une carte
  const handleCardClick = (title) => {
    if (title === 'Gérer Dépôts') {
      navigate('/depot'); // Redirige vers la page Depot.js
    } else {
      console.warn(`Aucune route définie pour ${title}`);
      alert('Cette fonctionnalité n\'est pas encore disponible.');
    }
    if (title === 'Gérer Clients') {
      navigate('/client'); // Redirige vers la page Depot.js
    } else {
      console.warn(`Aucune route définie pour ${title}`);
      alert('Cette fonctionnalité n\'est pas encore disponible.');
    }
    if (title === 'Gérer Gérants') {
      navigate('/gerants'); // Redirige vers la page Depot.js
    } else {
      console.warn(`Aucune route définie pour ${title}`);
      alert('Cette fonctionnalité n\'est pas encore disponible.');
    }
  };
  

  return (
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
  );
};

export default DirectorHome;
