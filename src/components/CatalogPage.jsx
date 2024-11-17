import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import './CatalogPage.css';
import image from './img/hero-img.png';

const cars = [
  { id: 1, name: 'Tesla Model S', description: 'Electric luxury sedan', price: 89999, color: 'red', type: 'sedan', image: image },
  { id: 2, name: 'BMW i8', description: 'Hybrid sports car', price: 149999, color: 'blue', type: 'sports', image: image },
  { id: 3, name: 'Audi e-tron', description: 'Electric SUV', price: 74999, color: 'green', type: 'SUV', image: image },
  { id: 4, name: 'Ford Mustang Mach-E', description: 'Electric crossover', price: 42999, color: 'yellow', type: 'crossover', image: image },
];

const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ color: '', type: '' });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const filteredCars = cars.filter(car => {
    return (
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter.color ? car.color === filter.color : true) &&
      (filter.type ? car.type === filter.type : true)
    );
  });

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Car Catalog</h1>

      {/* Фільтри */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <select name="color" onChange={handleFilterChange} value={filter.color}>
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <select name="type" onChange={handleFilterChange} value={filter.type}>
          <option value="">Select Type</option>
          <option value="sedan">Sedan</option>
          <option value="sports">Sports</option>
          <option value="SUV">SUV</option>
          <option value="crossover">Crossover</option>
        </select>
      </div>

      {/* Виведення фільтрованих карток */}
      <div className="catalog-grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="catalog-card">
            <img src={car.image} alt={car.name} className="catalog-image" />
            <h2 className="catalog-name">{car.name}</h2>
            <p className="catalog-description">{car.description}</p>
            <p className="catalog-price">Price: ${car.price}</p>
            <Link to={`/product/${car.id}`}>
              <button className="list-btn">View More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
