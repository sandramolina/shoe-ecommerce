import React from 'react';

import NavBar from './features/NavBar/NavBar';
import HomeCarousel from './features/HomeCarousel/HomeCarousel';
import HomeCategory from './features/HomeCategories/HomeCategory';
import NewModels from './features/NewModels/NewModels';
import BestSellers from './features/BestSellers/BestSellers';
import Footer from './features/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomeCarousel />
      <HomeCategory />
      <NewModels />
      <BestSellers />
      <Footer />
    </div>
  );
}

export default App;
