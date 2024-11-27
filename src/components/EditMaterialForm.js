import React, { useState, useEffect } from "react";
import axios from "axios";

const EditMaterielForm = ({ materiel, onUpdateMateriel }) => {
  const [formData, setFormData] = useState(materiel || {});
  const [message, setMessage] = useState(""); // Pour afficher les messages
  const [isFormVisible, setIsFormVisible] = useState(true); // État pour gérer la visibilité du formulaire

  // Met à jour les données du formulaire lorsque les props changent
  useEffect(() => {
    setFormData(materiel || {});
  }, [materiel]);

  // Gère les modifications des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Soumet le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification si tous les champs sont remplis
    if (!formData.code || !formData.designation || !formData.category || !formData.etat || !formData.capacite || !formData.prix) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      // Appel de la fonction de mise à jour via l'API
      const response = await axios.put(`http://localhost:5002/api/materiels/${formData.code}`, formData);

      // Vérification de la réponse
      if (response.status === 200) {
        setMessage("Matériel mis à jour avec succès !");
        // Appeler la fonction onUpdateMateriel pour mettre à jour localement les données
        onUpdateMateriel(formData);
      } else {
        setMessage(`Erreur ${response.status}: Impossible de mettre à jour le matériel.`);
      }
    } catch (error) {
      // Affiche les détails de l'erreur
      console.error("Erreur lors de la mise à jour du matériel:", error.response?.data || error);
      setMessage(`Erreur lors de la mise à jour du matériel : ${error.response?.data?.message || error.message}`);
    }
  };

  const categories = ["Électronique", "Mobilier", "Outils", "Véhicules"];
  const etats = ["Neuf", "Bon état", "Usagé", "Défectueux"];

  return (
    <div>
      {isFormVisible ? (
        <div>
          {message && <p>{message}</p>} {/* Affiche le message */}
          <form onSubmit={handleSubmit}>
            <fieldset style={styles.fieldset}>
              <legend style={styles.legend}>
                <h2>Modifier le Matériel</h2>
              </legend>
              <div style={styles.field}>
                <label>Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code || ""}
                  onChange={handleChange}
                  readOnly
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label>Désignation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation || ""}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label>Catégorie</label>
                <select
                  name="category"
                  value={formData.category || ""}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="" disabled>Sélectionnez une catégorie</option>
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
                  name="etat"
                  value={formData.etat || ""}
                  onChange={handleChange}
                  style={styles.input}
                >
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
                  name="capacite"
                  value={formData.capacite || ""}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.field}>
                <label>Prix</label>
                <input
                  type="number"
                  name="prix"
                  value={formData.prix || ""}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              <div>
                <button style={styles.button} type="submit">Modifier</button>
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
        </div>
      ): (
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
    padding: "4px",
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
  },
};

export default EditMaterielForm;
