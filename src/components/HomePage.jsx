import React from 'react';
import HeroSection from './HeroSection';
import ProductList from './ProductList';


const HomePage = () => (
  <div>
    <h1>Welcome to the Car Store</h1>
    <p>This is the homepage with a hero section and featured products.</p>
    <HeroSection />
    <ProductList />
  </div>
);

export default HomePage;
