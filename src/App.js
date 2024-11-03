import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroSection />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
