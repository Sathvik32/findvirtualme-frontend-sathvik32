import React from 'react';

const experiences = [
  {
    role: 'Research Assistant',
    company: 'CSU Chico',
    date: 'Feb 2025 – Present',
    bullets: [
      'Distinguishing analogies in Word2Vec using genetic programming',
      'Tech: Python, GloVe/Word2Vec, DEAP, NLP',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'TechComb, Austin, TX',
    date: 'Aug 2024 – Dec 2024',
    bullets: [
      'Built machine vision apps for quality control (+20% accuracy)',
      'Tech: Python, OpenCV, Image Preprocessing',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Sudarshan Engineering Works, Pune, India',
    date: 'Aug 2020 – May 2022',
    bullets: [
      'Automated machinery health checks (17% workflow improvement)',
      'Tech: Python, GCP, PostgreSQL, Cloud Integration',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Tebixa Technologies, Mumbai, India',
    date: 'Oct 2019 – Jul 2020',
    bullets: [
      'Built 5+ responsive client websites (WordPress, Docker)',
      'Improved SEO & performance',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="terminal">
      <h2>Experience</h2>
      {experiences.map((exp, i) => (
        <div key={i} className="exp-card">
          <h3>{exp.role} @ {exp.company}</h3>
          <small>{exp.date}</small>
          <ul>
            {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}