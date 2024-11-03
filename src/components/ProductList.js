import React from 'react';
import './ProductList.css';
import cardImage1 from './img/ford-mustang.jpg';
import cardImage2 from './img/bmw7.jpg';

const ProductList = () => (
  <section>
    <div className="product-list">
    <div className='card'>
        <img src={cardImage1} alt="Car banner" className='card-img'/>
        <h1 className='card-title'>Форд Мустанг</h1>
        <p className='card-des'>Форд Мустанг — це не просто автомобіль, а символ свободи та бунту, що захоплює серця шанувальників швидкості по всьому світу. Його агресивний дизайн, потужні двигуни та неперевершена керованість дарують відчуття адреналіну, яке неможливо забути. Цей легендарний мустанг поєднує в собі класичний стиль і сучасні технології, втілюючи у собі дух американської мрії.</p>
    </div>

    <div className='card'>
        <img src={cardImage1} alt="Car banner" className='card-img'/>
        <h1 className='card-title'>БМВ 7</h1>
        <p className='card-des'>БМВ 7 — це вершина розкоші та інженерної майстерності, що втілює в собі елегантність і потужність в одному флаконі. Кожна деталь цього автомобіля створена для максимального комфорту та досконалості, пропонуючи водієві та пасажирам неперевершений досвід подорожі. З інноваційними технологіями та розкішним дизайном, БМВ 7 символізує статус і прогрес, ставлячи нові стандарти в світі преміум-класу.</p>
    </div>

    <div className='card'>
        <img src={cardImage1} alt="Car banner" className='card-img'/>
        <h1 className='card-title'>Форд Мустанг</h1>
        <p className='card-des'>Форд Мустанг — це не просто автомобіль, а символ свободи та бунту, що захоплює серця шанувальників швидкості по всьому світу. Його агресивний дизайн, потужні двигуни та неперевершена керованість дарують відчуття адреналіну, яке неможливо забути. Цей легендарний мустанг поєднує в собі класичний стиль і сучасні технології, втілюючи у собі дух американської мрії.</p>
    </div>
    </div>

    <div className='btn-wrap'>
    <button className='list-btn'>Побачити Більше</button>
    </div>
  </section>
);

export default ProductList;
