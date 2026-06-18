import React, { useState } from 'react';
import styles from './JobCard.module.css';

export default function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.card} ${job.featured ? styles.featured : ''}`}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.logo} style={{ background: job.color, color: job.tc }}>
            {job.init}
          </div>
          <div className={styles.info}>
            <div className={styles.titleRow}>
              <span className={styles.title}>{job.title}</span>
              {job.featured && <span className={styles.featuredBadge}>Featured</span>}
            </div>
            <div className={styles.meta}>
              🏢 {job.company} &nbsp;·&nbsp; 📍 {job.loc}
            </div>
          </div>
        </div>
        <div className={styles.salary}>{job.salary}</div>
      </div>

      <div className={styles.badges}>
        <span className={`${styles.badge} ${styles.gray}`}>⏱ {job.type}</span>
        <span className={`${styles.badge} ${styles.teal}`}>👤 {job.exp}</span>
        {job.stack.map(s => (
          <span key={s} className={`${styles.badge} ${styles.blue}`}>{s}</span>
        ))}
      </div>

      {expanded && (
        <div className={styles.description}>
          <p>{job.description}</p>
        </div>
      )}

      <div className={styles.actions}>
        <button className={styles.detailBtn} onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide details ↑' : 'View details ↓'}
        </button>
        <a href={job.applyLink} target="_blank" rel="noreferrer" className={styles.applyBtn}>
          Apply now →
        </a>
      </div>
    </div>
  );
}
