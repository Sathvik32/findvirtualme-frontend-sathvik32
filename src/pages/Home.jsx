import React from 'react';

export default function Home() {
  return (
    <section id="home" className="terminal">
      <h2>Welcome to My Portfolio</h2>
      <p>
        I’m <strong>Gargi Ghadigaonkar</strong>, a Data Scientist completing my
        Master’s in Computer Science at Cal State Chico. My research focuses on
        distinguishing analogies in Word2Vec using genetic programming. I love
        machine learning, data visualization, and NLP.
      </p>

      <h3>Technical Skills</h3>
      <ul>
        <li>Python, C, C++, JavaScript, TypeScript, SQL, R</li>
        <li>PyTorch, TensorFlow, Scikit-learn</li>
        <li>GCP, AWS, Docker</li>
        <li>Word2Vec, BERT, Meta-Learning, OpenCV</li>
      </ul>

      <h3>Activities</h3>
      <ul>
        <li>
          Instructional Student Assistant, CSU Chico Math Dept (Aug 2023 – May 2024)
        </li>
      </ul>
    </section>
  );
}