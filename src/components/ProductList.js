import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
import cardImage1 from './img/ford-mustang.jpg';
import cardImage2 from './img/bmw7.jpg';

const ProductList = () => {
  const [visibleCards, setVisibleCards] = useState(2);

  const products = [
    {
      id: 1,
      title: 'Форд Мустанг',
      description: 'Форд Мустанг — це не просто автомобіль, а символ свободи та бунту...',
      image: cardImage1,
    },
    {
      id: 2,
      title: 'БМВ 7',
      description: 'БМВ 7 — це вершина розкоші та інженерної майстерності...',
      image: cardImage2,
    },
    {
      id: 3,
      title: 'Tesla Model S',
      description: 'Tesla Model S — це поєднання розкоші, швидкості та електричних технологій.',
      image: cardImage1,
    },
    {
      id: 4,
      title: 'Audi e-tron',
      description: 'Audi e-tron — це сучасний електричний кросовер, який пропонує комфорт і стиль.',
      image: cardImage2,
    },
    {
      id: 5,
      title: 'Porsche Taycan',
      description: 'Porsche Taycan — ідеальне поєднання інноваційної електроніки та класичної швидкості.',
      image: cardImage1,
    },
  ];

  const showMore = () => {
    setVisibleCards(prevVisible => Math.min(prevVisible + 3, products.length));
  };

  return (
    <section>
      <div className="product-list">
        {products.slice(0, visibleCards).map(product => (
          <div key={product.id} className="catalog-card">
            <img src={product.image} alt={product.title} className="card-img" />
            <h2 className="card-title">{product.title}</h2>
            <p className="card-des">{product.description}</p>
            <Link to={`/product/${product.id}`}>
              <button className="list-btn">View More</button>
            </Link>
          </div>
        ))}
      </div>

      {visibleCards < products.length && (
        <div className="btn-wrap">
          <button className="list-btn" onClick={showMore}>Побачити Більше</button>
        </div>
      )}
    </section>
  );
};

export default ProductList;
