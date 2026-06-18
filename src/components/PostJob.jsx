import React, { useState } from 'react';
import styles from './PostJob.module.css';

export default function PostJob() {
  const [form, setForm] = useState({
    title: '', company: '', role: 'Full Stack', type: 'Full-time',
    location: '', salary: '', stack: '', exp: '', description: '', applyLink: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.title || !form.company) {
      alert('Please fill in at least the job title and company name.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ title: '', company: '', role: 'Full Stack', type: 'Full-time', location: '', salary: '', stack: '', exp: '', description: '', applyLink: '' });
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.heading}>Post a new job</h2>
      <p className={styles.sub}>Fill in the details below to list your role on DevHire.</p>

      <div className={styles.grid}>
        <div className={styles.group}>
          <label className={styles.label}>Job title *</label>
          <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Senior React Developer" className={styles.input} />
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Company name *</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="e.g. Acme Corp" className={styles.input} />
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Role type</label>
          <select name="role" value={form.role} onChange={handleChange} className={styles.select}>
            {['Full Stack', 'Frontend', 'Backend', 'DevOps', 'AI / ML', 'Cloud'].map(r => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Employment type</label>
          <select name="type" value={form.type} onChange={handleChange} className={styles.select}>
            {['Full-time', 'Internship', 'Contract'].map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Location</label>
          <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Remote / Bangalore" className={styles.input} />
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Salary range</label>
          <input name="salary" value={form.salary} onChange={handleChange} placeholder="e.g. ₹8–12 LPA" className={styles.input} />
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Tech stack (comma separated)</label>
          <input name="stack" value={form.stack} onChange={handleChange} placeholder="e.g. React, Node.js, MongoDB" className={styles.input} />
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Experience required</label>
          <input name="exp" value={form.exp} onChange={handleChange} placeholder="e.g. 0–1 years / Fresher" className={styles.input} />
        </div>
        <div className={`${styles.group} ${styles.full}`}>
          <label className={styles.label}>Job description</label>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the role, responsibilities, and requirements..." className={styles.textarea} />
        </div>
        <div className={`${styles.group} ${styles.full}`}>
          <label className={styles.label}>Apply link or email</label>
          <input name="applyLink" value={form.applyLink} onChange={handleChange} placeholder="e.g. https://careers.company.com/job123" className={styles.input} />
        </div>
      </div>

      <button className={styles.submitBtn} onClick={handleSubmit}>Post Job →</button>

      {submitted && (
        <div className={styles.success}>
          ✅ Job posted successfully! It will appear in listings shortly.
        </div>
      )}
    </div>
  );
}
