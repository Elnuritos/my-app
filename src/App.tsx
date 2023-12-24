import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Publications } from './components/Publications';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <main>
      <Publications />
    </main>
  </div>
  );
}

export default App;
