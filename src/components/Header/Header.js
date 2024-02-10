import React from 'react';
import styles from './Header.module.css';
import logoImage from '../../assets/logo.png'; 

const Header = () => (
  <div className={styles.header}>
    <img src={logoImage} className={styles.logo} alt="Logo" />
    <h1 className={styles.title}>TabaPay UI Developer Project</h1>
    <ul className={styles.navMenu}>
      <li className={styles.navItem}><a href="https://developers.tabapay.com/">Home</a></li>
      <li className={styles.navItem}><a href="https://developers.tabapay.com/docs/learn-more">Documentation</a></li>
      <li className={styles.navItem}><a href="https://developers.tabapay.com/recipes">Recipes</a></li>
    </ul>
  </div>
);

export default Header;
