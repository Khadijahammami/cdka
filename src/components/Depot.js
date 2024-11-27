import React, { useState } from "react";
import Logo from "../images/logo.png";

const Depot = () => {
  const [depots, setDepots] = useState([
    {
      code: "001",
      adresse: "Adresse 1",
      telephone: "123456789",
      fax: "987654321",
      gerant: "Gérant 1",
    },
    {
      code: "002",
      adresse: "Adresse 2",
      telephone: "234567890",
      fax: "876543210",
      gerant: "Gérant 2",
    },
    {
      code: "003",
      adresse: "Adresse 3",
      telephone: "345678901",
      fax: "765432109",
      gerant: "Gérant 3",
    },
  ]);
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
  const [selectedDepot, setSelectedDepot] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newDepot, setNewDepot] = useState({
    code: "",
    adresse: "",
    telephone: "",
    fax: "",
    gerant: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepot((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (
      newDepot.code &&
      newDepot.adresse &&
      newDepot.telephone &&
      newDepot.fax &&
      newDepot.gerant
    ) {
      setDepots((prev) => [...prev, newDepot]);
      setNewDepot({
        code: "",
        adresse: "",
        telephone: "",
        fax: "",
        gerant: "",
      });
      setShowForm(false);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setNewDepot({ code: "", adresse: "", telephone: "", fax: "", gerant: "" });
  };

  const handleEdit = () => {
    if (selectedDepot) {
      setNewDepot(selectedDepot);
      setShowForm(true);
    } else {
      alert("Veuillez sélectionner un dépôt à modifier.");
    }
  };

  const handleDelete = () => {
    if (selectedDepot) {
      const userConfirmed = window.confirm(
        "Êtes-vous sûr de vouloir supprimer ce dépôt ?"
      );
      if (userConfirmed) {
        setDepots(depots.filter((depot) => depot.code !== selectedDepot.code));
        setSelectedDepot(null);
      }
    } else {
      alert("Veuillez sélectionner un dépôt à supprimer.");
    }
  };

  const handleSelectDepot = (depot) => {
    setSelectedDepot(depot);
  };

  const handleSaveEdit = () => {
    if (
      newDepot.code &&
      newDepot.adresse &&
      newDepot.telephone &&
      newDepot.fax &&
      newDepot.gerant
    ) {
      setDepots((prev) =>
        prev.map((depot) =>
          depot.code === newDepot.code ? { ...newDepot } : depot
        )
      );
      setShowForm(false);
      setSelectedDepot(null);
      setNewDepot({
        code: "",
        adresse: "",
        telephone: "",
        fax: "",
        gerant: "",
      });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div>
      {" "}
      <header style={styles.header}>
        <img src={Logo} alt="Company Logo" style={styles.logo} />
        <div style={styles.profile}>
          <span style={{ fontSize: "12px" }}>Nom et prénom</span>
          <div style={styles.profileIcon}></div>
        </div>
      </header>
      <div
        style={{ padding: "20px", backgroundColor: "#fff", height: "100vh" }}
      >
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Liste des Dépôts
        </h1>

        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <table
              style={{
                width: "70%",
                borderCollapse: "collapse",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px 12px",
                      textAlign: "left",
                      backgroundColor: "#f8f8f8",
                    }}
                  >
                    Code
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px 12px",
                      textAlign: "left",
                      backgroundColor: "#f8f8f8",
                    }}
                  >
                    Adresse
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px 12px",
                      textAlign: "left",
                      backgroundColor: "#f8f8f8",
                    }}
                  >
                    Téléphone
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px 12px",
                      textAlign: "left",
                      backgroundColor: "#f8f8f8",
                    }}
                  >
                    Fax
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px 12px",
                      textAlign: "left",
                      backgroundColor: "#f8f8f8",
                    }}
                  >
                    Gérants
                  </th>
                </tr>
              </thead>
              <tbody>
                {depots.map((depot, index) => (
                  <tr
                    key={index}
                    onClick={() => handleSelectDepot(depot)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedDepot && selectedDepot.code === depot.code
                          ? "#e0f7fa"
                          : "transparent",
                    }}
                  >
                    <td
                      style={{ border: "1px solid #ddd", padding: "8px 12px" }}
                    >
                      {depot.code}
                    </td>
                    <td
                      style={{ border: "1px solid #ddd", padding: "8px 12px" }}
                    >
                      {depot.adresse}
                    </td>
                    <td
                      style={{ border: "1px solid #ddd", padding: "8px 12px" }}
                    >
                      {depot.telephone}
                    </td>
                    <td
                      style={{ border: "1px solid #ddd", padding: "8px 12px" }}
                    >
                      {depot.fax}
                    </td>
                    <td
                      style={{ border: "1px solid #ddd", padding: "8px 12px" }}
                    >
                      {depot.gerant}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <button
              onClick={() => setShowForm(true)}
              style={{
                padding: "12px 30px",
                backgroundColor: "#0065BB",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginBottom: "10px",
                width: "250px",
              }}
            >
              Ajouter
            </button>
            <button
              onClick={handleEdit}
              style={{
                padding: "12px 16px",
                backgroundColor: "#0065BB",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginBottom: "10px",
                width: "250px",
              }}
            >
              Modifier
            </button>
            <button
              onClick={handleDelete}
              style={{
                padding: "12px 16px",
                backgroundColor: "#0065BB",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                width: "250px",
              }}
            >
              Supprimer
            </button>
          </div>
        </div>

        {showForm && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "8px",
                width: "400px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                border: "2px solid black",
              }}
            >
              <fieldset
                style={{
                  border: "2px solid #000",
                  borderRadius: "8px",
                  padding: "20px",
                  margin: "10px 0",
                }}
              >
                <legend style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {selectedDepot ? "Modifier" : "Ajouter"}
                </legend>
                <div style={{ marginBottom: "10px" }}>
                  <label>Code:</label>
                  <input
                    type="text"
                    name="code"
                    value={newDepot.code}
                    onChange={handleInputChange}
                    style={{
                      marginLeft: "10px",
                      padding: "5px",
                      width: "90%",
                      border: "1px solid #4c93cf",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Adresse:</label>
                  <input
                    type="text"
                    name="adresse"
                    value={newDepot.adresse}
                    onChange={handleInputChange}
                    style={{
                      marginLeft: "10px",
                      padding: "5px",
                      width: "90%",
                      border: "1px solid #4c93cf",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Téléphone:</label>
                  <input
                    type="text"
                    name="telephone"
                    value={newDepot.telephone}
                    onChange={handleInputChange}
                    style={{
                      marginLeft: "10px",
                      padding: "5px",
                      width: "90%",
                      border: "1px solid #4c93cf",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Fax:</label>
                  <input
                    type="text"
                    name="fax"
                    value={newDepot.fax}
                    onChange={handleInputChange}
                    style={{
                      marginLeft: "10px",
                      padding: "5px",
                      width: "90%",
                      border: "1px solid #4c93cf",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <label>Gérant:</label>
                  <input
                    type="text"
                    name="gerant"
                    value={newDepot.gerant}
                    onChange={handleInputChange}
                    style={{
                      marginLeft: "10px",
                      padding: "5px",
                      width: "90%",
                      border: "1px solid #4c93cf",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    onClick={handleSaveEdit}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#7fb2dd",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    {selectedDepot ? "Enregistrer" : "Ajouter"}
                  </button>
                  <button
                    onClick={handleCancel}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Annuler
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Depot;
