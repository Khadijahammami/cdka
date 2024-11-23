import React, { useState } from 'react';
import { FaPlus, FaEdit, FaMinus } from 'react-icons/fa';

const Gerants = () => {
  // Données fictives pour les gérants (à remplacer par des données dynamiques ou une API)
  const [gerants, setGerants] = useState([
    { nom: 'Dupont', prenom: 'Pierre', adresse: '123 rue A', telephone: '123456789', email: 'pierre@exemple.com', depot: 'Depot 1' },
    { nom: 'Martin', prenom: 'Marie', adresse: '456 rue B', telephone: '987654321', email: 'marie@exemple.com', depot: 'Depot 2' },
  ]);

  // Pour afficher ou masquer le formulaire d'ajout
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  // Pour afficher ou masquer le formulaire de modification
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  // Pour gérer le gérant à modifier
  const [gerantToEdit, setGerantToEdit] = useState(null);

  // Pour suivre le gérant sélectionné dans le tableau
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Données du nouvel ajout de gérant
  const [newGerant, setNewGerant] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
    email: '',
    depot: '',
    depotAdresse: ''
  });

  // Fonction pour afficher le formulaire d'ajout
  const handleAddGerant = () => {
    setIsAddFormVisible(true); // Afficher le formulaire
  };

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGerant(prev => ({
      ...prev,
      [name]: value,
      depotAdresse: name === 'depot' ? depots.find(d => d.code === value)?.adresse || '' : prev.depotAdresse
    }));
  };

  // Fonction pour valider et ajouter le gérant
  const handleSubmit = (e) => {
    e.preventDefault();
    setGerants([...gerants, newGerant]);
    setIsAddFormVisible(false); // Fermer le formulaire après soumission
    setNewGerant({
      nom: '',
      prenom: '',
      adresse: '',
      telephone: '',
      email: '',
      depot: '',
      depotAdresse: ''
    });
  };

  // Fonction pour gérer la modification d'un gérant
  const handleEditGerant = () => {
    if (selectedIndex === null) {
      alert('Veuillez sélectionner un gérant pour le modifier.');
      return;
    }
    const gerant = gerants[selectedIndex];
    setGerantToEdit(gerant);
    setIsEditFormVisible(true); // Afficher le formulaire de modification
  };

  // Fonction pour soumettre les modifications du gérant
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedGerants = [...gerants];
    updatedGerants[selectedIndex] = gerantToEdit;
    setGerants(updatedGerants);
    setIsEditFormVisible(false); // Fermer le formulaire après modification
    setGerantToEdit(null); // Réinitialiser les données du gérant
  };

  // Fonction pour supprimer un gérant
  const handleDeleteGerant = () => {
    if (selectedIndex === null) {
      alert('Veuillez sélectionner un gérant pour le supprimer.');
      return;
    }
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce gérant ?');
    if (confirmDelete) {
      const updatedGerants = gerants.filter((_, i) => i !== selectedIndex);
      setGerants(updatedGerants);
      setSelectedIndex(null); // Réinitialiser l'index sélectionné
    }
  };

  // Liste des dépôts (reste inchangée)
  const depots = [
    { code: 'D1', adresse: 'Adresse du Depot 1' },
    { code: 'D2', adresse: 'Adresse du Depot 2' },
    { code: 'D', adresse: 'Adresse du Depot' },
  ];

  // Fonction pour gérer la sélection d'un gérant
  const handleSelectGerant = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestion des Gérants</h2>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
        <button
          onClick={handleAddGerant}
          style={{
            backgroundColor: '#FFFFFF',
            color: '#000',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <FaPlus /> Ajouter
        </button>
        <button
          onClick={handleEditGerant}
          style={{
            backgroundColor: '#FFFFFF',
            color: '#000',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <FaEdit /> Modifier
        </button>
        <button
          onClick={handleDeleteGerant}
          style={{
            backgroundColor: '#FFFFFF',
            color: '#000',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <FaMinus /> Supprimer
        </button>
      </div>

      {/* Formulaire de modification de gérant */}
      {isEditFormVisible && gerantToEdit && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '400px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
            <fieldset style={{ border: "2px solid #000", borderRadius: "8px", padding: "30px", margin: "10px 0" }}>
              <legend style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Modifier le Gérant</legend>
              <form onSubmit={handleEditSubmit}>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block' }}>Nom:</label>
                  <input
                    type="text"
                    name="nom"
                    value={gerantToEdit.nom}
                    onChange={(e) => setGerantToEdit({...gerantToEdit, nom: e.target.value})}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block' }}>Prénom:</label>
                  <input
                    type="text"
                    name="prenom"
                    value={gerantToEdit.prenom}
                    onChange={(e) => setGerantToEdit({...gerantToEdit, prenom: e.target.value})}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                  />
                </div>
                {/* Ajoutez les autres champs ici */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#7fb2dd',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditFormVisible(false)}
                  style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                  }}
                >
                  Annuler
                </button>
              </form>
            </fieldset>
          </div>
        </div>
      )}

      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse</th>
            <th>Téléphone</th>
            <th>Email</th>
            <th>Depot</th>
          </tr>
        </thead>
        <tbody>
          {gerants.map((gerant, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: selectedIndex === index ? '#f0f0f0' : 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => handleSelectGerant(index)}
            >
              <td>{gerant.nom}</td>
              <td>{gerant.prenom}</td>
              <td>{gerant.adresse}</td>
              <td>{gerant.telephone}</td>
              <td>{gerant.email}</td>
              <td>{gerant.depot}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulaire d'ajout de gérant */}
      {isAddFormVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '400px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
            <fieldset style={{ border: "2px solid #000", borderRadius: "8px", padding: "30px", margin: "10px 0" }}>
              <legend style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Ajouter un Gérant</legend>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block' }}>Nom:</label>
                  <input
                    type="text"
                    name="nom"
                    value={newGerant.nom}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block' }}>Prénom:</label>
                  <input
                    type="text"
                    name="prenom"
                    value={newGerant.prenom}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block' }}>Adresse:</label>
                  <input 
                    type="text" 
                    name="adresse" 
                    value={newGerant.adresse} 
                    onChange={handleChange} 
                    required 
                    style={inputStyle} 
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block' }}>Téléphone:</label>
                  <input 
                    type="text" 
                    name="telephone" 
                    value={newGerant.telephone} 
                    onChange={handleChange} 
                    required 
                    style={inputStyle} 
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block' }}>Email:</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={newGerant.email} 
                    onChange={handleChange} 
                    required 
                    style={inputStyle} 
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block' }}>Dépôt:</label>
                  <select 
                    name="depot" 
                    value={newGerant.depot} 
                    onChange={handleChange} 
                    required 
                    style={inputStyle}
                  >
                    <option value="">Sélectionner un dépôt</option>
                    {depots.map((depot) => (
                      <option key={depot.code} value={depot.code}>{depot.code}</option>
                    ))}
                  </select>
                </div>
                {newGerant.depot && (
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block' }}>Adresse du dépôt:</label>
                    <input 
                      type="text" 
                      value={newGerant.depotAdresse} 
                      readOnly 
                      style={inputStyle} 
                    />
                  </div>
                )} 


                {/* Ajoutez les autres champs ici */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#7fb2dd',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Ajouter
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddFormVisible(false)}
                  style={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                  }}
                >
                  Annuler
                </button>
              </form>
            </fieldset>
          </div>
        </div>
      )}
    </div>
  );
};
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginTop: '5px',
};

// Style pour les boutons
const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};


export default Gerants;
