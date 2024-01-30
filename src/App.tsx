import React from 'react';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { About, Home } from './pages';
import PublicationsPage from './pages/PublicationsPage';


function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications/:id" element={<PublicationsPage />} />
      </Routes>
    </>

  );
}

export default App;
