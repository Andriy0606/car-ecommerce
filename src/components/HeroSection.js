import React from 'react';
import './HeroSection.css';
import image from './img/hero-img.png';

const HeroSection = () => (
  <section className="hero-section">
    <img src={image} alt="Car banner" className='hero-img'/>
    <div className='hero-text'>
        <h2>Знайдіть машину своєї мрії або продайте її</h2>
        <p>На нашому сайті ви зможете знайти будь-яке авто за розумною ціною, або продвти своє</p>
    </div> 
  </section>
);

export default HeroSection;
