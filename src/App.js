import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TreeMenu from './components/TreeMenu/TreeMenu';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.content}>
        <div className={styles.treeMenuContainer}>
          <TreeMenu />
        </div>
        <div className={styles.bodyContainer}>
          {/* Content goes here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
