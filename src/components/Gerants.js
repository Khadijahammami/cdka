import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaMinus } from 'react-icons/fa';
import axios from 'axios';

const Gerants = () => {
  const [gerants, setGerants] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [gerantToEdit, setGerantToEdit] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [newGerant, setNewGerant] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
    email: '',
    depot: '',
  });

  const fetchGerants = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/gerants");
      setGerants(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des gérants", error);
    }
  };

  useEffect(() => {
    fetchGerants();
  }, []);

  const handleAddGerant = () => setIsAddFormVisible(true);

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/gerants", newGerant);
      fetchGerants();
      setNewGerant({ nom: '', prenom: '', adresse: '', telephone: '', email: '', depot: '' });
      setIsAddFormVisible(false);
      alert("Gérant ajouté avec succès !");
    } catch (error) {
      alert("Erreur lors de l'ajout du gérant.");
      console.error(error);
    }
  };

  const handleEditGerant = () => {
    if (selectedIndex === null) {
      alert('Veuillez sélectionner un gérant pour le modifier.');
      return;
    }
    const { _id, __v, ...gerantWithoutId } = gerants[selectedIndex];  // Exclure _id et __v
    setGerantToEdit(gerantWithoutId);
    setIsEditFormVisible(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (gerantToEdit) {
      try {
        // Assure-toi que l'ID est bien récupéré
        const id = gerants[selectedIndex]._id;  // Si l'ID est sous _id
        console.log("Données envoyées pour la modification :", gerantToEdit); // Log pour vérifier
        await axios.put(`http://localhost:5000/api/gerants/${id}`, gerantToEdit);
        fetchGerants();
        setIsEditFormVisible(false);
        alert("Gérant modifié avec succès !");
      } catch (error) {
        alert("Erreur lors de la modification du gérant.");
        console.error("Erreur lors de la modification : ", error);
      }
    }
  };
  
  
  const handleDeleteGerant = async () => {
    if (selectedIndex === null) {
      alert('Veuillez sélectionner un gérant pour le supprimer.');
      return;
    }
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer ce gérant ?');
    if (confirmDelete) {
      try {
        const id = gerants[selectedIndex]._id;
        await axios.delete(`http://localhost:5000/api/gerants/${id}`);
        fetchGerants();
        setSelectedIndex(null);
        alert("Gérant supprimé avec succès !");
      } catch (error) {
        alert("Erreur lors de la suppression du gérant.");
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isEditFormVisible) {
      setGerantToEdit({ ...gerantToEdit, [name]: value });
    } else {
      setNewGerant({ ...newGerant, [name]: value });
    }
  };

  const handleSelectGerant = (index) => setSelectedIndex(index);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestion des Gérants</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
        <button onClick={handleAddGerant} style={buttonStyle}><FaPlus /> Ajouter</button>
        <button onClick={handleEditGerant} style={buttonStyle}><FaEdit /> Modifier</button>
        <button onClick={handleDeleteGerant} style={buttonStyle}><FaMinus /> Supprimer</button>
      </div>

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

      {isAddFormVisible && (
        <FormModal
          title="Ajouter"
          gerant={newGerant}
          handleChange={handleChange}
          handleSubmit={handleAddSubmit}
          closeModal={() => setIsAddFormVisible(false)}
        />
      )}

      {isEditFormVisible && (
        <FormModal
          title="Modifier "
          gerant={gerantToEdit}
          handleChange={handleChange}
          handleSubmit={handleEditSubmit}
          closeModal={() => setIsEditFormVisible(false)}
        />
      )}
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#FFFFFF',
  color: '#000',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const FormModal = ({ title, gerant, handleChange, handleSubmit, closeModal }) => (
  <div style={modalOverlayStyle}>
    <div style={modalStyle}>
      <fieldset style={fieldsetStyle}>
        <legend style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{title}</legend>
        <form onSubmit={handleSubmit}>
          {Object.keys(gerant).map((key) => (
            <div key={key} style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block' }}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
              <input
                type="text"
                name={key}
                value={gerant[key]}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px', marginBottom: '10px',border: "1px solid rgba(0, 101, 187)",borderRadius : "10px" }}
              />
            </div>
          ))}
          <button type="submit" style={{ ...buttonStyle, backgroundColor: '#7fb2dd', color: '#fff', marginLeft: '10px',borderColor:'#7fb2dd' }}>Enregistrer</button>
          
          <button type="button" onClick={closeModal} style={{ ...buttonStyle, backgroundColor: '#f44336', color: '#fff', marginLeft: '10px',borderColor:'#f44336' }}>
            Annuler
          </button>
        </form>
      </fieldset>
    </div>
  </div>
);

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const fieldsetStyle = {
  border: "2px solid #000",
  borderRadius: "8px",
  padding: "30px",
  margin: "10px 0",
};

export default Gerants;
