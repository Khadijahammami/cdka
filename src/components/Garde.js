import React from 'react';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '20px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  logo: {
    height: '40px'
  },
  navLinks: {
    display: 'flex',
    gap: '20px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s'
  },
  'navLink:hover': {
    color: '#ffcc00'
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '40px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px'
  },
  heroVideo: {
    width: '100%',
    maxWidth: '800px',
    marginBottom: '20px'
  },
  heroContent: {
    textAlign: 'center'
  },
  h1: {
    color: '#333',
    fontSize: '36px',
    marginBottom: '20px'
  },
  p: {
    color: '#555',
    fontSize: '16px',
    marginBottom: '20px'
  },
  companies: {
    backgroundColor: '#fff',
    padding: '40px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '40px'
  },
  logos: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px'
  },
  companyLogo: {
    height: '50px'
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '30px 0',
    marginTop: '40px'
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s'
  },
  'footerLink:hover': {
    color: '#007bff'
  },
  contactInfo: {
    textAlign: 'center'
  },
  copyright: {
    textAlign: 'center',
    marginTop: '20px'
  }
};

function Garde() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="logo.png" alt="Logo" style={styles.logo} />
        <nav>
  <ul style={styles.navLinks}>
    <li>
      <a href="/signin" style={styles.navLink}>
        Se connecter
      </a>
    </li>
    <li>
      <a href="/signup" style={styles.navLink}>
        S'inscrire
      </a>
    </li>
  </ul>
</nav>

      </header>
      <section style={styles.hero}>
        <video autoPlay loop muted playsInline style={styles.heroVideo}>
          <source src="hero-video.mp4" type="video/mp4" />
        </video>
        <div style={styles.heroContent}>
          <h1 style={styles.h1}>Un logiciel de gestion de matériel en location ?</h1>
          <p style={styles.p}>
            La gestion des stocks et équipements est un aspect crucial pour les entreprises spécialisées dans la location de matériel.
            Avec des coûts en constante augmentation, il peut être tentant de limiter les dépenses en improvisant des solutions internes.
            À terme, cela pourrait coûter plus cher que l'utilisation d'un logiciel spécialisé, conçu pour optimiser vos processus et
            répondre parfaitement aux besoins spécifiques de votre activité.
          </p>
        </div>
      </section>
<section style={styles.companies}>
        <h2>Plus de 500 entreprises, écoles et villes font confiance à Timly</h2>
        <div style={styles.logos}>
          <img src="siemens.png" alt="Siemens" style={styles.companyLogo} />
          <img src="panasonic.png" alt="Panasonic" style={styles.companyLogo} />
          <img src="sodastream.png" alt="Sodastream" style={styles.companyLogo} />
          <img src="europcar.png" alt="Europcar" style={styles.companyLogo} />
          <img src="basf.png" alt="BASF" style={styles.companyLogo} />
          <img src="philips.png" alt="Philips" style={styles.companyLogo} />
          <img src="sncf.png" alt="SNCF" style={styles.companyLogo} />
          <img src="ub.png" alt="UB" style={styles.companyLogo} />
        </div>
      </section>
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#home" style={styles.footerLink}>Accueil</a>
          <a href="#services" style={styles.footerLink}>Nos services</a>
          <a href="#about" style={styles.footerLink}>À propos de nous</a>
          <a href="#contact" style={styles.footerLink}>Contact</a>
          <a href="#terms" style={styles.footerLink}>Conditions générales</a>
        </div>
        <div style={styles.contactInfo}>
          <p>Adresse : Tunis, Tunisia</p>
          <p>Téléphone : +216 74 000 000</p>
          <p>Email : contact@votresociete.com</p>
        </div>
        <p style={styles.copyright}>© 2024 CDKA - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default Garde;
