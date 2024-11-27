import React, { useState } from "react";
import axios from "axios";

const AjoutMateriel = () => {
  const [code, setCode] = useState("");
  const [designation, setDesignation] = useState("");
  const [category, setCategory] = useState("");
  const [etat, setEtat] = useState("");
  const [capacite, setCapacite] = useState("");
  const [prix, setPrix] = useState("");
  const [message, setMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true); // État pour gérer la visibilité du formulaire

  const categories = ["Électronique", "Mobilier", "Outils", "Véhicules"];
  const etats = ["Neuf", "Bon état", "Usagé", "Défectueux"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const capaciteNumber = Number(capacite);
    const prixNumber = Number(prix);

    if (isNaN(capaciteNumber) || isNaN(prixNumber)) {
      setMessage("La capacité et le prix doivent être des nombres.");
      return;
    }

    const nouveauMateriel = {
      code,
      designation,
      category,
      etat,
      capacite: capaciteNumber,
      prix: prixNumber,
    };

    axios
      .post("http://localhost:5002/api/materiels", nouveauMateriel)
      .then(() => {
        setMessage("Matériel ajouté avec succès");
        setCode("");
        setDesignation("");
        setCategory("");
        setEtat("");
        setCapacite("");
        setPrix("");
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'ajout du matériel:",
          error.response || error.message
        );
        setMessage(
          "Erreur lors de l'ajout du matériel. Vérifiez la connexion au serveur."
        );
      });
  };

  return (
    <div>
      {isFormVisible ? (
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset style={styles.fieldset}>
              <legend style={styles.legend}>
                <h2>Ajouter Matériel</h2>
              </legend>
              <div style={styles.field}>
                <label>Code</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label>Désignation</label>
                <input
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label>Catégorie</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  style={styles.input}
                >
                  <option value="" disabled>
                    Sélectionnez une catégorie
                  </option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div style={styles.field}>
                <label>État</label>
                <select
                  value={etat}
                  onChange={(e) => setEtat(e.target.value)}
                  required
                  style={styles.input}
                >
                  <option value="" disabled>
                    Sélectionnez un état
                  </option>
                  {etats.map((etat, index) => (
                    <option key={index} value={etat}>
                      {etat}
                    </option>
                  ))}
                </select>
              </div>
              <div style={styles.field}>
                <label>Capacité</label>
                <input
                  type="number"
                  value={capacite}
                  onChange={(e) => setCapacite(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label>Prix</label>
                <input
                  type="number"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div>
                <button style={styles.button} type="submit">
                  Ajouter
                </button>
                <button
                  style={{ ...styles.button, backgroundColor: "red" }}
                  type="button"
                  onClick={() => setIsFormVisible(false)}
                >
                  Annuler
                </button>
              </div>
            </fieldset>
          </form>
          {message && <p>{message}</p>}
        </div>
      ) : (
        <button
          style={{ ...styles.button, backgroundColor: "#007acc" }}
          onClick={() => setIsFormVisible(true)}
        >
          Réouvrir le formulaire
        </button>
      )}
    </div>
  );
};

const styles = {
  fieldset: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "20px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  input: {
    padding: "6px",
    border: "1px solid #007acc",
    borderRadius: "8px",
    outline: "none",
  },
  legend: {
    color: "#007acc",
  },
  button: {
    backgroundColor: "#007acc",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginRight: "10px",
  },
};

export default AjoutMateriel;
