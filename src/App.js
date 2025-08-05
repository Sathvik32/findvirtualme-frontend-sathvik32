import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar     from './components/NavBar';
import Home       from './pages/Home';
import Experience from './pages/Experience';
import Projects   from './pages/Projects';
import Contact    from './pages/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects"   element={<Projects />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;