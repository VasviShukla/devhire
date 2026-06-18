import React, { useState } from 'react';
import JobCard from './JobCard';
import jobs from '../data/jobs';
import styles from './BrowseJobs.module.css';

const roles = ['All roles', 'Frontend', 'Backend', 'Full Stack', 'DevOps', 'AI / ML', 'Cloud'];
const stacks = ['All stacks', 'React', 'Next.js', 'Node.js', 'Python', 'Django', 'Java', 'Docker', 'Kubernetes', 'AWS'];
const types = ['All types', 'Full-time', 'Internship', 'Contract'];
const locations = ['All locations', 'Remote', 'Bangalore', 'Hyderabad', 'Mumbai', 'Delhi'];

export default function BrowseJobs() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('All roles');
  const [stack, setStack] = useState('All stacks');
  const [type, setType] = useState('All types');
  const [loc, setLoc] = useState('All locations');

  const filtered = jobs.filter(j => {
    const q = query.toLowerCase();
    const matchQ = !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.stack.join(' ').toLowerCase().includes(q);
    const matchRole = role === 'All roles' || j.role === role;
    const matchStack = stack === 'All stacks' || j.stack.includes(stack);
    const matchType = type === 'All types' || j.type === type;
    const matchLoc = loc === 'All locations' || j.loc === loc;
    return matchQ && matchRole && matchStack && matchType && matchLoc;
  });

  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Find your next dev role</h1>
        <p className={styles.heroSub}>Curated jobs for developers — filtered by stack, role & location.</p>
        <div className={styles.searchRow}>
          <input
            type="text"
            placeholder="Search by role, company or tech..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>

      <div className={styles.filters}>
        {[{ val: role, set: setRole, opts: roles },
          { val: stack, set: setStack, opts: stacks },
          { val: type, set: setType, opts: types },
          { val: loc, set: setLoc, opts: locations }
        ].map((f, i) => (
          <select key={i} value={f.val} onChange={e => f.set(e.target.value)} className={styles.select}>
            {f.opts.map(o => <option key={o}>{o}</option>)}
          </select>
        ))}
      </div>

      <p className={styles.meta}>Showing {filtered.length} job{filtered.length !== 1 ? 's' : ''}</p>

      {filtered.length === 0
        ? <p className={styles.empty}>No jobs match your filters. Try adjusting them.</p>
        : filtered.map(job => <JobCard key={job.id} job={job} />)
      }
    </div>
  );
}
