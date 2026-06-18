import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BrowseJobs from './components/BrowseJobs';
import PostJob from './components/PostJob';
import styles from './App.module.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('browse');

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'browse' ? <BrowseJobs /> : <PostJob />}
      </div>
    </div>
  );
}
