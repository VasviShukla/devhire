import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        DevHire
      </div>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'browse' ? styles.active : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          Browse Jobs
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'post' ? styles.active : ''}`}
          onClick={() => setActiveTab('post')}
        >
          Post a Job
        </button>
      </div>
    </nav>
  );
}
