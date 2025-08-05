import React from 'react';

const projects = [
  {
    title: 'Transfer Learning on Language Models',
    date: 'Present',
    desc: 'Domain adaptation & soft prompt tuning on BERT/MAML to improve performance on limited data.',
    tech: ['Python', 'Transfer Learning', 'MAML', 'BERT', 'NLP'],
  },
  {
    title: 'E-commerce Recommendation System',
    date: 'Nov 2023',
    desc: 'Graph-based recommendations using Amazon data & vector embeddings.',
    tech: ['Python', 'Graph Embeddings'],
  },
  {
    title: 'AV/ADAS Detection System',
    date: 'Apr 2023',
    desc: 'Jetson Nano pedestrian, lane, and drowsiness detection (93% accuracy @25 FPS).',
    tech: ['C++', 'Python', 'OpenCV', 'CUDA'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="terminal">
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className="proj-card">
          <h3>{p.title}</h3>
          <small>{p.date}</small>
          <p>{p.desc}</p>
          <div className="tags">
            {p.tech.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      ))}
    </section>
  );
}