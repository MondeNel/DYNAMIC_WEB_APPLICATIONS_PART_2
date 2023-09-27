import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './Data';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />


    <div className="cards-list">
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
        />
      ))}
    </div>


  </React.StrictMode>,
);
