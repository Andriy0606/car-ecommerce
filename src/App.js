import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage'; 
import HomePage from './components/HomePage'; 
import ProductPage from './components/ProductPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />

        {/* Налаштування роутів */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
