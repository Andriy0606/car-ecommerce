import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const products = [
  {
    id: 1,
    title: 'Форд Мустанг',
    description: 'Форд Мустанг — це не просто автомобіль, а символ свободи та бунту...',
    image: './img/ford-mustang.jpg',
  },
  {
    id: 2,
    title: 'БМВ 7',
    description: 'БМВ 7 — це вершина розкоші та інженерної майстерності...',
    image: './img/bmw7.jpg',
  },
  {
    id: 3,
    title: 'Tesla Model S',
    description: 'Tesla Model S — це поєднання розкоші, швидкості та електричних технологій.',
    image: './img/ford-mustang.jpg',
  },
  {
    id: 4,
    title: 'Audi e-tron',
    description: 'Audi e-tron — це сучасний електричний кросовер, який пропонує комфорт і стиль.',
    image: './img/bmw7.jpg',
  },
  {
    id: 5,
    title: 'Porsche Taycan',
    description: 'Porsche Taycan — ідеальне поєднання інноваційної електроніки та класичної швидкості.',
    image: './img/ford-mustang.jpg',
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} className="product-img" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
