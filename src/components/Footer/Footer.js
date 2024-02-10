import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <a href="https://tabapay.com/privacy.html" className={styles.linkItem}>Terms of Service</a>
      <a href="https://tabapay.com/processing-services-privacy-policy.html" className={styles.linkItem}>Privacy Policy</a>
      <a href="https://www.example.com" className={styles.linkItem}>Contact Us</a>
    </div>
    <div className={styles.copyRight}>
      &copy; {new Date().getFullYear()} Your Next Developer. All rights reserved.
    </div>
  </footer>
);

export default Footer;
