import React from "react";
import Logo from "../images/logo.png";
import Teaser from "../images/teaser.mp4";
import Siemens from "../images/siemens.png";
import Panasonic from "../images/panasonic.png";
import Sodastream from "../images/sodastream.png";
import Europcar from "../images/europcar.png";
import BASF from "../images/basf.png";
import Philips from "../images/philips.png";
import SNCF from "../images/sncf.png";
import UB from "../images/ub.png";
import Facebook from "../images/fc.png";
import Instagram from "../images/insta.png";
import LinkedIn from "../images/link.png";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    padding: "0 20px",
    lineHeight: "1.6",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #e6e6e6",
  },
  logo: {
    height: "85px",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  navLinkLogin: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "13px",
    padding: "10px 20px",
    borderRadius: "10px",
    backgroundColor: "#d3d3d3",
    color: "#fff",
    transition: "background-color 0.3s",
  },
  navLinkSignup: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "13px",
    padding: "10px 20px",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 101, 187, 0.6)",
    color: "#fff",
    transition: "background-color 0.3s",
  },
  separator: {
    margin: "20px 0",
  },
  videoContainer: {
    margin: "20px 0",
  },
  video: {
    width: "100%",
    borderRadius: "10px",
    height: "60%",
  },
  hero: {
    textAlign: "left",
    margin: "100px 0",
  },
  h1: {
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  p: {
    fontSize: "16px",
    color: "#555",
  },
  companies: {
    backgroundColor: "#fff",
    padding: "20px",
    margin: "40px 0",
    textAlign: "center",
    marginBottom: "120px",
  },
  logos: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 logos per row
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60px",
  },
  companyLogo: {
    width: "100%", // Ensures all logos have the same size
    height: "auto", // Keeps the aspect ratio of logos intact
    maxHeight: "60px", // Ensure logos are not too big
    objectFit: "contain", // Makes sure the logos fit within the container
  },
  footer: {
    backgroundColor: "rgba(0, 101, 187, 0.6)", // Couleur principale
    padding: "20px 20px",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  footerColumn: {
    flex: "1 1 20%", // Trois colonnes sur une rangée
    padding: "10px",
    textAlign: "left",
  },
  footerLinks: {
    listStyle: "none",
    padding: 0,
    marginLeft: "90px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    marginBottom: "10px",
    display: "block",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    marginLeft: "20px",
  },
  socialIcon: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  copyright: {
    textAlign: "center", // Center the copyright text
    width: "100%", // Ensure it takes up full width
    marginTop: "20px", // Space above the copyright text
    fontSize: "14px", // Font size for the copyright text
    color: "#fff", // White text color
    marginTop: "40px",
    fontWeight: "meduim",
  },
};

function Garde() {
  return (
    <div style={styles.container}>
      {/* En-tête */}
      <header style={styles.header}>
        <img src={Logo} alt="Logo" style={styles.logo} />
        <nav>
          <ul style={styles.navLinks}>
            <a href="/signin" style={styles.navLinkLogin}>
              Se connecter
            </a>

            <a href="/signup" style={styles.navLinkSignup}>
              S'inscrire
            </a>
          </ul>
        </nav>
      </header>

      {/* Ligne de séparation */}
      <div style={styles.separator}></div>

      {/* Vidéo */}
      <div style={styles.videoContainer}>
        <video style={styles.video} autoPlay muted loop>
          <source src={Teaser} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>

      {/* Section principale */}
      <section style={styles.hero}>
        <h1 style={styles.h1}>
          Un logiciel de gestion de matériel en location ?
        </h1>
        <p style={styles.p}>
          La gestion des stocks et équipements est un aspect crucial pour les
          entreprises spécialisées dans la location de matériel. Avec des coûts
          en constante augmentation, il peut être tentant de limiter les
          dépenses en improvisant des solutions internes.
          <br />
          <br />À terme, cela pourrait coûter plus cher que l'utilisation d'un
          logiciel spécialisé, conçu pour optimiser vos processus et répondre
          parfaitement aux besoins spécifiques de votre activité.
        </p>
      </section>

      {/* Logos d'entreprises */}
      <section style={styles.companies}>
        <h2>Plus de 500 entreprises, écoles et villes font confiance à CDKA</h2>
        <div style={styles.logos}>
          <img src={Siemens} alt="Siemens" style={styles.companyLogo} />
          <img src={Panasonic} alt="Panasonic" style={styles.companyLogo} />
          <img src={Sodastream} alt="Sodastream" style={styles.companyLogo} />
          <img src={Europcar} alt="Europcar" style={styles.companyLogo} />
          <img src={BASF} alt="BASF" style={styles.companyLogo} />
          <img src={Philips} alt="Philips" style={styles.companyLogo} />
          <img src={SNCF} alt="SNCF" style={styles.companyLogo} />
          <img src={UB} alt="UB" style={styles.companyLogo} />
        </div>
      </section>

      {/* Pied de page */}
      <footer style={styles.footer}>
        {/* Colonne 1 : Liens utiles */}
        <div style={styles.footerColumn}>
          <ul style={styles.footerLinks}>
            <li>
              <a href="#home" style={styles.footerLink}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#services" style={styles.footerLink}>
                Nos services
              </a>
            </li>
            <li>
              <a href="#about" style={styles.footerLink}>
                À propos de nous
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.footerLink}>
                Contact
              </a>
            </li>
            <li>
              <a href="#conditions" style={styles.footerLink}>
                Conditions générales
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.footerColumn}>
          <ul style={styles.footerLinks}>
            <li>
              <a href="#" style={styles.footerLink}>
                📍 Adresse : Tunis, Tunisia
              </a>
            </li>
            <li>
              <a href="#" style={styles.footerLink}>
                📞 Téléphone : +216 74 000 000
              </a>
            </li>
            <li>
              <a href="#" style={styles.footerLink}>
                ✉️ Email : contact@votresociete.com
              </a>
            </li>
          </ul>
          <div style={{ marginTop: "40px" }}>
            <ul style={styles.footerLinks}>
              <li>
                <a href="#" style={styles.footerLink}>
                  📲 Suivez-nous :
                </a>
              </li>
            </ul>
            <div style={{ marginLeft: "90px" }}>
              <div style={styles.socialIcons}>
                <img src={Facebook} alt="Facebook" style={styles.socialIcon} />
                <img
                  src={Instagram}
                  alt="Instagram"
                  style={styles.socialIcon}
                />
                <img src={LinkedIn} alt="LinkedIn" style={styles.socialIcon} />
              </div>
            </div>
          </div>
        </div>
        <div style={styles.copyright}>© 2024 CDKA - Tous droits réservés</div>
      </footer>
    </div>
  );
}

export default Garde;
